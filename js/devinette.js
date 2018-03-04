/* 
[FR] Jeu : Plus ou Moins
*/

console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1;

// Afficher réponse pour debugging :
// console.log("(La solution est " + solution + ")");

var proposition = parseInt(prompt("Saisissez un nombre entre 1 et 100"));

if (proposition === solution) {
    alert("Gagné du premier coup !");
} else {
    for (nbTours = 1; nbTours < 6; nbTours++) {
        if (proposition < solution && proposition >= 0) {
            proposition = Number(prompt("C'est plus"));
        } else if (proposition > solution && proposition <= 100) {
            proposition = Number(prompt("C'est moins"));
        } else if (proposition === solution) {
            alert("Gagné en " + nbTours + " coups.");
            break;
        } else {
            proposition = Number(prompt("Erreur, veuillez entrer un nombre entre 1 et 100"));
        }
    }
    if (proposition !== solution) {
        alert("Perdu, vous avez utilisé vos 6 coups.");
    } else {
        alert("Gagné de justesse sur le 6ème coup!");
    }
}
console.log("Fin du programme");
