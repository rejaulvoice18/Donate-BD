
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.document.event);
    
    const donateAmount = getInputFieldValueById('input-donate-money');
    const savingBalance = getTextFieldValueById('saving-balance');
   

    if(!isNaN(donateAmount) && donateAmount > 0 && donateAmount < savingBalance){
        const balance = getTextFieldValueById('donation-received-balance');
        const newBalance = balance + donateAmount;

        //Saving balance amount
        const newSavingBalance = savingBalance - donateAmount;

        // Update the donation received balance
        document.getElementById('donation-received-balance').innerText = newBalance;

        // Updating the saving balance
        document.getElementById('saving-balance').innerText = newSavingBalance;

        // modal
        document.getElementById('my_modal_5').showModal()

        // add to transaction history

        const div = document.createElement('div');
    }
    else{
        alert("This is not a number or negetive number or greater than available balance");
        return;
    }
})

// Feni

document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();
    const donateAmount = getInputFieldValueById('input-donate-money-feni');
    const savingBalance = getTextFieldValueById('saving-balance');
    

    if(!isNaN(donateAmount) && donateAmount > 0 && donateAmount < savingBalance){
        const balance = getTextFieldValueById('donation-received-balance-feni');
        const newBalance = balance + donateAmount;

        //Saving balance amount
        const newSavingBalance = savingBalance - donateAmount;

        // Update the donation received balance
        document.getElementById('donation-received-balance-feni').innerText = newBalance;

        // Updating the saving balance
        document.getElementById('saving-balance').innerText = newSavingBalance;

        // modal
        document.getElementById('my_modal_5').showModal()
    }
    else{
        alert("This is not a number or negetive number or greater than available balance");
        return;
    }
})

// Quota

document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();
    const donateAmount = getInputFieldValueById('input-donate-money-quota');
    const savingBalance = getTextFieldValueById('saving-balance');
    

    if(!isNaN(donateAmount) && donateAmount > 0 && donateAmount < savingBalance){
        const balance = getTextFieldValueById('donation-received-balance-quota');
        const newBalance = balance + donateAmount;

        //Saving balance amount
        const newSavingBalance = savingBalance - donateAmount;

        // Update the donation received balance
        document.getElementById('donation-received-balance-quota').innerText = newBalance;

        // Updating the saving balance
        document.getElementById('saving-balance').innerText = newSavingBalance;

        // modal
        document.getElementById('my_modal_5').showModal()
    }
    else{
        alert("This is not a number or negetive number or greater than available balance");
        return;
    }
})