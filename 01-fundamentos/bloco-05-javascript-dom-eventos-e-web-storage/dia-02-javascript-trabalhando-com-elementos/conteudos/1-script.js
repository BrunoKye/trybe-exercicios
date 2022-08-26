// 1. Acesse o elemento elementoOndeVoceEsta. 
let elemento = document.getElementById("elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
let paiElemento = document.querySelector("#elementoOndeVoceEsta").parentElement;
paiElemento.style.color = "red";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 
let texto = document.getElementById("primeiroFilhoDoFilho");
texto.innerText = "Relembrando a aula anterior";

// 4. Acesse o primeiroFilho a partir de pai.
let primeiroPai = document.getElementById("pai").firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroElemento = document.getElementById("elementoOndeVoceEsta").previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = document.getElementById("elementoOndeVoceEsta").nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroElemento = document.getElementById("elementoOndeVoceEsta").nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai. 
let terceiroPai = document.getElementById("pai").children[2];
