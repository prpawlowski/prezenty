document.addEventListener("DOMContentLoaded", () => {
  const generujButton = document.getElementById("generujButton");
  const listaPrezentow = document.getElementById("listaPrezentow");

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

  generujButton.addEventListener("click", () => {
    const liczbaUczestnikowInput = document.getElementById("liczbaUczestnikow");
    const liczbaUczestnikow = parseInt(liczbaUczestnikowInput.value, 10);

    const uczestnicy = [];
    for (let i = 1; i <= liczbaUczestnikow; i++) {
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
});
