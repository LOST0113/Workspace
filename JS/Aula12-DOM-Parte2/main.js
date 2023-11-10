let paragrafo1 = document.getElementById("paragrafo1");
let paragrafo2 = document.getElementById("paragrafo2");

paragrafo1.style.color = "red";
paragrafo1.style.backgroundColor = "black";
paragrafo1.style.textAlign = "center";
paragrafo1.style.margin = "20px";
paragrafo1.style.padding = "10px";
paragrafo1.style.borderBottom = "solid 3px red";
paragrafo1.style.textTransform = "uppercase";
paragrafo1.style.fontSize = "17px";
paragrafo1.style.textShadow = "4px 4px 9px black";
paragrafo1.style.fontWeight = "bold";

let list = document.getElementsByClassName("item");

// percorra a lista utilizando repetição e altere a cor de texto

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "red";
    list[i].style.textTransform = "uppercase";
}

let paragrafos = document.getElementsByTagName("p");

for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.color = "purple";
}

// acessa elemento pelo nome
let acessaName = document.getElementsByName("nameList");

// percorra a array e altere apenas os itens que tem a posição par
for (let i = 0; i < acessaName.length; i++) {
    if(acessaName[i] % 2 == 0) {
        acessaName[i].style.color = "pink";
    }
}

let item2 = document.getElementById("item2");
item2.remove();

let lista = document.getElementById("lista");
let item5 = document.getElementById("item5");

lista.insertBefore(item2, item5.nextSibling);

let retiraEstilo = document.getElementById("messi");
retiraEstilo.style.listStyle = "none";