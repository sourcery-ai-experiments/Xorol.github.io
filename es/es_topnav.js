// Pone una barra de navigacion a todas las paginas
const topnav = document.getElementsByClassName("topnav")[0];

let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";

let home = document.createElement("a");
home.href = "https://xorol.github.io/es/inicio.html";
home.innerText = "Inicio";

let esolangs = document.createElement("div");
esolangs.classList = ["dropdown"];
esolangs.innerHTML = "<button class=\"dropbtn\"><i class=\"fa fa-caret-down\"> Lenguajes de programación esotérico</i></button>";

let esolangsContents = document.createElement("div");
esolangsContents.classList = ["dropdown-content"];

let numbers = document.createElement("a");
numbers.href = "https://xorol.github.io/esolangs/numbers.html";
numbers.innerText = "Números";

let interpreters = document.createElement("a");
interpreters.href = "https://xorol.github.io/esolangs/interpreters/interpreters.html";
interpreters.innerText = "Intérpretes";

let wips = document.createElement("a");
wips.href = "https://xorol.github.io/esolangs/wips.html";
wips.innerText = "WIPs";


let other = document.createElement("div");
other.classList = ["dropdown"];
other.innerHTML = "<button class=\"dropbtn\"><i class=\"fa fa-caret-down\"> Otras cosas</i></button>";

let otherContents = document.createElement("div");
otherContents.classList = ["dropdown-content"];

let noise = document.createElement("a");
noise.href = "https://xorol.github.io/other/noise/noise.html";
noise.innerText = "Ruido Blanco";

let wtd = document.createElement("a");
wtd.href = "https://xorol.github.io/other/wtd/wtd.html";
wtd.innerText = "¿Qué es la diferencia?";

let starcalc = document.createElement("a");
starcalc.href = "https://xorol.github.io/starcalc/starcalc.html";
starcalc.innerText = "Calculadora para estrellas";


let tsevhu = document.createElement("a");
tsevhu.href = "https://ab538322-bb07-482b-b4c5-1bdbfd9c77b0.id.repl.co/";
tsevhu.innerText = "Tsevhu"


switch (window.location.href) {
  case "https://xorol.github.io":
  case "https://xorol.github.io/index.html":
    home.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/numbers.html":
    numbers.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/interpreters/interpreters.html":
    interpreters.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/wips.html":
    wips.classList = ["active"];
    break;
  case "https://xorol.github.io/other/wtd/wtd.html":
    wtd.classList = ["active"];
    break;
  case "https://xorol.github.io/other/starcalc/starcalc.html":
    starcalc.classList = ["active"];
    break;
  case "https://ab538322-bb07-482b-b4c5-1bdbfd9c77b0.id.repl.co/":
    tsevhu.classList = ["active"];

}
esolangsContents.appendChild(numbers);
esolangsContents.appendChild(wips);
esolangsContents.appendChild(interpreters);
esolangs.appendChild(esolangsContents);

otherContents.appendChild(noise);
otherContents.appendChild(wtd);
otherContents.appendChild(starcalc);
other.appendChild(otherContents);

topnav.appendChild(link);
topnav.appendChild(home);
topnav.appendChild(esolangs);
topnav.appendChild(other);
topnav.appendChild(tsevhu);
