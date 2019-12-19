'use strict';

let money,
    time;

 money = +prompt("Ваш бюджет на месяц?",'');
 time = prompt("Введите дату в формате yyyy-mm-dd?",'');

 let appData = {
     budget : money,
     timeData : time,
     expenses : {},
     optionalExpenses :{},
     income :[],
     savings : false
 };

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
appData.moneyPerDay = appData.budget / 30;

alert("Дневной бюджен:" + appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
    console.log("Средний уровень достатка");    
} else if(appData.moneyPerDay > 20000) {
    console.log("Высокий уровень достатка");
}  