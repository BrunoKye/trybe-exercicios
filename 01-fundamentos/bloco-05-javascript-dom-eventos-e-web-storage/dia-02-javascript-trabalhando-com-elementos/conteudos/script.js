// :rockect: Parte 1 - Buscando elementos
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


// :rockect: Parte 2 - Criando elementos
// 1. Crie um irmão para elementoOndeVoceEsta.
let irmao = document.createElement("section");
elemento.insertAdjacentElement("afterend", irmao);
irmao.id = "irmao";

// 2. Crie um filho para elementoOndeVoceEsta.
let filhoElemento = document.createElement("section");
elemento.appendChild(filhoElemento);
filhoElemento.id = "elementoFilho"

// 3. Crie um filho para primeiroFilhoDoFilho.
let filhoPrimeiro = document.createElement("section");
texto.appendChild(filhoPrimeiro);
filhoPrimeiro.id = "filhoDoFilhoDoFilho";

// 4. A partir desse filho criado, acesse terceiroFilho.
let filhoTerceiro = document.getElementById("filhoDoFilhoDoFilho").parentElement.parentElement.nextElementSibling.nextElementSibling;

// Parte 3 - Removendo elementos
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let paiDoPai = document.getElementById("paiDoPai");
let pai = document.getElementById("pai");

pai.removeChild(primeiroFilho);
pai.removeChild(irmao);
pai.removeChild(atencao);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);

let elementoPai = document.getElementById("elementoOndeVoceEsta");

elementoPai.removeChild(segundoEUltimoFilhoDoFilho);
elementoPai.removeChild(elementoFilho);

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

primeiroFilhoDoFilho.removeChild(primeiroFilhoDoFilho.firstChild);
primeiroFilhoDoFilho.removeChild(filhoDoFilhoDoFilho);

console.log(paiDoPai);
