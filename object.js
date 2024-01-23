let stud = {}
console.log(stud);
console.log(typeof stud);

stud.name1 = "raj"
stud.age = 19;
stud.skills = ["html", "css", "js"]
console.log(stud);

//accessing the values using keyname
console.log(stud.name1);

//using new keyword calling object constructor
var studd = new Object();
console.log(typeof studd);

//differentiating between array and object without using typeOf
let arr = [12, 19]
console.log(typeof arr);
console.log(Array.isArray(stud));
console.log(Array.isArray(arr));

var stud1 = {
    name1: "raj",
    skills: ["html", "css", "js"],
    behaviour: () => {
        console.log("as as student");
    },
    id: 10,
    fname: "rajappa",
    mName: "rajamma",
    10: "i m ten"

}
console.log(stud1);
console.log(stud1.name1);
console.log(stud1["name1"]); // we have to put the key in "" if it is string type
console.log(stud1[10]); // we dont need to put in the "" because it is number
console.log(Object.keys(stud1)); //this method returns an array of object key names
console.log(Object.values(stud1)); // this method returns an array of object values
console.log(Object.entries(stud1)); // this method returns a nested array, both key value pair will be stored inside that array


var str = "abcdef"
var arr1 = ["raj", ["html", "css", "js"], function () { console.log("as a student : "); }, "rajappa", "rajamma"]
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr[i]);
// }


// for in loop
for (let i in arr1) {
    console.log(i);// this loop iterates upon the object keys
}
for (let i in str) {
    console.log(i);// this loop iterates upon the object keys
}
for (let i in stud1) {
    console.log(i);// this loop iterates upon the object keys
}
// it can be applied on string array and objec


// for of loop
// it can be applied on string and array
for(let i of arr1){
    console.log(i);// iterate upon the object values
}
for(let i of str){
    console.log(i);
}
// for of loop won't work with object 
// for(let i of stud){
//     console.log(i);
// }