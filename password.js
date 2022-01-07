const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mySecret = 'Password123';
let maxAttempts = 3;

reader.question("Welcome to the password validator tool! What is your password?", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];
	
    if (password === mySecret){
        console.log('Congratulations!! You guessed my password!')

    }   else if (password.length >= 10 && password.length < 20)  {
        console.log('Success. Password is long enough!')
   
    }   else if(password.length >= 20) {
        console.log("You're never going to remember this password, are you?")
  
    }   else {
        console.log('Failure is not an option!!')
            prompt(reader.question);
        };
        

//Currently I'm trying to return the user to the initial prompt if they do not succeed in putting a long enough password.
	
	

	// This line closes the connection to the command line interface.
	reader.close()

});