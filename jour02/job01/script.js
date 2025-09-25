const article = document.getElementById('citation');
const button = document.getElementById('button');
const citation = () => {
    article && console.log(article.textContent);
};
button?.addEventListener('click', citation);
export {};
