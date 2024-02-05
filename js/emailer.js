const wrapper=document.querySelector(".wrapper" ),
signupHeader= document.querySelector(".signup .header"),
instructionHeader= document.querySelector(".instruction .header");
instructionHeader.addEventListener("click",() =>{
    wrapper.classList.add("active")
})
signupHeader.addEventListener("click",() =>{
    wrapper.classList.remove("active")
})


// Message to display
const password = document.querySelector("#Password");
const defaultMessage = document.querySelector(".mesg");

// Function to show the message
function showMessage() {
    defaultMessage.style.display = 'block';
}

// Function to hide the message
function hideMessage() {
    defaultMessage.style.display = 'none';
}

// Event listeners for focusing and typing
password.addEventListener('focus', showMessage);
password.addEventListener('blur', hideMessage);
password.addEventListener('input', hideMessage);
