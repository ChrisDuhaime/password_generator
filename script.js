//declaring variable and making it = to #generate in HTML
let generateBtn = document.getElementById('generate'); 
//taking generateBtn and giving it onclick to call writePassword()
generateBtn.addEventListener('click', writePassword);


//generate random password and write to html elemenet
function writePassword() {
    let password = generatePassword();
    let passwordText = document.getElementById('password');
    passwordText.value = password;
}

function generatePassword() {
    let chars = '';
    //confirm desired password length
    let passwordLength = window.prompt('How long do you want your Password (length must be at least 8 characters and no more than 128 characters)', '10');
    let passwordLengthInteger = passwordLength * 1;
    if (passwordLengthInteger < 8 || passwordLengthInteger > 128) {
    //alert if outside parameters
      alert('Number inputted is outside of parameters');
    } else {
       //if within length parameters then continue check for character types and .split turns the string into an array
      let additionalParameters = window.prompt('Please specify the below parameters for your generated password\n\nValid options are lowercase, uppercase, numeric, and special_characters\n\nNote: You must select at least one option', 'lowercase, uppercase, numeric, special_characters');
        let additionalParmsArray = additionalParameters.split(',');
        //These are valid choices to be compared to below
        let controlSet = ['lowercase', 'uppercase', 'numeric', 'special_characters'];
       
       //Checking to make sure input is an array and at least one character type
        if (Array.isArray(additionalParmsArray) && additionalParmsArray.length > 0) {
        // For every index of the array run below code block  
          for (let i = 0; i < additionalParmsArray.length; i++) {
                let currentParm = additionalParmsArray[i];
                let trimmedParm = currentParm.trim();
                //below we are adding character inputs to chars variable to create pool to generate password-- index of returns the index of given the character
                if (controlSet.indexOf(trimmedParm) !== -1) {
                    if (trimmedParm === 'lowercase'){
                        chars += 'abcdefghijklmnopqrstuvwxyz';
                    }
                    if (trimmedParm === 'uppercase') {
                        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    }
                    if (trimmedParm === 'numeric') {
                        chars += '0123456789';
                    }
                    if (trimmedParm === 'special_characters') {
                        chars += '!@#$%^&*()";';
                    }
                    //This else statement gives warning if input is not in conrolSet variable declared above
                  } else {
                    alert('Warning: Input ' + trimmedParm + ' is not a valid choice');
                }
            }
            //This else is warning there must be commas between values (otherwise we cannot split into an array)
        } else {
            alert('Warning: Input must be formatted as comma separated values as in the default text');
        }
    }
   //call function generateRandomPassword that inputs character pool and length
    return generateRandomPassword(chars, passwordLengthInteger);
}

// this function takes previous inputs and generates random password


function generateRandomPassword(chars, length) {
    //creating an empty variable called password to populate dynamicaly in the for loop below
    let password = '';

    for (let i = 0; i < length; i++) {
      //generating random number between 0 and 1, multiplied by length of chars 
      let randomInteger = Math.floor(Math.random() * chars.length);
      //select a random character from chars pool found by line above  
       password += chars.charAt(randomInteger);
    }
    return password;
}