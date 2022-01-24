// Selects the button id and assigns it a variable
var generateButton = document.querySelector("#generate");
// Object containing all character types
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
};

// Starts to write password when called a.k.a clicked
function writePassword() {
  // Function
  var password = generatePassword();
  // Selects textarea (from html) and assigns a variable
  var passwordText = document.querySelector("#password");
  // .value replaces the textarea box with the eventual generated password
  passwordText.value = password;
}

// This is where all the good stuff is happenin'!
function generatePassword(){
  // Empty string to store all character types. Is not randomized yet.
  var allChars = "";
  // Contains randomized characters
  var finalPassword = "";
  // Starts prompting user
  var length = prompt("how long would you like your password to be? (please choose between 8-128 characters)");
    if(length < 8 || length > 128){
      alert("please choose a number between 8 and 128");
      // Calls this function again
      generatePassword();
    } else {
        var lowercase = confirm("would you like to include lowercase characters?");
          if(lowercase){
            // Adds character type to the empty string
            allChars += characters.lowercase;
          }
        var uppercase = confirm("would you like to include uppercase letters?");
          if(uppercase){
            allChars += characters.uppercase;
          }
        var numeric = confirm("would you like to include numeric characters?");
          if(numeric){
            allChars += characters.numeric;
          }
        var specialChar = confirm("would you like your password to include special characters?");
          if(specialChar){
            allChars += characters.special;
          }
        if(!lowercase && !uppercase && !numeric && !specialChar){
          alert("please choose at least one character type");
        }
      }
  // Use for loop for the length of the allChars string and apply Math.floor Math.random to get indexes
  for (var i = 0; i < length; i++) {
    var indexNumber = Math.floor(Math.random() * allChars.length);
    // Returns the actual character of the specified index
    var character = allChars.charAt(indexNumber);
    // Adding characters to the finalPassword string
    finalPassword += character;
  }
  return finalPassword;
}

generateButton.addEventListener("click", writePassword);