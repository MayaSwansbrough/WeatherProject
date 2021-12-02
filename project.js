// Show an error if text input is not a number
// Ask user "What temperature is it?" and put answer in temperature
button.addEventListener("click", temperature);

function temperature(num) {
    const questionVal = Number (document.getElementById('question').value);
    console.log(questionVal);
}
// IF temperature is <78, return hotOptions
if (questionVal >=78) {
    
}
// IF temperature is <65, return coolOptions
// ELSE return coldOptions
// Turn whichever return into options
// Tell user "You should look at" options