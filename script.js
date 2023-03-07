// Generate button
var generateBtn = document.querySelector("#generate");

//Password characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',';','"','<','>','?','.','/'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

var userSelection = [];
var characterLength;
var password = '';

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

function questions() {
  userSelection = [];
  password = '';
  characterLength = parseInt(prompt("How many characters would you like the password to have? (Pick between 8-128 characters)")); 

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8-128 characters.");
    return false;
  }

  if(confirm("Would you like uppercase letters password? (Yes or No?)")) {
    userSelection = userSelection.concat(upperCase);
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
  }

  if(confirm("Would you like lowercase letters in password? (Yes or No?)")) {
    userSelection = userSelection.concat(lowerCase);
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }

  if(confirm("Would you like special characters password? (Yes or No?)")) {
    userSelection = userSelection.concat(specialCharacters);
    password = password + specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

  if(confirm("Would you like numbers password? (Yes or No?)")) {
    userSelection = userSelection.concat(numbers);
    password = password + numbers[Math.floor(Math.random() * numbers.length)]
  }
  console.log(userSelection);


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
  // var password = "";
  console.log(password)
  console.log(password.length)

  //0 --> 8
  for (var i = password.length; i < characterLength; i++) {
    console.log(i)
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    password = password + userSelection[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var answers = questions(); 
  console.log(answers)
  var passwordText = document.querySelector("#password");

  if (answers) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    }
    else {
    passwordText.value = "";
  }
}

