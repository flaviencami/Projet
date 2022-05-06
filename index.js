// CLICK EVENTS
// Priorités : #id > .class > baliseHTML
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// --------------------------------------------------------------------

// MOUSE EVENTS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,1)";
});

// --------------------------------------------------------------------

//KEYPRESS EVENTS
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  ring();
});

// --------------------------------------------------------------------

//SCROLL EVENTS
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// --------------------------------------------------------------------

//FORM EVENTS
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// --------------------------------------------------------------------

//LOAD EVENT
window.addEventListener("load", () => {
  console.log("Document chargé !");
});

// --------------------------------------------------------------------

//ForEACH
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// --------------------------------------------------------------------

//addEventListener vs onClick

/* document.body.onclick = function () {
  console.log("Click !");
}; */

/* Avec "addEventListener" on peut mettre plusieurs 
attributs ou fonctionnalités, contrairement à 
"onclick", avec qui on ne peut en mettre qu'un */

// --------------------------------------------------------------------

//STOP PROPAGATION
/* questionContainer.addEventListener("click", (e) => {
  alert("Test!");
  e.stopPropagation();
}); */

//removeEventListener

// --------------------------------------------------------------------

//BOM (Browser Object Model)

//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open("http://google.com", "cours js", "height=600, width=800");
//window.close()

// Evenements adossés à Window :
//alert("")
//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});
//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + " !</h3>";
});
/* Time, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
//Intervalle
let interval = setInterval(() => {
  document.body.innerHTML += `<div class='box'>
    <h2>Nouvelle Boite !</h2>
  </div>`;
}, 1000);
window.addEventListener("click", () => {
  clearInterval(interval);
});
//Location
console.log(locatio); */

// --------------------------------------------------------------------

//SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
