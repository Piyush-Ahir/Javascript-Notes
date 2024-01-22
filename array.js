// let arr = [1,2,3];
// console.log(arr.length);
// arr.push(4,5,6);
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// console.log(arr.length);
// arr.unshift(7,8,9)
// console.log(arr);
// console.log(arr.length);
// arr.shift()
// console.log(arr);
// console.log(arr.length);
// console.log(arr.includes(2));

// let frr = [1,2,3,4,3,4,2,3]
// console.log(frr.indexOf(3));
// console.log(frr.indexOf(3,3));
// console.log(frr.indexOf(100));

// let brr = [1,2,3,4,3];
// let crr = [100,200,300];
// console.log(brr.toString());
// console.log(crr.toString());

// console.log(brr+crr);
// console.log(brr.concat(crr));
// console.log(brr.join(" "));
// console.log(typeof brr.join(" "));




// console.log(brr.reverse());
// console.log(brr.slice(1,3));

// let drr = [1,2,3,4,3];
// console.log(drr);
// console.log(drr);
// drr.splice(2,2)
// console.log(drr);

// let err = [1,2,3,4,3];
// console.log(err);
// err.splice(2,2,300,400);
// console.log(err);
// console.log(err);

// let arr = [20, 40, 23, 28, 49, 69, 29]

// var ansforEach = arr.forEach((ele,index,currentArr)=>{
    // console.log(ele);
    // console.log(index);
    // console.log(currentArr);

    // return ele%2==0;
    // return(ele+10);

    // if (index%2==0) {
    //     console.log(ele+10);
    // }
// })

// map is higher order array inbuilt method
// map will return array
// var ansMap = arr.map((ele,index,currentArr)=>{
    // if(index%2==0){
    //     return ele;
    // }
    // return ele%2==0;
    // return(ele+10);
// })
// var ansFilter = arr.filter((ele,index,currentArr)=>{
    // if(index%2==0){
    //     return ele;
    // }
//     return ele%2==0;
//     return index%2==0;
// })

// console.log(ansforEach);
// console.log(ansMap);
// console.log(ansFilter);

// create a filtered array that has all elements with values less than 10 removed.
// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]

//   The following example returns all prime numbers in the array:

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime));