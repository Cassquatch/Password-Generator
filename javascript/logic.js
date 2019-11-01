/*
Begin with asking a series of questions to gain user input, and figure out which characters should be used for the new random password
*/


    const special_characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const numerical_characters = "0123456789";
    const uppercase_characters = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
    const lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
    
function passwordGenerator() {
    let pass_length = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");

    let pass_length_int = parseInt(pass_length);

    while(pass_length_int < 8 || pass_length_int > 128 || isNaN(pass_length_int)){
        alert("Password must be between 8 and 128 characters(this must be a number for length)");
        pass_length = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
        pass_length_int = parseInt(pass_length);
    }

    let special_char = confirm("Would you like your password to contain special characters?");
    let num_char = confirm("Would you like your password to contain numerical characters?");
    let upper_char = confirm("Would you like your password to contain uppercase characters?");
    let lower_char = confirm("Would you like your password to contain lowercase characters?");



    let password_options = "";
    let password_generated = "";

    function randomGen(length){
        return Math.floor(Math.random() * length);
    }

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
    }


    let string_length = password_options.length;



        for(let i = 0; i < pass_length; i++){
            password_generated = password_generated + password_options[randomGen(string_length)];
        } 
        


    console.log(password_generated);

    document.getElementById("password").innerHTML= "Your password is " + password_generated;
}