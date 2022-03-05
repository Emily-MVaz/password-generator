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


// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
    var finalResult = "";
    var characterTypes = [];

    // Provided by instructor
      function askAboutUppercase(){
        allowUppercase = confirm("Are upper case characters allowed?");  
        if(askAboutUppercase){
          characterTypes.push(uppercaseChars.join)
        }
        // characterTypes(allowUppercase);
      }

      //ask for lower case characters
      function askAboutLowerCase(){
        allowLowerCase = confirm("Are lower case characters allowed?");
        if(askAboutLowerCase){
          characterTypes.push(lowercaseChars.join)
        }
        // console.log(allowLowerCase);
      }

      //ask for numbers
      function askAboutNumbers(){
        allowNumbers = confirm("Are numbers allowed?");
        if(askAboutNumbers){
         characterTypes.push(number.join)
       }
        // console.log(allowNumbers);
      }

      

      //Password character count
      // at least 8 no more than 128
      function askAboutCharacterCount(){ 
      var mnlen = 7;
      var mxlen = 129;

      while (true){
      passwordCharacterCount = window.prompt("How many characters would you like to use? Please use between 8-128 characters.");
      parseInt(passwordCharacterCount)
        if(passwordCharacterCount<mnlen || passwordCharacterCount> mxlen)
        { 
          alert("Please input a password that is between 8 and 128 characters.");
        }else{ 
          return passwordCharacterCount;
        }
      }  
    }  
    
    const newArrayOfCharacters = characterTypes.toString();

    for (var i=1;i<=passwordCharacterCount; i++){
      var randomIndex = Math.floor(Math.random() * newArrayOfCharacters.length)
      finalResult += newArrayOfCharacters[randomIndex];
    }

    askAboutUppercase();
    askAboutLowerCase();
    askAboutNumbers();
    askAboutCharacterCount();  
    
    // HINT: You may want to look into merging arrays together
    return finalResult;
  }



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);