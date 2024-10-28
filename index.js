
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

// Password length
function userPass() {
    let password = document.getElementById('Password').value;
    if (password.length < 8) {
        alert("Lösenord måste innehålla minst 8 tecken");
    }
    else{
        alert("Lösenord är ströng");
    }
}

function userAge(){
    let age = parseInt(document.getElementById('age').value);
    let svar = "";

    if (age >= 0 && age <= 12) {
        svar = "Du är ett barn.";
    } else if (age >= 13 && age <= 19) {
        svar = "Du är en tonåring.";
    } else if (age >= 20 && age <= 64) {
        svar = "Du är en vuxen.";
    } else if (age >= 65) {
        svar = "Du är en pensionär.";
    } else {
        svar = "Ogiltig ålder. Vänligen ange ett positivt nummer.";
    }

    document.getElementById("svar").innerText = svar;
}

function makeDecision() {
    let choice1 = confirm("Vill du välja alternativ 1?");
    let choice;

    if (choice1) {
        choice = 1;
    } else {
        let choice2 = confirm("Vill du istället välja alternativ 2?");
        if (choice2) {
            choice = 2;
        } else {
            choice = 0; // Ingen av alternativen valdes
        }
    }

    switch (choice) {
        case 1:
            document.getElementById("result").innerText = "Du valde alternativ 1!";
            break;
        case 2:
            document.getElementById("result").innerText = "Du valde alternativ 2!";
            break;
        default:
            document.getElementById("result").innerText = "Du valde inget alternativ.";
            break;
    }
}
