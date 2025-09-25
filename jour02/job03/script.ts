export {}

const button = document.getElementById('button') as HTMLButtonElement | null;
const p = document.getElementById('counter') as HTMLParagraphElement | null;
let count = 0;

const addOne = () => {
    count += 1;

    if (p) {
        p.innerHTML = count.toString();
    } 
}

button?.addEventListener('click', addOne);