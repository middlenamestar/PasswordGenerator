// Assignment Code
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

function generatePassword(){
  // var length = prompt("how long would you like your password to be? (please choose between 8-128 characters)");
  var lowercase = confirm("would you like to include lowercase characters?");
    if(!lowercase){
      return;
    }
  var uppercase = confirm("would you like to include uppercase letters?");
    if(!uppercase){
      return;
    }
  var numeric = confirm("would you like to include numeric characters?");
    if(!numeric){
      return;
    }
  var specialChar = confirm("would you like your password to include special characters?");
    if(!specialChar){
      return;
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
