let prevBtns = document.querySelectorAll(".btn-prev");
let nextBtns = document.querySelectorAll(".btn-next");
let progress = document.querySelector(".progress");
let formSteps = document.querySelectorAll(".form-step");
let progressSteps = document.querySelectorAll(".progress-step");


let namee = document.querySelector("#name");
let username = document.querySelector("#username");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");




let formStepsNum = 0;


nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if(A(namee.value,6,[65,122]) && A(username.value,6,[48,122])){
            formStepsNum++;
            updateFormSteps();
            updateProgressbar();
        }
    

    });
});


prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});


function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active")
    })
    formSteps[formStepsNum].classList.add("form-step-active");
}


function updateProgressbar() {
    progressSteps.forEach((progressStep, index) => {
        if ( index < formStepsNum + 1 ) {
            progressStep.classList.add('progress-step-active')
            
            
        } else {
            progressStep.classList.remove('progress-step-active')
        }
    })
    progress.style.width = ((formStepsNum) / (progressSteps.length - 1)) * 100 + "%";
    
}


function A(x,min,arr){
    if(x.length<6){
        return false
    }
    for (let i = 0; i < x.length; i++) {
        if (x.charCodeAt(i) < arr[0] || x.charCodeAt(i) > arr[1]) {
            return false
        }
    }
    return true
} 
