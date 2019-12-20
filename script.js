'use strict';

let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    
    time = prompt("Введите дату в формате yyyy-mm-dd?",'');
}

start();

 let appData = {
     budget : money,
     timeData : time,
     expenses : {},
     optionalExpenses :{},
     income :[],
     savings : true
 };

function chooseExpenses (){
    for(let i=0;i<2;i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
            if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != "" && b != "" && a.length < 50) {
                console.log("its done");   
                 appData.expenses[a] = b;  
            } else {
                i--;
                console.log("some error was");       
              }
    
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    
    alert("Дневной бюджен:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay<100){
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
        console.log("Средний уровень достатка");    
    } else if(appData.moneyPerDay > 20000) {
        console.log("Высокий уровень достатка");
    }  
    
}

detectLevel();


function checkSavings(){
    if(appData.savings== true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
            appData.monthIncome =save/100/12*percent;
            alert("Ваш Доход с депозита: " + appData.monthIncome);
        }
}

checkSavings();

function chooseOptExpenses(){
   for(let i=1;i<=3;i++){
    let opt = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i]=opt;
    console.log(appData.optionalExpenses);
}
}

chooseOptExpenses();
