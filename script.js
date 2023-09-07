// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function for password generation
function generatePassword() {
  let password = '';
  let passwordCharas = 0;

  while (passwordCharas < 8 || passwordCharas > 128) {
    passwordCharas = window.prompt('Please enter your desired password length. Must be between 8 and 128 characters.');

    if (isNaN(passwordCharas)) {
      alert('Invalid input. Please enter a valid number.');
    } else if (passwordCharas < 8) {
      alert('Entry too short. Please use at least 8 characters');
    } else if (passwordCharas > 128) {
      alert('Entry too long. Please use fewer than 128 Characters');
    }
  }
//confirm windows for each character selection
  let specialCharas = confirm('Would you like to include special characters?');
  let numericCharas = confirm('Would you like to include numbers?');
  let lowerCasedCharas = confirm('Would you like to include lowercase letters?');
  let upperCasedCharas = confirm('Would you like to include uppercase letters?');

  while (!specialCharas && !numericCharas && !lowerCasedCharas && !upperCasedCharas) {
    alert('Unable to generate password. Please select at least one option');
    specialCharas = confirm('Would you like to include special characters?');
    numericCharas = confirm('Would you like to include numbers?');
    lowerCasedCharas = confirm('Would you like to include lowercase letters?');
    upperCasedCharas = confirm('Would you like to include uppercase letters?');
  }
  
// Creates an array of characters based on selected criteria
let newPassword = [];
if (specialCharas) {
  newPassword = newPassword.concat(['!','@','#','$','%','^','&','*','(',')']);
}
if (numericCharas) {
  newPassword = newPassword.concat(['0','1','2','3','4','5','6','7','8','9']);
}
if (lowerCasedCharas) {
  newPassword = newPassword.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
}
if (upperCasedCharas) {
  newPassword = newPassword.concat(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']);
}

// for loop to generate password
for (let i = 0; i < passwordCharas; i++) {
  let index = Math.floor(Math.random() * newPassword.length);
  password += newPassword[index];
}

  return password;
}


