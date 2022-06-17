
function agregarNota(){

    


    let note = document.getElementById("nota");
   
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body bg-info");
    cardBody.textContent= note.value ; 
    
    card.appendChild(cardBody);
    let notas = document.getElementById("notas");
    notas.appendChild(card)
   nota.value="";
    
 
  




}

