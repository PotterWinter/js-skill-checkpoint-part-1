// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(word) {
  console.log(word);
  total = " ";
  for (let i = 0; i < word.length; i++) {
    if (word.length > 10) {
      total = "Strong";
    } else if (word.length >= 6) {
      total = "Medium";
    } else if (word.length < 6) {
      total = "Weak";
    }
  }
  return total;
}

userPassword = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = "abc";
console.log(checkPasswordStrength(userPassword)); // "Weak"

userPassword = "abadsfadfdsafasdfacde";
console.log(checkPasswordStrength(userPassword)); // "Strong"

// function checkPasswordStrength(word) {
//   if (member > 10) {
//     word = "Strong";
//   } else if (member >= 6) {
//     word = "Medium";
//   } else if (member < 6) {
//     word = "Weak";
//   }return word
// }
