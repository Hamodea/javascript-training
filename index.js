
function askUser (){
    let user = prompt("skriv ett tecken:")
    if  (user.length !==1){
        alert("vänlig ange bara ett tecken")
    }
    
    if (user >= 0 && user <= 9){
        alert("teckent är en siffra");
    }
    else if ((user >= 'A' && user <= 'Z') || (user >= 'a' && user <= 'z')) {
        alert("Tecknet är en bokstav.");
      } else {
        alert("Tecknet är varken en siffra eller en bokstav.");
      }
    
  }


  // Fråga användaren om tre olika ord
function words(){
    let word1 = prompt("Skriv in det första ordet:");
    let word2 = prompt("Skriv in det andra ordet:");
    let word3 = prompt("Skriv in det tredje ordet:");

    // Kontrollera vilket ord som är längst
    let longestWord = word1;

    if (word2.length > longestWord.length) {
        longestWord = word2;
    }

    if (word3.length > longestWord.length) {
        longestWord = word3;
    }

// Skriv ut det längsta ordet
    alert("Det längsta ordet är: " + longestWord);

}
