//Password characters

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var lowerCase = "abcadefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialcharacters = "~!@#$%^&*()_+`"

var hasLowerCase = confirm ("Do you want lowercase letters in password?")
var hasUpper = confirm("Would you like upper case letters in your password?")
var hasNumbers = confirm("Would you like numbers in your password?")
var hasSpecial = confirm("Would you like special characters in your password?")

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var lenth = prompt("How many characters would you like in the password?")
  console.log(length)}
  if (length < 8 || length > 128) {
    alert ("Password must be between 8-128 characters!")
    return;
  }
  
if (hasLowerCase === true) {
    passwordVariations = passwordVariations.concat (lower);
    finalPassword.push(lower[Math.floor(Math.random() * upper.length)])
  passwordText.value = password;

} 
if (hasUpper === true) {
  passwordOptions = passwordOptions.concat(upper);
  finalPassword.push(upper[Math.floor(Math.random() * upper.length)]);
  length--;
}
if (hasNumbers === true) {
  passwordOptions = passwordOptions.concat(number);
  finalPassword.push(number[Math.floor(Math.random() * number.length)]);
  length--;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
