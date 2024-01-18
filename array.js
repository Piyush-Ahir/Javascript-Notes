let arr = [1,2,3];
console.log(arr.length);
arr.push(4,5,6);
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
console.log(arr.length);
arr.unshift(7,8,9)
console.log(arr);
console.log(arr.length);
arr.shift()
console.log(arr);
console.log(arr.length);
console.log(arr.includes(2));
console.log(arr.indexOf(3));
console.log(arr.indexOf(3,3));
console.log(arr.indexOf(100));

let brr = [1,2,3,4,3];
let crr = [100,200,300];
console.log(brr.toString());
console.log(crr.toString());

console.log(brr+crr);
console.log(brr.concat(crr));
console.log(brr.join(" "));
console.log(typeof brr.join(" "));




console.log(brr.reverse());
console.log(brr.slice(1,3));

let drr = [1,2,3,4,3];
console.log(drr);
console.log(drr);
drr.splice(2,2)
console.log(drr);

let err = [1,2,3,4,3];
console.log(err);
err.splice(2,2,300,400);
console.log(err);
console.log(err);