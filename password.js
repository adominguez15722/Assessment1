const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mySecret = 'Password123';

reader.question("Welcome to the password validator tool! What is your password?", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];
	
    if (password === mySecret){
        console.log('Congratulations!! You guessed my password!')

    }   else if (password.length >= 10)  {
        console.log('Success. Password is long enough!')
   
    }   else {
        console.log('Failure. Password is not long enough.')
    };
        

	
	

	// This line closes the connection to the command line interface.
	reader.close()

});