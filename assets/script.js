// Assignment code here





function getInt(text) {
  var input = prompt(text);

  if (input == parseInt(input)) {//check if input is a whole number
    return input
  } else {
    console.log("Please enter a whole number")
    getInt(text);
  }
}

function getValidLength() {
  input = getInt("Enter password length, must be 8-128 characters long:");
  if ((input >= 8) && (input <= 128)) {
    console.log("input: "+input);
    return (parseInt(input));//convert input to an integer before returning
  } else {
    console.log("Please enter a number from 8-128:");
    getValidLength();
  }
}
//requires user to select a number from 8-128

function yOrNo(text) {
  var input = prompt(text);
  if (input.toLocaleLowerCase() == "n" || input.toLocaleLowerCase() == "y") {
    return input.toLocaleLowerCase();//return input as a lowercase
  } else {
    console.log("Please enter y or n:");
    yOrNo(text);
  }
}



function generatePassword() {
  var length;
  var lc = ""; //lowercase
  var uc = ""; //uppercase
  var numb = "";
  var specChars = "";
  var selectedChars;
  var password = "";
  //declare variables



  length = getValidLength();
  console.log("length: " + length);
  //get a valid length ranging from 8-128 characters long and must be a whole number

  if (yOrNo("Include lowercase letters? (y/n):") == "y") {
    lc = "abcdefghijklmnopqrstuvwxyz";
  }

  if (yOrNo("Include uppercase letters? (y/n):") == "y") {
    uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (yOrNo("Include numbers? (y/n):") == "y") {
    numb = "0123456789";
  }

  if (yOrNo("Include special characters? (y/n):") == "y") {
    specChars = "!\"§$%&/()=?\u{20ac}";
  }
  //assign value to variables if y is selected by user
  //yOrNo function ensures valid input is received

  selectedChars = lc + uc + numb + specChars;


  //add all values selected to be included into one singlular variable to have characters randomly selected from

  if (selectedChars == "") {
    console.log("Must choose at least one character type, try again:");
    generatePassword();
  }
  //verify that at least one character type was selected by user


  console.log("selected chars: " + selectedChars);
  for (i = 0; i < length; i++) {
    password = password + selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
  }
  //randomly generate a password of length inputted by user and only using characters included by user

  console.log("password: " + password);

  console.log(length);
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
