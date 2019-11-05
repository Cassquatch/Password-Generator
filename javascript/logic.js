


const special_characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numerical_characters = "0123456789";
const uppercase_characters = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
const lowercase_characters = "abcdefghijklmnopqrstuvwxyz";

let special_char_count;
let num_char_count;
let uppercase_char_count;
let lowercase_char_count;

let password_options = "";
let password_generated = "";

let special_char;
let num_char;
let upper_char;
let lower_char;

function passwordGenerator() {
    /*
Begin with asking a series of questions to gain user input, and figure out which characters should be used for the new random password
*/
    let pass_length = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");

    let pass_length_int = parseInt(pass_length);

    while (pass_length_int < 8 || pass_length_int > 128 || isNaN(pass_length_int)) {
        alert("Password must be between 8 and 128 characters(this must be a number for length)");
        pass_length = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
        pass_length_int = parseInt(pass_length);
    }

    special_char = confirm("Would you like your password to contain special characters?");
    num_char = confirm("Would you like your password to contain numerical characters?");
    upper_char = confirm("Would you like your password to contain uppercase characters?");
    lower_char = confirm("Would you like your password to contain lowercase characters?");




    function randomGen(length) {
        return Math.floor(Math.random() * length);
    }

    //check to see which options the user would like in their password, then add that string set to the password_options string
    if (special_char) {
        password_options = password_options + special_characters;
    }

    if (num_char) {
        password_options = password_options + numerical_characters;
    }
    if (upper_char) {
        password_options = password_options + uppercase_characters;
    }
    if (lower_char) {
        password_options = password_options + lowercase_characters;
    }
    //if no characters are selected, alert that they must at least choose one 
    if(!special_char && !num_char && !upper_char && !lower_char) {
        alert("You must choose at least one character type");
        return;
        
    }


    let string_length = password_options.length;


    //generate password, choosing characters randomly from the password_option string and setting them to the generated password
    function generatePassword() {
        password_generated = "";
        for (let i = 0; i < pass_length; i++) {
            password_generated = password_generated + password_options[randomGen(string_length)];
        }
    }
    generatePassword();
    console.log(passwordChecker(password_generated));
    
    //if the password doesnt contain the correct characters selected, generate new one
    
    while(!passwordChecker(password_generated)){
        generatePassword();
    }
    password_options = "";
    console.log(passwordChecker(password_generated));
    console.log(password_generated);

    document.getElementById("password").innerHTML = password_generated;
}


function passwordChecker(pass) {
    

    //check for special characters
   
    if(!checkForCharacters(pass, special_characters) && special_char){
        return false;
    } 
    
    //check for number characters
    
    if(!checkForCharacters(pass, numerical_characters) && num_char){
        return false;
    }
    
    //check for uppercase characters
    if(!checkForCharacters(pass, uppercase_characters) && upper_char){
        return false;
    }
    //check for lowercase characters
    if(!checkForCharacters(pass, lowercase_characters) && lower_char){
        return false;
    }

    return true;

}

//check to see if the password contains necessary characters from string passed
function checkForCharacters(pass, string){
    for(let i = 0; i < string.length; i++){
        if(pass.indexOf(string[i]) > -1){
            return true;
        }
    }
    return false;
}

function textCopy() {
    let copied_text = document.getElementById("password");

    copied_text.select();
    copied_text.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text " + copied_text.value);
}
