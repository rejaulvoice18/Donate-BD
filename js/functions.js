/**
 * common shared functions
 */

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    document.getElementById(id).value = ""
    return inputNumber;
    
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// btn toggler

function showSectionById(id){
    document.getElementById('donation-data').classList.add('hidden');
    document.getElementById('history-data').classList.add('hidden');

    // Showing section with the provided ID as parameter
    document.getElementById(id).classList.remove('hidden');
}