document.getElementById('calculate').addEventListener('click', function(){
    // get food expense 
    const foodInput = document.getElementById('food');
    const foodInputTotal = foodInput.value;
    const food = parseFloat(foodInputTotal);
    food.value = '';
    
    // get rent expense 
    const rentInput = document.getElementById('rent');
    const rentInputTotal = rentInput.value;
    const rent = parseFloat(rentInputTotal);
    rent.value = '';
    
    // get clothes expense 
    const clothesInput = document.getElementById('clothes');
    const clothesInputTotal = clothesInput.value;
    const clothes = parseFloat(clothesInputTotal);
    clothes.value = '';

    // total monthly expense 
    const totalExpenses = food + rent  + clothes ;

    // total expense
    const expensesTotal = document.getElementById('total-expenses');
    expensesTotal.innerText = totalExpenses;


    // income section 
    const incomeTotal = document.getElementById('income');
    const incomeTotalText = incomeTotal.value;
    const income = parseFloat(incomeTotalText)
    // console.log(income);
    const balance = parseFloat(income) - parseFloat(totalExpenses);
    // console.log(balance)

    // balance section 
    const balanceTotal = document.getElementById('total-balance');
    balanceTotal.innerText = balance;
    // console.log(balanceTotal);
})

// error handle for negative number 
function verifyMinus(){
    const verify = document.getElementById('income').value;
    
    const minusError = document.getElementById('for-negative');

    if(verify < 0){
        minusError.style.display = "block"
    }
    else{
        minusError.style.display = "none"
    }
};

// for saving amount
document.getElementById('save-button').addEventListener('click',function(){
    const saveAmount = document.getElementById('save-amount-input');
    const saveText = saveAmount.value;
    const save  = parseFloat(saveText);
    // console.log(save)
    const income = document.getElementById('income');
    const incomeText = income.value;
    const incomeTextTotal = parseFloat(incomeText)
    // console.log(incomeTextTotal)
    const amountTotal = incomeTextTotal * save/100 ;
    // console.log(amountTotal)

    // saving amount 
    const amount = document.getElementById('saving-amount');
    amount.innerText = amountTotal;

    // remaining balance 
    const totalBalance = document.getElementById('total-balance');
    const balance = totalBalance.innerText;
    console.log(balance)

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = parseFloat(balance) -parseFloat(amountTotal);
})  






