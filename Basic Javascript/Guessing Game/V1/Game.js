let secretNumber = Math.floor((Math.random() * 100) + 1);

let userGuess = prompt('Guess a number \!' + secretNumber);


while (secretNumber !== userGuess){

     if (secretNumber > parseInt(userGuess)) {
        prompt('Guess Too Small\!');
    }
    
    if (secretNumber < parseInt(userGuess)){
        prompt('Guess Too Large\!');
    }
    
    if (secretNumber === parseInt(userGuess)){
        prompt('Boom Shaka Laka\!');
    }
}
