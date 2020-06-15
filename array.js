var friendAge = [22,23,24,26,25];
var iqy = friendAge[2];
friendAge[1] = 21; //access n change
console.log(friendAge);
console.log("Age of Iqy "+iqy);

var position = friendAge.indexOf(23);//detect
console.log(position);

console.log(friendAge.length);
friendAge.push(30)
friendAge.push(32)
console.log(friendAge.length);
friendAge.pop();
console.log(friendAge.length);
friendAge.unshift(34);
friendAge.unshift(33);
console.log(friendAge);
friendAge.shift();
console.log(friendAge);
