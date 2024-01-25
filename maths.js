// Math Object
console.log(Math.PI);

console.log(Math.sin(0));
console.log(Math.cos(30));
console.log(Math.tan(0));

console.log(Math.pow(2,4));
console.log(Math.sqrt(60));
console.log(Math.cbrt(27));

console.log(Math.ceil(1.003));
console.log(Math.floor(1.999));

console.log(Math.round(1.499));
console.log(Math.round(1.999));

console.log(Math.max(2,3,4,5,21));
console.log(Math.min(2,3,4,5,21));

console.log(Math.random());


// 4 digit OTP generate
var otp = Math.floor((Math.random() * 9000)+1000);
alert(`your otp is ${otp}`);
var ansOtp = Number(prompt("Enter your OTP"))
if (otp === ansOtp) {
    alert("Successfully Logged in");
}
else{
    alert(console.log("Invalid otp"));
}