


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

    while(pass_length_int < 8 || pass_length_int > 128 || isNaN(pass_length_int)){
        alert("Password must be between 8 and 128 characters(this must be a number for length)");
        pass_length = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
        pass_length_int = parseInt(pass_length);
    }

    special_char = confirm("Would you like your password to contain special characters?");
    num_char = confirm("Would you like your password to contain numerical characters?");
    upper_char = confirm("Would you like your password to contain uppercase characters?");
    lower_char = confirm("Would you like your password to contain lowercase characters?");




    function randomGen(length){
        return Math.floor(Math.random() * length);
    }

    //check to see which options the user would like in their password, then add that string set to the password_options string
    if(special_char){
        password_options = password_options + special_characters;
    }
    
    if(num_char){
        password_options = password_options + numerical_characters;
    }
    if(upper_char){
        password_options = password_options + uppercase_characters;
    }
    if(lower_char){
        password_options = password_options + lowercase_characters;
    }else{
        alert("You must choose at least one character type");
        return;
    }


    let string_length = password_options.length;


        //generate password, choosing characters randomly from the password_option string and setting them to the generated password
    function generatePassword(){    
        for(let i = 0; i < pass_length; i++){
            password_generated = password_generated + password_options[randomGen(string_length)];
        } 
    }    
    generatePassword();

    console.log(password_generated);

    document.getElementById("password").innerHTML=  password_generated;
}


function passwordChecker(password){
    //loop through generated password here, and count how many of each character type from user selected types
    for(let i = 0; i < password.length; i++){
                
    }
    

}

function textCopy(){
    let copied_text = document.getElementById("password");

    copied_text.select();
    copied_text.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text " + copied_text.value);
}
