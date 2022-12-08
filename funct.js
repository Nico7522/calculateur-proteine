export function createElement(tagName, attributes = {}) {
  const element = document.createElement(tagName);

  for (const [attribute, value] of Object.entries(attributes)) {
    if (value !== null) {
      element.setAttribute(attribute, value);
    }
  }
  return element;
}

export function append(param, toAppend = []) {
  let i = 0;
  while (i < toAppend.length ) {
    param.append(toAppend[i]);
    i++;
  }
  return param;
}

export function calcProtTotal(alim, inputPoids) {
  let total = 0;
  if (alim.name === "Oeuf" || alim.name === "Blanc d'oeuf" || alim.name === "Yahourt nature" || alim.name === "Yahourt nature maigre" ) {
    total = total + alim.prot * inputPoids.value;
    return total;
  }
  total = total + (alim.prot / 100) * inputPoids.value;
  return total;
}
