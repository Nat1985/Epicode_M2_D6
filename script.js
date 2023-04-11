function h1Changer(newText) {
let h1Element = document.getElementsByTagName("h1");
h1Element = h1Element[0].innerText = newText;
console.log(h1Element);
}

h1Changer("Nuova stringa");

