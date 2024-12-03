/* Number 1 */
let myNum = 10;
let myStr = "some string";
let myBool = "true";
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'First Name',
    last: 'Last Name'
};

/* Number 2 */
let decimal2 = myNum.toFixed(2);
console.log(decimal2);

/* Number 3 */
let i = 3;
console.log(++i);
console.log(--i);
i++;
console.log(i);
i--;
console.log(i);

/* Number 4 */
let myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= myNum;
console.log(myTest);

myTest *= myNum;
console.log(myTest);

myTest /= myNum;
console.log(myTest);

myTest %= myNum;
console.log(myTest);

/* Number 5 */
const myPi = Math.PI;
console.log(myPi);

let myRound = Math.round(89.279);
console.log(myRound);

let myRandom = Math.floor(Math.random(1-10) * 11);
console.log(myRandom);

let myPow = Math.pow(3, 5);
console.log(myPow);

/* Number 6 */
let strObj = {};
strObj.str = "Мама мыла раму, рама мыла маму";
strObj.length = strObj.str.length;
console.log("Рядок \"" + strObj.str + "\" займає " + strObj.length + " кодових значень");

/* Number 7 */
let isRamaPos = strObj.str.indexOf("рама");
console.log(isRamaPos);
let isRama = isRamaPos !== -1;
console.log(isRama);

/* Number 8 */
let strReplace = strObj.str.replace("мыла", "моет");
strReplace = strReplace.replace("рама", "Рама");
strReplace = strReplace.replace("мыла", "держит");
console.log(strReplace);

/* Number 9 */
let someStr = 'some STRING';
console.log(someStr.toUpperCase());
console.log(someStr.toLowerCase());