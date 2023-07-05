const firstPassword = document.getElementById("first-password")
const confirmation = document.getElementById("confirm-password")
const changingText = document.querySelector(".changing-text")
const submitButton = document.querySelector("button")


submitButton.addEventListener("click",()=>{
    if( firstPassword===confirmation){
        changingText.innerText = "Success! Passwords match"
    }else{
       changingText.innerText = "Error! Passwords do not match"
    }
})