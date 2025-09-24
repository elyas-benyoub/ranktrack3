type JourFerie = {
    date: string;
    nom: string;
}

const joursFeries: JourFerie[] = [
    { date: "2020-01-01", nom: "Jour de l’An" },
    { date: "2020-04-13", nom: "Lundi de Pâques" },
    { date: "2020-05-01", nom: "Fête du Travail" },
    { date: "2020-05-08", nom: "Victoire des Alliés en 1945" },
    { date: "2020-05-21", nom: "Ascension" },
    { date: "2020-06-01", nom: "Lundi de Pentecôte" },
    { date: "2020-07-14", nom: "Fête nationale" },
    { date: "2020-08-15", nom: "Assomption" },
    { date: "2020-11-01", nom: "Toussaint" },
    { date: "2020-11-11", nom: "Armistice 1918" },
    { date: "2020-12-25", nom: "Noël" }
];

const message = document.querySelector('.message') as HTMLElement | null;
const input = document.getElementById('date') as HTMLInputElement | null;
const form = document.querySelector('form') as HTMLFormElement | null;

const jourTravaille = (jour: string) => {
    const date = new Date(jour);

    const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateFr = date.toLocaleDateString('fr-FR', options);
    const ferie = joursFeries.find(j => new Date(j.date).getTime() === date.getTime());

    if (ferie) {
        return `Le ${dateFr} est un jour férié : ${ferie.nom}`;
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        return `Non, le ${dateFr} est un week-end`;
    } else {
        return `Oui, le ${dateFr} est un jour travaillé`;
    }
}


form?.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    if (message && input) {
        if (!input.value) {
            message.innerHTML = "Merci de choisir une date.";
            return;
        }
        message.innerHTML = jourTravaille(input.value);
    }
});