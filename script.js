document.addEventListener("DOMContentLoaded", () => {
  const potwierdzButton = document.getElementById("potwierdzButton");
  const zapiszImionaButton = document.getElementById("zapiszImionaButton");
  const losujButton = document.getElementById("losujButton");
  const inputContainer = document.getElementById("inputContainer");
  const wynikiLosowania = document.getElementById("wynikiLosowania");
  let uczestnicy = [];

  potwierdzButton.addEventListener("click", () => {
    const liczbaUczestnikowInput = document.getElementById("liczbaUczestnikow");
    const liczbaUczestnikow = parseInt(liczbaUczestnikowInput.value, 10);

    inputContainer.innerHTML = "";
    uczestnicy = [];

    for (let i = 1; i <= liczbaUczestnikow; i++) {
      const inputId = `uczestnik${i}`;
      const label = document.createElement("label");
      label.textContent = `Imię uczestnika ${i}: `;
      const input = document.createElement("input");
      input.type = "text";
      input.id = inputId;
      inputContainer.appendChild(label);
      inputContainer.appendChild(input);
    }

    zapiszImionaButton.disabled = false;
  });

  zapiszImionaButton.addEventListener("click", () => {
    uczestnicy = [];
    for (let i = 1; i <= inputContainer.children.length / 2; i++) {
      const inputId = `uczestnik${i}`;
      const input = document.getElementById(inputId);
      if (input) {
        uczestnicy.push(input.value);
      }
    }
    losujButton.disabled = false;
    zapiszImionaButton.disabled = true;
  });

  losujButton.addEventListener("click", () => {
    wynikiLosowania.innerHTML = "";

    const pary = losujPrezenty([...uczestnicy]);
    for (let osoba in pary) {
      const listItem = document.createElement("li");
      listItem.textContent = `${osoba} kupuje prezent dla ${pary[osoba]}`;
      wynikiLosowania.appendChild(listItem);
    }
  });

  function losujPrezenty(uczestnicy) {
    const uczestnicyDoLosowania = [...uczestnicy];
    const paryPrezentow = {};

    for (let osoba of uczestnicy) {
      let losowanaOsoba = wylosujOsobe(uczestnicyDoLosowania, osoba);
      paryPrezentow[osoba] = losowanaOsoba;
      uczestnicyDoLosowania.splice(uczestnicyDoLosowania.indexOf(losowanaOsoba), 1);
    }

    return paryPrezentow;
  }

  function wylosujOsobe(uczestnicyDoLosowania, osoba) {
    let losowanaOsoba = uczestnicyDoLosowania[Math.floor(Math.random() * uczestnicyDoLosowania.length)];
    while (losowanaOsoba === osoba) {
      losowanaOsoba = uczestnicyDoLosowania[Math.floor(Math.random() * uczestnicyDoLosowania.length)];
    }
    return losowanaOsoba;
  }
});
