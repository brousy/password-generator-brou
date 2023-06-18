// Assignment code here
function generatePassword() {
  var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '`', '_'];
  var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var possibleChar = []
  // I've seen a var with possible characters;[]

  numberOfCharacters = prompt("How long do you want your password to be? Please choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters";
  } else if(isNaN(numberOfCharacters)){
    numberOfCharacters = prompt("Please enter a valid number.");
  }


  var upperCheck = confirm("Do you want upper case letters in your password?");
  var lowerCheck = confirm("Do you want lower case letters in your password?");
  var numberCheck = confirm("Do you want numbers in your password?");
  var specialCheck = confirm("Do you want special characters in your password?");
 
  if(upperCheck === false && lowerCheck === false && numberCheck === false && specialCheck === false)
  { alert("Please select at least one option");
  generatePassword ();
}

if(upperCheck)
{ options = options.concat(upperChar);
  finalChar.push(upperChar[Math.floor(Math.random() * upperChar.length)]);

}

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// function generatePassword(){
//   console.log("hey you clicked the button")
// 1. Prompt the user for the password criteria
//   
//  a. password length 8<128

// b. lower case, uppercase, numbers, or special characters
// 2. Validate the input
// 3. Generate password based on criteria 





// 4. Display the generated password on the page using the return 
// return "Generated Password will go Here" ********************  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
