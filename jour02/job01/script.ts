export {}

const article = document.getElementById('citation') as HTMLElement | null;
const button = document.getElementById('button') as HTMLButtonElement | null;

const citation = () => {
    article && console.log(article.textContent);
}

button?.addEventListener('click', citation);