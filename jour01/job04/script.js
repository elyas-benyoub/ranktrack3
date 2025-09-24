const form = document.getElementById('form');
const message = document.querySelector('.message');
const input = document.getElementById('year');

const bisextile = (annee) => {
    if (annee % 4 === 0 && annee % 100 !== 0 || annee % 400 === 0) {
        return `L'année ${annee} est une année bisextile.`;
    } else {
        return `L'année ${annee} n'est pas une année bisextile.`;
    }
}

form?.addEventListener('submit', e => {
    e.preventDefault();
    const year = input?.value;
    message.innerHTML = bisextile(year);
})
