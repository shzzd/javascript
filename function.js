function say(){
    console.log("Hey");
    console.log("What's up?");
}
say();

function doubleIt(num){
    var result = num*2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(100);
var total = first + second;
console.log(total);
console.log(first, second);

function add(num1, num2){
    var result = num1+num2;
    return result;
}

var sum = add(5,10);
console.log(sum);