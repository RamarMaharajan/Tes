var myAge=30;
var myFriendAge = myAge;
console.log("My ageis:", myAge);
console.log("Friend age is:", myFriendAge);

myAge = myAge + 1;
console.log("My age after:", myAge);
console.log("Friend age is:", myFriendAge);


var myToyBox = {toy:"Car"};
var friendToyBox = myToyBox;
console.log("My toy is:", myToyBox.toy);
console.log("Friend toy is:", friendToyBox.toy);

friendToyBox.toy = "Doll";

console.log("My toy after changes:", myToyBox.toy);
console.log("Friend toy after changes:", friendToyBox.toy);

var address = [3, "Bhoomi Nilla Apt", "Chennai"];

console.log("Array address:", address[0], address[1], address[2]);

var addressNew = {door_no: 15, apt: "NLY", city: "Tirunelveli"};

console.log("Object address:", addressNew.door_no, addressNew.apt, addressNew.city);

function sum(num1, num2, num3, text){
    return text + ":" + (num1 + num2 + num3);
}
console.log(sum(14,28,19, "Medium values"));
console.log(sum(6,2,5, "Small value"));
console.log(sum(37,84,87, "Heighest values"));
