
document.getElementById('btn-donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();
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
        const title = document.getElementById('title-noakhali').innerText;
        const dateAndTime = new Date();
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('px-6');
        div.classList.add('py-6');
        div.classList.add('space-y-4');
        div.innerHTML = `
            <p class="text-xl font-bold">${donateAmount} Taka is ${title}</p>
            <p>Date: ${dateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);
        

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
        document.getElementById('my_modal_5').showModal();

        // add to transaction history
        const title = document.getElementById('title-feni').innerText;
        const dateAndTime = new Date();
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('px-6');
        div.classList.add('py-6');
        div.classList.add('space-y-4');
        div.innerHTML = `
            <p class="text-xl font-bold">${donateAmount} Taka is ${title}</p>
            <p>Date: ${dateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);
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
        document.getElementById('my_modal_5').showModal();

        // add to transaction history
        const title = document.getElementById('title-quota').innerText;
        const dateAndTime = new Date();
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('rounded-lg');
        div.classList.add('px-6');
        div.classList.add('py-6');
        div.classList.add('space-y-4');
        div.innerHTML = `
            <p class="text-xl font-bold">${donateAmount} Taka is ${title}</p>
            <p>Date: ${dateAndTime}</p>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else{
        alert("This is not a number or negetive number or greater than available balance");
        return;
    }
})