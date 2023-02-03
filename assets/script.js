//Password characters
var lowerCase = "abcadefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialcharacters = "~!@#$%^&*()_+`"

var LowerCaseQuestion = confirm ("Do you want lowercase letters in password?")
var UppercaseQuestion = confirm("Would you like upper case letters in your password?")
var NumbersQuestion = confirm("Would you like numbers in your password?")
var SpecialCharactersQuestion = confirm("Would you like special characters in your password?")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatedPassword () {
  var password = generatePasswordBtn();
  var finalpassword = document.querySelector ("#password");
  finalpassword.value = password;
}

function generatePasswordBtn() {
  questionLength = prompt("How many characters would you like in the password?");
  if (!questionLength) {
    alert ("Please enter value");
  } else if (questionLength < 8 || questionLength > 128) {
    alert ("Please select between 8-128") //might need to change aler to prompt
  } else {
    LowerCasequestion=confirm("Would you like lower case characters in password?");
    UpperCasequestion=confirm("Would you like upper case characters in password?");
    Numberquestion= confirm ("Would you like number characters in password?");
    SpecialCharacterquestion=confirm("Would you like special characters in password?");

};

if (!LowerCasequestion && !UpperCasequestion && !qNumberuestion && !SpecialCharacterquestion) {
  answers = alert("PLease select from the options.");
  }else if (LowerCasequestion && UpperCasequestion && Numberquestion && SpecialCharacterquestion) {
    answer = lowerCase.concat(upperCase, number, specialCharacter)
  } else if 


var noSelections = [];

for (var i = 0; i <  questionLength; i++) {
  var allSelections = answers [Math.flooe(Math.random()* answers.length)];
  noSelections.push(allSelections);
}}

var password = noSelections.join ("");
return password;
