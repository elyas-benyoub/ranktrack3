const button = document.getElementById('button');
const article = document.getElementById('article');
const showHide = () => {
    article?.classList.toggle('hidden');
};
button?.addEventListener('click', showHide);
export {};
