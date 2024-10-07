// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
let check = " ";
function checkPasswordStrength() {
  console.log(userPassword.length);
  console.log(userPassword);
  if (userPassword.length < 6) {
    check = "Weak";
  } else if (userPassword.length <= 10){
    check = "Medium"
  } else if (userPassword.length > 10) {
    check = "Strong"
  }return check
}

userPassword = "ssswnalWadq";
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = "abc";
console.log(checkPasswordStrength(userPassword)); // "Weak"

userPassword = "abadsfadfdsafasdfacde";
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "ddd";
console.log(checkPasswordStrength(userPassword)); // "Weak"
