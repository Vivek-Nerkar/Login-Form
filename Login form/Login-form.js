document.addEventListener("DOMContentLoaded", function() {
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let checkBox = document.querySelector("#terms");
let formS = document.querySelector(".form");
    formS.addEventListener("submit", function(event){
    event.preventDefault();
    //validation of the input
    if(!validEmail(emailInput.value)){
        return alert("Please enter valid email!");
       
    }
    if(passwordInput.value.trim() === ""){
        return alert("Please enter valid password!");
        
    }
    if(!checkBox.checked){
        return alert("You should agree to our terms and conditons, before proceeding!");
       
    }
    alert("Form submitted successfully!");
});
function validEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
});