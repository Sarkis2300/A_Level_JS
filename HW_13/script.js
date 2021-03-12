function padStart(str, number, filler){
    let result = str;
    if (str.length >= number)
        return str;
    for (let i = 0; i < number - str.length; i += filler.length) {
        result = filler + result;
      }
      result = result.substring(result.length - number);
    return result;
}

console.log(padStart('joi',5,'o07'));


function toPrecision(number, digits){
    let stringResult = number.toString().split('');
    let result = stringResult.map(Number);
    if(digits>0){
    if (digits>result.length-1){
    while(digits>result.length-1){
       result.push(0);
       digits--;
   }
   let result2 = result.join('');
   return  result2;
}
   else if(digits==result.length-1){
    let result2 = result.join('');
    return result2;
   }
   else{
        while(digits<result.length-1){
            result.pop();
            digits++;
        }
        let result2 = result.join('');
        return result2;
        }
    }
    else{
        console.log('error')
    }
} 
console.log(toPrecision(13.78 , 6))
//знаю что работает неправильно, но сделать правильно не смог