// Show an error if text input is not a number
// Ask user "What temperature is it?" and put answer in temperature
button.addEventListener("click", temperature);

function temperature(num) {
    const questionVal = Number (document.getElementById('question').value);
    console.log(questionVal);
    if (questionVal >= 78) {
        document.getElementById('hotOptions').style.display = "block";
        document.getElementById('coolOptions').style.display = "none";
        document.getElementById('coldOptions').style.display = "none";
    }
    else if (questionVal <=77 && questionVal >=60) {
        document.getElementById('hotOptions').style.display = "none";
        document.getElementById('coolOptions').style.display = "block";
        document.getElementById('coldOptions').style.display = "none";
    }
    else if (questionVal <=60) {
        document.getElementById('hotOptions').style.display = "none";
        document.getElementById('coolOptions').style.display = "none";
        document.getElementById('coldOptions').style.display = "block";
    }
}
// IF temperature is <78, return hotOptions

// IF temperature is <65, return coolOptions
// ELSE return coldOptions
// Turn whichever return into options
// Tell user "You should look at" options