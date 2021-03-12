/*Напишіть код, котрий буде перетворювати секунди в години, хвилини і секунди в форматі: 00 годин 00 хвилин 00 секунд
спробувати на 6000, 25781452,47624796224896,4568*/
var s = 25781452;

var hour= (s/60/60)-((s/60/60)%1);
var minute= ((s/60)-((s/60)%1))-hour*60;
var second= s % 60;
 
var result = (hour < 10 ? '0'+hour : hour) + ' годин ' + (minute < 10 ? '0' + minute : minute) + ' хвилин ' + (second    < 10 ? '0' + second : second) + ' секунд ';

console.log(result);

/*Створити масив з місяцями і отримати назву поточного місяця з масиву
Номер поточного місяця можна через функцію (new Date()).getMonth();*/
let month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
let currentMonth=(new Date()).getMonth();
console.log(month[currentMonth]);