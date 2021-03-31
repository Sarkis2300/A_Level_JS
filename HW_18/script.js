/*1*/
class CustomString{
    reverse(str){
        return str.split("").reverse().join("");
    }

    ucFirst(string){
        return string = string[0].toUpperCase() + string.substring(1);
    }

    ucWords(strings){
        return strings.replace(/(^|\s)\S/g, function(a) {
            return a.toUpperCase()
        } );
    }
}

const myString = new CustomString();

console.log(myString.reverse('qwerty'));
console.log(myString.reverse('sarkis'));

console.log(myString.ucFirst('sarkis'));
console.log(myString.ucFirst('symovyan'));

console.log(myString.ucWords('symovyan symovyan'));
console.log(myString.ucWords('заходят в бар русский, немец и американец'));

