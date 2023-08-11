document.addEventListener("DOMContentLoaded", () => {
  const potwierdzButton = document.getElementById("potwierdzButton");
  const losujButton = document.getElementById("losujButton");
  const inputContainer = document.getElementById("inputContainer");
  const wynikiLosowania = document.getElementById("wynikiLosowania");
  let uczestnicy = []; // Przechowywanie uczestników

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

    losujButton.disabled = false;
  });

  losujButton.addEventListener("click", () => {
    wynikiLosowania.innerHTML = "";

    for (let i = 1; i <= uczestnicy.length; i++) {
      const inputId = `uczestnik${i}`;
      const input = document.getElementById(inputId);
      if (input) {
        uczestnicy.push(input.value);
      }
    }

    const pary = losujPrezenty(uczestnicy);
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
      const indeksLosowanejOsoby = Math.floor(Math.random() * uczestnicyDoLosowania.length);
      const losowanaOsoba = uczestnicyDoLosowania.splice(indeksLosowanejOsoby, 1)[0];
      paryPrezentow[osoba] = losowanaOsoba;
    }

    return paryPrezentow;
  }
});
