
// ESERCIZIO 7:

/* function h1Changer(newText) {
let h1Element = document.getElementsByTagName("h1");
h1Element = h1Element[0].innerText = newText;
console.log(h1Element);
}

h1Changer("Nuova stringa"); */

//ESERCIZIO 8:

/* function changeBackground(newColor) {
    let bodyTook = document.getElementsByTagName("body");
    console.log(bodyTook);
    bodyTook[0].style.background = newColor;
}

changeBackground("grey"); */

// ESERCIZIO 9:

/* function changeFooter(newUrl) {
    let footerTook = document.getElementsByClassName("url");
    footerTook = footerTook[0].innerText = newUrl;
}

changeFooter("Nuovo indirizzo"); */

// ESERCIZIO 10:

/* function addClass(className) {
    let aElement = document.getElementsByTagName("a");
    for (i = 0; i < aElement.length; i ++) {
        aElement[i].classList.add(className);
        console.log(aElement[i]);
    }
}

addClass("nuova-classe"); */

//ESERCIZIO 11:

/* function toggleClass() {
    let myImg = document.getElementsByTagName("img");
    for (i = 0; i < myImg.length; i ++) {
        myImg[i].classList.toggle("invisible");
    }
    console.log(myImg);
}

toggleClass(); */

//ESERCIZIO 12:

function newColor(color) {
    let myPrice = document.getElementsByClassName("price");
    for (i = 0; i < myPrice.length; i ++) {
        myPrice[i].style.color = color;
    }
}

newColor("#346576");