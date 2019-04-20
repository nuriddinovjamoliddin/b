//program to find a hidden word letter by letter
//Nuriddinov Jamoliddin


//inputs part
let hiddenWord = [
    'array', //1
    'object', //2
    'script', //3
    'library', //4
    'loop', //5
    'undefined' //6
];
let hiddenWordDescription = [
    'a variable that contains a sequence of data', //1
    'a variable that contains a sequence of variables with values', //2
    'HTML tag to import a js script to web site', //3
    'what is JQuery?', //4
    'what type of operators "for" and "while" are?', //5
    'what will be the output?  var a;  console.log(a);  ' //6
]

//preparing for game
function isHidden(variable) {
    for (let k = 0; k < variable.length; k++) {
        if (variable[k] == '*') {
            return true;
        }
    }
    return false;
}

function theGame(randomlyFound) {

    //recursion settings
    if (randomlyFound <= -1) {
        randomlyFound = hiddenWord.length - 1;
    }
    //hiding the word
    let hideByStars = [];
    for (let i = 0; i < hiddenWord[randomlyFound].length; i++) {
        hideByStars[i] = '*';
    }

    for (let i = 0;; i++) {
        if (isHidden(hideByStars) === true) {
            hideByStars[0] = hiddenWord[randomlyFound][0];
            input = prompt(`${hiddenWordDescription[randomlyFound]+' : ['+hideByStars}] `, '');

            if (input == null) {
                document.write("you have stopped the game");
                break;

            } else if (Math.round(input.length) !== 1 || isNaN(input) == false) {
                alert('Please input 1 english letter');

            } else if (i == hiddenWord[randomlyFound].length * 2) {
                alert(`Unfortunately you couldn't solve this, the right answer was "${hiddenWord[randomlyFound]}"`);
                break;

            } else {
                for (let j = 1; j < hiddenWord[randomlyFound].length; j++) {
                    if (input === hiddenWord[randomlyFound][j]) {
                        hideByStars[j] = input;
                    }
                }
            }
        } else {
            alert(`congratulations! It was "${hiddenWord[randomlyFound]}" !`);
            return theGame(randomlyFound - 1);
        }
    }
}
//using the code
alert('Welcome to JS word quiz game, find the right answer letter by letter and have fun ;)');
var randomlyFound = Math.round(Math.random() * (hiddenWord.length - 1));
theGame(randomlyFound);