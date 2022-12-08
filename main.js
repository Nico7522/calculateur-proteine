import { Aliment, listeIngredients } from "./class.js";
import { append, calcProtTotal, createElement } from "./funct.js";

// const reset = createElement("button", {
//   class: "offset",
// });
// reset.innerText = "RESET";
const divReset = document.querySelector(".reset");
const buttonReset = document.querySelector("#b");
const divTotale = document.querySelector(".liste");
const divPrincipale = document.querySelector(".alim");
const button = document.querySelector(".offset");
const result = document.querySelector(".resultat");
// divReset.appendChild(reset);
buttonReset.style.display = "none";

let totalResult = 0;
listeIngredients.forEach((aliment) => {
  console.log(aliment);
  let div = createElement("div");
  let input = createElement("input", {
    type: "checkbox",
    id: `${aliment.name}`,
  });
  let inputPoids = createElement("input", {
    type: "texte",
    class: "poids",
  });
  let label = createElement("label", {
    class: "check-box",
    for: `${aliment.name}`,
  });
  let nomAliment = document.createElement("p");
  nomAliment.innerText = `${aliment.name}`;
  div.setAttribute("class", "checkbox-wrapper-19");
  let elem = [nomAliment, input, label, inputPoids];
  append(div, elem);
  divPrincipale.appendChild(div);

  button.addEventListener("click", () => {
    if (input.checked && inputPoids !== "") {
      totalResult += calcProtTotal(aliment, inputPoids);
      result.innerText = `${Math.round(
        totalResult
      )} G de protéines aujourd'hui`;
    }

    if (result.innerText !== " ") {
      buttonReset.style.display = "inline";
    }
  });
});

buttonReset.addEventListener("click", () => {
  result.innerText = " ";
  buttonReset.style.display = "none";
  totalResult = 0;
});

// let input = document.createElement("input");
// let inputPoids = document.createElement("input");
// inputPoids.setAttribute("type", "texte");
// inputPoids.setAttribute("class", "poids");

// let label = document.createElement("label");
// input.setAttribute("type", "checkbox");
// input.setAttribute("id", `${aliment.name}`);
// label.setAttribute("class", "check-box");
// label.setAttribute("for", `${aliment.name}`);
// div.appendChild(nomAliment);
// div.appendChild(input);
// div.appendChild(label);
// div.appendChild(inputPoids);
