// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// lower case characters
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Number characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Special Characters
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "-", ".", "~", "/", "=", ",", "|"];

// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");  
  console.log(allowUppercase);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.

//Lower case characters
function askAboutLowerCase(){
  allowLowerCase = confirm("Are lower case characters allowed?");
  console.log(allowLowerCase);
}

//Numbers allowed
function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  console.log(allowNumbers);
}

//Password character count
// at least 8 no more than 128
function askAboutCharacterCount(){
 
//  var field = passwordCharacterCount; 
 var mnlen = 7;
 var mxlen = 129;

 while (true){
 passwordCharacterCount = window.prompt("How many characters would you like to use? Please use between 8-128 characters.");
 parseInt(passwordCharacterCount)
  if(passwordCharacterCount<mnlen || passwordCharacterCount> mxlen)
   { 
     alert("Please input a password that is between" + mnlen + " and " + mxlen + " characters.");
   }
   else
   { 
     return passwordCharacterCount;
   }
  }  








//  if(field.length<mnlen || field.length> mxlen)
//  { 
//    alert("Please input a password that is between" + mnlen + " and " + mxlen + " characters.");
//    return false;
//  }
//  else
//  { 
//    return true;
//  }
}
//how do i set min and max char count though??? ^^











// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = "";
  

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowerCase();
  askAboutNumbers();
  askAboutCharacterCount();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);