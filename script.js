'use strict';

let startbtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];


let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    
    countBtn = document.getElementsByTagName('button')[2],

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),

    chooseYear = document.querySelector('.year-value'),
    chooseMonth = document.querySelector('.month-value'),
    chooseDay = document.querySelector('.day-value');

let money,time;

expensesBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBtn.disabled = true;

startbtn.addEventListener('click',function(){
    time = prompt("Введите дату в формате yyyy-mm-dd?",'');
    money = +prompt("Ваш бюджет на месяц?",'');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    chooseYear.value  = new Date(Date.parse(time)).getFullYear();
    chooseMonth.value  = new Date(Date.parse(time)).getMonth() + 1;
    chooseDay.value  = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBtn.disabled = false;

});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
console.log(expensesItem.length);
    for(let i=0; i < expensesItem.length; i++){

        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
            if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != "" && b != "" && a.length < 50) {
                console.log("its done");   
                 appData.expenses[a] = b;  
                 sum += +b;
            } else {
                i--;
                console.log("you made some mistakes");       
              }
    //console.log(`a: ${a} and  b: ${b}`);
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click',function(){
    for(let i=0; i< optionalExpensesItem.length; i++){      
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i]=opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';

    }

});

countBtn.addEventListener('click',function() {

    if (appData.budget != undefined ) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        console.log(appData.moneyPerDay);

        if(appData.moneyPerDay<100){
            levelValue.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
            levelValue.textContent= "Средний уровень достатка"; 
        } else if(appData.moneyPerDay > 20000) {
            levelValue.textContent= "Высокий уровень достатка"; 
        } else {
            levelValue.textContent= "Произошла ошибка";

        }    
    } else {
        daybudgetValue.textContent ="произошла ошибка";
    }
});


chooseIncome.addEventListener('input',function(){

    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click',function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings= true;

    }
});

sumValue.addEventListener('input',function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +choosePercent.value;

        appData.monthIncome =sum/100/12*percent;
        appData.yearIncome =sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncomet;
        yearsavingsValue.textContent = appData.yearIncome;

    }
});

choosePercent.addEventListener('input',function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +choosePercent.value;

        appData.monthIncome =sum/100/12*percent;
        appData.yearIncome =sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;

    }
});

 let appData = {
     budget : money,
     timeData : time,
     expenses : {},
     optionalExpenses :{},
     income :[],
     savings : false,
     
}
