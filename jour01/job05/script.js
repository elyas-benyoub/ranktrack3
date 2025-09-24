const ul = document.querySelector(".day-list");
const jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const afficherjourssemaines = () => {
    jourssemaines.forEach(jour => {
        const li = document.createElement("li");
        li.innerHTML = jour;
        ul.appendChild(li);
    })
}

afficherjourssemaines();