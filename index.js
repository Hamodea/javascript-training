
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