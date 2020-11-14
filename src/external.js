import {
    setHtmlValue,
    setHtmlDisplay,
    setHtmlInnerHtml
} from "./htmlMethod.js";

/**
 * 
 * @param {Array[String]}:Array
 */
function randArray(tableau) {
    return Math.floor(Math.random() * Math.floor(tableau.length));
}


function randNumber(number) {
    return Math.floor(Math.random() * Math.floor(number + 1));
}


    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$ Modifer cette partie pour la faire marcher avec le this dans la classe exernal $$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function randBinary() {
    let byteNumberMax = 1;
    if (this.playerLevel == 1) {
        let rand = randNumber(byteNumberMax);
        return rand.toString(2);
    } else {
        byteNumberMax = 2 ** this.playerLevel - 1;
        let rand = randNumber(byteNumberMax);
        return rand.toString(2);
    }
}


function pseudoGenerator(id) {
    let firstPicks = ["Super", "Ultra", "Méga", "Hyper", "King", "King", "Capitaine", "Général", "Docteur", "Professeur", "The"];
    let secondPicks = ["Raccoon", "Patate", "Lama", "Vilain", "Navet", "Mulot", "Licorne", "Sanglier", "Belette", "Marmotte", "Singe", "Citrouille", "Limace", "Chenille", "Escargot", "Chewing-Gum", "Proton", "Neutron", "Electron", "Concombre", "Méduse", "Murène", "Poisson"];
    let result = firstPicks[randArray(firstPicks)] + "-" + secondPicks[randArray(secondPicks)];

    setHtmlValue(id, result);

}

export {
    pseudoGenerator,
    randArray,
    randNumber,
    randBinary
}