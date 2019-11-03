


    const special_characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const numerical_characters = "0123456789";
    const uppercase_characters = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
    const lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
    
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

    let special_char = confirm("Would you like your password to contain special characters?");
    let num_char = confirm("Would you like your password to contain numerical characters?");
    let upper_char = confirm("Would you like your password to contain uppercase characters?");
    let lower_char = confirm("Would you like your password to contain lowercase characters?");



    let password_options = "";
    let password_generated = "";

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
        for(let i = 0; i < pass_length; i++){
            password_generated = password_generated + password_options[randomGen(string_length)];
        } 
        


    console.log(password_generated);

    document.getElementById("password").innerHTML=  password_generated;
}

function text_copy(){
    let copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text " + copyText.value);
}
