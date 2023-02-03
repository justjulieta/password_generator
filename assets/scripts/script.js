// Generate button
var generateBtn = document.querySelector("#generate");

//Password characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',';','"','<','>','?','.','/'];

var userSelection = [];

function generatePassword() {
  userSelection = [];
  characterlength = question("How many characters would you like the password to have? (Pick between 8-128 characters)"); 

  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Password must be between 8-128 characters.");
    return false;
  }
  if(confirm("Would you like uppercase letters password?")) {
    userSelection = userSelection.concat(upperCase);
  }
  if(confirm("Would you like lowercase letters in password?")) {
    userSelection = userSelection.concat(lowerCase);
  }
  if(confirm("Would you like special characters password?")) {
    userSelection = userSelection.concat(specialCharacters);
  }
  if(confirm("Would you like numbers password?")) {
    userSelection = userSelection.concat(numbers);
  }
  if (userSelection.length === 0) { 
    console.log("It's empty!") 
    alert ("Please try again.");
    return false;
  } 
  else {
    return true;
}
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < lengthInput; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    password = password + userSelection[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  if (validPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    }
    else {
    passwordText.value = "";
  }
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);