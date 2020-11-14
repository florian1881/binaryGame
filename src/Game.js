// Instance of Game ====> myGame²²
import {
    getHtmlValue,
    getHtmlInnerHtml,
    setHtmlValue,
    setHtmlIdDisplay,
    setHtmlDisplay,
    setHtmlInnerHtml
} from "./htmlMethod.js";

import {
    pseudoGenerator,
    randArray,
    randNumber,
    randBinary
} from "./external.js";


class Game {

    static pseudoInit() {
        // Optionnal : init()  --->  Auto generated pseudo value into input
        pseudoGenerator("player-pseudo");
        // Display the right field
        setHtmlDisplay("game", "none");
        setHtmlDisplay("result", "none");
    }

    initGame() {
        setHtmlDisplay("intro", "none");
        //Display inline on all game HTML
        setHtmlDisplay("game", "inline");
        this.getPlayerName();
        this.newGame();
    }

    constructor() {
        this.playerLevel = 1;
    }

    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$ Modifer cette partie pour la faire marcher avec le this dans la classe exernal $$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    newGame() {
        let byteNumberMax = 1;
        if (this.playerLevel == 1) {
            let rand = randNumber(byteNumberMax);
            let result = rand.toString(2);
            setHtmlInnerHtml("binary", result);
        } else {
            byteNumberMax = 2 ** this.playerLevel - 1;
            let rand = randNumber(byteNumberMax);
            let result = rand.toString(2);
            setHtmlInnerHtml("binary", result);
        }
    }

    levelUp() {
        this.playerLevel += 1;
        setHtmlInnerHtml("player-level", `Niveau : ${this.playerLevel}<br>`);

    }

    guess() {
        let guess = getHtmlValue("binary-guess").trim();
        // Expected value of binary converted back to decimal
        let expectedValue = parseInt(getHtmlInnerHtml("binary"), 2);
        if (guess == expectedValue) {
            setHtmlIdDisplay("fail", "none");
            this.levelUp();
            setHtmlInnerHtml("success", `Bravo ! Vous passez au niveau ${this.playerLevel}`);
            setHtmlIdDisplay("success", "inline");
            this.newGame();
            setHtmlValue("binary-guess","");
        } else {
            this.gameOver();
            setHtmlValue("binary-guess","");
            
        }
    }

    gameOver() {
        this.playerLevel = 1;
        setHtmlInnerHtml("player-level", `Niveau : ${this.playerLevel}<br>`);
        setHtmlInnerHtml("fail", "Raté ! Vous revenez au niveau 1");
        setHtmlIdDisplay("success", "none");
        setHtmlIdDisplay("fail", "inline");


        ///////////////////////////////////////////////////////////////////////////////////:
        ///////////////////////////////////////////////////////////////////////////////////:
        ////////////////////////////////////DUPLICATION ///////////////////////////////////:
        ///////////////////////////////////////////////////////////////////////////////////:
        let byteNumberMax = 1;
        let rand = randNumber(byteNumberMax);
        let result = rand.toString(2);
        setHtmlInnerHtml("binary", result);
    }



 
    //SETTERS AND GETTERS
    setPlayerName() {
        let playerName = document.getElementById("player-pseudo").value;
        this.playerName = playerName;
    }

    setPseudo(){
        //Display the right field
        setHtmlDisplay("intro", "inline");
        setHtmlDisplay("game", "none");
        setHtmlDisplay("result", "none");
        setHtmlValue("player-pseudo",this.playerName);
        document.getElementById("player-pseudo").classList.remove("form-control");
    }

    getPlayerName() {
        setHtmlInnerHtml("player", `Pseudo : ${this.playerName}`);
        return `Pseudo : ${this.playerName}<br>`;
    }

    getLevel() {
        setHtmlInnerHtml("player-level", `Niveau : ${this.playerLevel}<br>`);
        return "player-level", `Niveau : ${this.playerLevel}<br>`;
    }


}


// INITIALIZATION OF THE GAME

//Random fill suggested pseudo
Game.pseudoInit();
let myGame = new Game();
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ EVENT LISTENER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  PSEUDO > GAME $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// for setting pseudo into real game transition with myGame instance. 

// Event on click
let buttonPseudo = document.getElementById("intro-button");
buttonPseudo.addEventListener('click', () => {
    myGame.setPlayerName();
    myGame.getLevel();
    myGame.initGame()
})

// Event on enter
let pseudo = document.getElementById("player-pseudo");
pseudo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myGame.setPlayerName();
        myGame.getLevel();
        myGame.initGame()
    }
});


//**************************EVENT LISTENER******************************//
//**************************   LEVEL UP   ******************************//


// Event on click
let buttonLevelUp = document.getElementById("level-up");
let binaryGuess = document.getElementById("binary-guess");
buttonLevelUp.addEventListener('click', () => {
    myGame.guess();
});

// Event on enter
binaryGuess.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myGame.guess();
    }
});

//**************************EVENT LISTENER******************************//
//**************************   LEVEL UP   ******************************//

// Event on click
let setPseudo = document.getElementById("set-pseudo");

setPseudo.addEventListener('click', () => {
    myGame.setPseudo();
});
