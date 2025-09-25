const button = document.getElementById('button');
const p = document.getElementById('counter');
let count = 0;
const addOne = () => {
    count += 1;
    if (p) {
        p.innerHTML = count.toString();
    }
};
button?.addEventListener('click', addOne);
export {};
