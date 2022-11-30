//Password characters

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var lowerCase = "abcadefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialcharacters = "~!@#$%^&*()_+`"


// Write password to the #password input

function writePassword() {
  var passwordVariations = [];
  var lengthMinimum = "8"
  var lengthMaximum = "128"
  if (length < 8 || length > 128) {
    alert! ("Password must be between 8-128 characters!")
    return;
  }
  
  var hasLowerCase = confirm ("Do you want lowercase letters in password?")
  if (hasLowerCase === true) {
    paswordVariations = passwordVariations.concat (lower);
    endingPasswird
  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
