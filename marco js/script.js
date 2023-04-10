//* [JS] Il DOM (Document Object Model)
// let myArray = [0,1,2,3,4];
// myArray.push(5); // Metodo
// alertMe(); // Funzione
// myArray.length; // Proprietà

//? 1. getElementById()
// Seleziona l'elemento che vuole cambiare colore.
// let myEl = document.getElementById("make-me-red");
// console.log(myEl);

/* let myElement = document.getElementById("make-me-red");
console.log(myElement); */

//? 2. getElementsByClassName()
// Seleziona gli elementi con classe bottom-div.
// let myEls = document.getElementsByClassName("bottom-div");
// console.log(myEls);

/* let myElements = document.getElementsByClassName("bottom-div");
console.log(myElements); */

//? 3. getElementsByTagName()
// Seleziona tutti gli elementi di tipo <li>.
// let myElsList = document.getElementsByTagName("li");
// console.log(myElsList);

/* let myElementsList = document.getElementsByTagName("li");
console.log(myElementsList);
console.log(myElementsList[3]); */

//? 4. querySelector()
// Seleziona il primo <li> con classe fake-item.
// let myFakeLi = document.querySelector("li.fake-item");
// console.log(myFakeLi);

/* let myFakeLi = document.querySelector("li.fake-item");
console.log(myFakeLi); */

//? 5. querySelectorAll()
// Seleziona tutti i <li> con classe item.
// let myItemLi = document.querySelectorAll("li.item");
// console.log(myItemLi);

/* let myItemsLi = document.querySelectorAll("li.item")[1];
console.log(myItemsLi); */


//? 6. node.children
// Seleziona tutti i figli del <div> con id list-title.
// let divContainer = document.getElementById("list-title");
// let containerChildren = divContainer.children; // Proprietà
// console.log(containerChildren); 

/* let myListTitle = document.getElementById("list-title");
let myListTitleChildren = myListTitle.children;
console.log(myListTitleChildren); */

//? 7. node.innerText
// Cattura il testo contenuto nel <div> con id make-me-red.
// let myRedDiv = document.getElementById("make-me-red");
// console.log(myRedDiv.innerText);

/* let MyText = document.getElementById("make-me-red");
console.log(MyText.innerText); */

//? 8. node.style.color
// Accontenta il div che vuole diventare rosso!
// let myDivRed = document.getElementById("make-me-red");
// myDivRed.style.color = "red";
// console.log(myDivRed);

/* let myRedDiv = document.getElementById("make-me-red");
myRedDiv.style.color = "red";
myRedDiv.style.backgroundImage = "url('blu.png')";
console.log(myRedDiv); */

/* function makeRed() {
    let divRed = document.getElementById("make-me-red");
    divRed.style.color = red;
    console.log("ciao");
} */
 
//? 9. node.classList.add() / remove() / toggle()
// a. Togli la classe complete dall'<ul>.
// let myUl = document.getElementById("features");
// myUl.classList.remove("Complete");
// console.log(myUl);
// b. Aggiungi una classe test all'<ul>.
// myUl.classList.add("test");
// c. Esegui il toggle della classe my-list sull'<ul>
// myUl.classList.toggle("my-list");

/* let myClass = document.getElementsByClassName("item");
let provLength = myClass.length;
for (i = 0; i < provLength; i ++) {
    myClass[0].classList.add("nuovaClasse");
    myClass[0].classList.remove("item");
} */

//? 10. onclick=""
// Lancia una funzione alertMe() (che produce un alert) al click sul button con id my-button.
// function alertMe() {
//     alert("Io esco fuori in un popup!");
//     console.log("Il tasto è stato premuto!");
// }

function alertMe() {
    alert("prova");
    console.log("Il tasto è stato premuto");
}

//? 11. createElement
// a. Inserisci un nuovo elemento <div> nel DOM.
// let myNewDiv = document.createElement("div");
// b. Inserisci un testo nel <div> appena creato sopra, cambia il testo al suo interno in rosso ed assegnagli un id new-div.
// myNewDiv.innerText = "Sono il nuovo div!";
// myNewDiv.style.color = "red";
// myNewDiv.id = "new-div";
// console.log(myNewDiv);
// c. Iniettiamo il <div> appena creato e personalizzato alla fine del <div> con id main-content.
// let myMainContent = document.getElementById("main-content");
// myMainContent.appendChild(myNewDiv);
// e. Iniettiamo il <div> appena creato e personalizzato prima dell'<ul> contenuto nel <div> con id main-content.
// let myNewUl = document.getElementById("features");
// myMainContent.insertBefore(myNewDiv, myNewUl);