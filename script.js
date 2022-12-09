//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
var input1 = document.getElementById("firstname");
var span1 = document.getElementById("display-firstname");
input1.addEventListener('keyup', () => {
span1.textContent = input1.value
});

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
var input2 = document.getElementById("age");
var sec2 = document.getElementById("a-hard-truth");
input2.addEventListener('keyup', () => {
if(input2.value >= 18) {
    sec2.setAttribute("style","visibility: visible");
}
});

//Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
var input3 = document.getElementById("pwd");
input3.addEventListener('keyup', () => {
    if(input3.value.length < 6) {
        input3.setAttribute("style", "background-color: #ff0000");
    }
    else(
        input3.setAttribute("style", "background-color: none")
    )
});

var input4 = document.getElementById("pwd-confirm");
input4.addEventListener('keyup', () => {
    if(input4 !== input3){
        input4.setAttribute("style", "background-color: #ff0000");
    }
    else(
        input4.setAttribute("style", "background-color: none")
    )
});

//Use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const selectMode = document.getElementById('toggle-darkmode'); 
const body = document.querySelector('body');  
selectMode.addEventListener('change', () => {   
    if (selectMode.value=='light'){     
        body.style.backgroundColor = "white";      
        body.style.color= "black";       
    }   
    else {     
        body.style.backgroundColor = "black";      
        body.style.color= "white";   
    } 
});