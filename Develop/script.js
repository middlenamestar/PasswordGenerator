// Assignment Code               // nothing is happening up here bc these r all var and functions. //
var generateButton = document.querySelector("#generate");
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
};

// Starts to write password when called aka clicked.
function writePassword() {
  var password = generatePassword(); //function
  var passwordText = document.querySelector("#password"); //textarea = passwordText. this is just selecting the textarea.
  passwordText.value = password; //.value replaces the textarea box with the eventual generated password.
}

function generatePassword(){
  var allChars = ""; //empty string to store all character types. isn't randomized yet
  var finalPassword = ""; //contains randomized index turned into chars. chars r continuously added in a loop for however long the user inputs the length of (8-128) characters for. each loop is a character combined for the final pw.
  var length = prompt("how long would you like your password to be? (please choose between 8-128 characters)");
    if(length < 8 || length > 128){ //user entered invalid number.. alert will show.
      alert("please choose a number between 8 and 128");
      generatePassword(); //calls function again to ask length prompt again.
    } else { //otherwiseeeeee. keeps going with pop up boxes if user entered valid number.
        var lowercase = confirm("would you like to include lowercase characters?");
          if(lowercase){ //if confirm (press OK), continues w pop up box questions, and adds lowercase character type to empty string.
            allChars += characters.lowercase; // starts adding char type to empty string.
          }
        var uppercase = confirm("would you like to include uppercase letters?");
          if(uppercase){
            allChars += characters.uppercase; // another char type.
          }
        var numeric = confirm("would you like to include numeric characters?");
          if(numeric){
            allChars += characters.numeric;
          }
        var specialChar = confirm("would you like your password to include special characters?");
          if(specialChar){
            allChars += characters.special;
          }
        if(!lowercase && !uppercase && !numeric && !specialChar){ //if user did not confirm any char types
          alert("please choose at least one character type");
        }
      }
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword); //calling the already assigned function writePassword
// when you click the button it's going to start creating a password -> this is when the prompt should show up.



////////////
// series of prompts for password criteria:
//how long do you want your password to be (between 8 and 128 char)?
//do you want to include lowercase letters?
//do you want to include uppercase letters?
//do you want your password to include numbers?
// do you want to include special characters? (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)

//when user hits cancel to reject lowercase, uppercase, etc..
//it's still going to go to the next question...
//but in my code when user hits OK - it needs to track that data e.g.
//user said ok to lowercase... if(prompt)


// each character type would be an array so if they want lowercase
//that just means the mathRandom is going to include one of the arrays (character types)
//to generate randomly. like the array would be ["a", "b", "c"...]
//uppercase array would be "[A], [B], [C]..."

//the final password .. I think I want to have it display in the text .. so .. .textContent
//I think... use getElementById or querySelector to target the place you want to put the text
//and add .textContent onto it and the final password goes there.

// FROM MDN: let text = document.getElementById('divA').textContent;
// FROM MDN: The text variable is now: 'This is some text!'

//thinking about how... if user hits cancel, how to NOT log the lowercase, uppercase information?
//probably just else? and then like move on to the next question lol...
//but if user hits OK, it would be if statement and then some sort of function I think with the
//mathRandom shit........... 



//ALSO BEFORE U GET STARTED, U NEED TO CLONE A NEW REPO DOWN FROM GITHUB.
//;)


// id #password TEXTAREA
// id #generate BUTTON
