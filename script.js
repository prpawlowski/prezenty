document.addEventListener("DOMContentLoaded", () => {
  const rodzina = ["Osoba1", "Osoba2", "Osoba3", "Osoba4", "Osoba5"];
  const losujButton = document.getElementById("losujButton");
  const listaPrezentow = document.getElementById("listaPrezentow");

  function losujPrezenty(rodzina) {
    const osobyDoLosowania = [...rodzina];
    const paryPrezentow = {};

    for (let osoba of rodzina) {
      const indeksLosowanejOsoby = Math.floor(Math.random() * osobyDoLosowania.length);
      const losowanaOsoba = osobyDoLosowania.splice(indeksLosowanejOsoby, 1)[0];
      paryPrezentow[osoba] = losowanaOsoba;
    }

    return paryPrezentow;
  }

  losujButton.addEventListener("click", () => {
    const pary = losujPrezenty(rodzina);
    listaPrezentow.innerHTML = "";

    for (let osoba in pary) {
      const listItem = document.createElement("li");
      listItem.textContent = `${osoba} kupuje prezent dla ${pary[osoba]}`;
      listaPrezentow.appendChild(listItem);
    }
  });
});
