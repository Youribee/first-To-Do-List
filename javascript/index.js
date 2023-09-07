var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function() {
    //Verifier si l'input n'est pas vide
    if(inputField.value != "") {
        //si l'input n'est pas vide, créer un paragrapage
        var paragraph = document.createElement('p')
    }
    //Valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value;
    
    //Styliser le paragraphe
    paragraph.classList.add('paragraph_style');

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //Vider l'input quand le paragraphe est ajouté
    inputField.value = "";

    // Barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function() {
        paragraph.classList.add('paragraph_click');
    })

    // Supprimer la tache lorsqu'on clique dessus
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
}
