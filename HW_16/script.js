/*1*/ 
function counter(a){
    return function(b){
        return a+=b;
    }
}

const incr = counter(0);

console.log(incr(5));
console.log(incr(2));
console.log(incr(3));
console.log(incr(90));
console.log(incr(3));

/*2*/
function arrayPush(){
    let arr = [];
    return function (element){
        if (element!==undefined){
            arr.push(element);
           return arr;
        } 
        else{
            arr.length = 0;
            return arr;
        }
    }
}

let getUpdatedArr = arrayPush();
let getUpdatedAr = arrayPush();

console.log(getUpdatedArr(5));
console.log(getUpdatedArr(6));
console.log(getUpdatedArr());
console.log(getUpdatedArr(12));
console.log(getUpdatedArr(2323));
console.log(getUpdatedArr({name: "Сосик брат"}));
