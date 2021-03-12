/*Дан масив з елементами 'Привет,', 'мир' и '!'. Необхідно записати в переменну текстову фразу "Привет, мир!", 
А потім вивести на екран, що містить цю переменну.*/
let arr = ["Привет, ", "мир", "!"];

let result1 = arr.join('');
console.log(result1);


/*Змінна мова може приймати 2 значення: 'ru' 'en'. Якщо вона має значення "ru", то в змінну  arr запишіть масив днів тижня на українській мові, 
якщо має значення "en" - на англійській. Виконайте завдання через 2 if, через switch і через багатовимірний масив без if, switch.*/
var lang = 'ru';
var array = [];
if (lang == 'ru'){
    array.push('понеділок ' ,'вівторок ' ,'середа ' ,'четвер ' ,'п’ятниця ' ,'субота ', 'неділя ');
}
else if(lang == 'en'){
    array.push('monday ' ,'tuesday ' ,'wednesday ' ,'thursday ' ,'friday ' ,'saturday ', 'sunday ');
}
console.log(array);

var array2=[];
var language = 'en';
switch(language){
    case 'ru':
        array2.push('понеділок ' ,'вівторок ' ,'середа ' ,'четвер ' ,'п’ятниця ' ,'субота ', 'неділя ');
        break;
    case 'en':
        array2.push('monday ' ,'tuesday ' ,'wednesday ' ,'thursday ' ,'friday ' ,'saturday ', 'sunday ');
        break;
}
console.log(array2);

var array3 = 
[
    ["ru", "en"],
    
    ['понеділок ' ,'вівторок ' ,'середа ' ,'четвер ' ,'п’ятниця ' ,'субота ', 'неділя '],
    ['monday ' ,'tuesday ' ,'wednesday ' ,'thursday ' ,'friday ' ,'saturday ', 'sunday ']
];

let lan = "ru";

let nIndex = array3[0].indexOf(lan);
let res = array3[nIndex+1];

console.log(res);

/*.Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10), 
количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. Выводится номер подъезда, 
в котором находится указанная квартира. При вводе некорректных данных предусмотреть генерацию исключительных ситуаций. */

var floors = 10; 
var porches = 2; 
var apartsOnFloor = 10; 

var apartment = prompt("Номер квартиры"); 

var floor = Math.ceil(apartment / apartsOnFloor);

var porch = Math.ceil(floor / floors);

floor -= (porch - 1) * floors;

if(porch>10 || porch<1){
    alert('ERROR - amount of porches is not correct');
}else if(porches>10 || porches<1){
    alert('ERROR - amount of porches is not correct');
}else if(floor>25 || floor<1){
    alert('ERROR - amount of floors is not correct');
}else if(floors>25 || floors<1){
    alert('ERROR - amount of floors is not correct');
}else if(apartsOnFloor>20 || apartsOnFloor<1){
    alert('ERROR - amount of apartments on floor is not correct');
}else if(porch>porches){
    alert('error');
}
else{alert("Квартира с номером " + apartment + " находится в подъезде № " + porch + " на " + floor + " этаже");
}