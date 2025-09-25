export {}

const button = document.getElementById('button') as HTMLButtonElement | null;
const article = document.getElementById('article') as HTMLElement | null;

const showHide = () => {
    article?.classList.toggle('hidden');
}

button?.addEventListener('click', showHide);