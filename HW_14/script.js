/*trim*/
function trim(str){
    result = str.replace(/\s/g, '');
    return result;
}
console.log(trim('   oop   '));

/*toLowerCase*/
function toLowerCase(str) {
    var result = '';
  
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (code > 64 && code < 91) {
        result += String.fromCharCode(code + 32);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  }
console.log(toLowerCase('Hello BADABOOOM'));

/*calculate K =ln(p*p + y*y*y)+e(в стпени p)*/
function calculate (p,y){
    let ln = 15;
    let e = 10;
    let K =ln*(Math.pow(p, 2) + Math.pow(y, 3)) + Math.pow(e, p);
    if (typeof p !== 'string' && typeof y !== 'string'){
    return K;}
    else{
        console.log('error')
    }
}
console.log(calculate(1.4,3));