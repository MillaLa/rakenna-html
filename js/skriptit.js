//Luodaan bodyn lapset
var header = document.createElement("header");
header.id = "ylatunniste";
var section = document.createElement("section");
section.id = "rinnakkain";
var footer = document.createElement("footer");
footer.id = "alatunniste";
document.getElementsByTagName("body")[0].appendChild(header);
document.getElementsByTagName("body")[0].appendChild(section);
document.getElementsByTagName("body")[0].appendChild(footer);

//Luodaan #header lapset
var otsikko = document.createElement("h1");
var para = document.createElement("p");
//Luodaan lapsiin tekstit
var teksti1 = document.createTextNode("Tämä on otsikko");
var teksti2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?");
otsikko.appendChild(teksti1);
para.appendChild(teksti2);
document.getElementById("ylatunniste").appendChild(otsikko);
document.getElementById("ylatunniste").appendChild(para);

//Luodaan #section lapset
var para = document.createElement("p");
para.id = "para2";
var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt? animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?");
para.appendChild(node);
document.getElementById("rinnakkain").appendChild(para);

//figure
var figure = document.createElement("figure");
figure.id = "figure";
document.getElementById("rinnakkain").appendChild(figure);

//img
var kuva = document.createElement("img");
kuva.src = "images/javakuva.gif";
kuva.alt = "javakuva";
document.getElementById("figure").appendChild(kuva);

//footer p
var para = document.createElement("p");
var node = document.createTextNode("© 2021 Milla Lalin");
para.appendChild(node);
document.getElementById("alatunniste").appendChild(para);

//Lisätään class JavaScriptin avulla
header.className = "ylatunniste";

section.className = "rinnakkain";

footer.className = "alatunniste";