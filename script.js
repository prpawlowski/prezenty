document.addEventListener("DOMContentLoaded", () => {
  const generujButton = document.getElementById("generujButton");
  const potwierdzButton = document.getElementById("potwierdzButton");
  const inputContainer = document.getElementById("inputContainer");
  const listaPrezentow = document.getElementById("listaPrezentow");

  generujButton.addEventListener("click", () => {
    const liczbaUczestnikowInput = document.getElementById("liczbaUczestnikow");
    const liczbaUczestnikow = parseInt(liczbaUczestnikowInput.value, 10);

    inputContainer.innerHTML = "";

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
  });

  potwierdzButton.addEventListener("click", () => {
    const uczestnicy = [];
    for (let i = 1; i <= parseInt(liczbaUczestnikow.value, 10); i++) {
      const inputId = `uczestnik${i}`;
      const input = document.getElementById(inputId);
      if (input) {
        uczestnicy.push(input.value);
      }
    }

    const pary = losujPrezenty(uczestnicy);
    listaPrezentow.innerHTML = "";

    for (let osoba in pary) {
      const listItem = document.createElement("li");
      listItem.textContent = `${osoba} kupuje prezent dla ${pary[osoba]}`;
      listaPrezentow.appendChild(listItem);
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
