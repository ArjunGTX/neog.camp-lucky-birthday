const dateInput = document.getElementById('date-of-birth');
const luckyNumberInput = document.getElementById('lucky-number');
const checkBtn = document.getElementById('check-btn');
const outputField = document.getElementById('output-field');

checkBtn.addEventListener('click',checkLuckyNumber);

function showMessage(message) {
    outputField.firstElementChild.innerText = message;
    outputField.classList.add('show');
   
    
}

function validate(dateOfBirth,luckyNumber) {
    if(!dateOfBirth || !luckyNumber) {
        showMessage('Enter both fields.');
    } else if (isNaN(luckyNumber)) {
        showMessage('Please enter a number.');
    } else {
        return true;
    }
}

function clearOutput() {
    outputField.classList.remove('show');
}

function sumOfDigits(dateString) {
    let sum = 0;
    for(let i=0; i<dateString.length; i++) {
        sum = sum + Number(dateString[i]);
    }
    return sum;
}

function showLuck(dateSum,luckyNumber) {
    if(dateSum % luckyNumber === 0) {
        showMessage(`Wow!! ${luckyNumber} is a Lucky Number.`)
    } else {
        showMessage(`${luckyNumber} is against your Luck.`)
    }
}

function checkLuckyNumber() {
    clearOutput();
    let dateOfBirth = dateInput.value;
    let luckyNumber = luckyNumberInput.value;
    if (validate(dateOfBirth,luckyNumber)) {
        let dateString = dateOfBirth.replaceAll("-","");
        let dateSum = sumOfDigits(dateString);
        showLuck(dateSum,luckyNumber);
    }
}