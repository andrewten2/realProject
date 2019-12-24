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
     savings : true,
     chooseExpenses : function(){
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
     },
     detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    
        alert("Дневной бюджен:" + appData.moneyPerDay);
     },
     detectLevel : function(){
        if(appData.moneyPerDay<100){
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
            console.log("Средний уровень достатка");    
        } else if(appData.moneyPerDay > 20000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибочка какая-то");
        }    
     },
     checkSavings : function(){
        if(appData.savings== true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
                appData.monthIncome =save/100/12*percent;
                alert("Ваш Доход с депозита: " + appData.monthIncome);
            }   
     },
     chooseOptExpenses : function(){
        for(let i=1;i<=3;i++){
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i]=opt;
            console.log(appData.optionalExpenses);
        }
     },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход?(через запятую)","");
        while(items == "" || items == null || typeof(items) != 'string'){
            items = prompt("Вы ошиблись повторите.! Что принесет дополнительный доход?(через запятую)","");
        }

        appData.income = items.split(',');
        appData.income.push(prompt('Может чтото еще?'));
        appData.income.sort();

        appData.income.forEach(function(item, i,mass){
        console.log(++i +"." + " Способы доп заработка: "+ item);
        });
    }     

 };

console.log("Наша программа включает в себя данные: ");
for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);

}
