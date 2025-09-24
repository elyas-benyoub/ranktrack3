export {}

const list = document.querySelector('.array') as HTMLParagraphElement | null;
const numbers = [42, 7, 19, 3, 88, 15, 23, 9, 1, 54];

const sort = (arr: number[], asc = true) => {
    return [...arr].sort((a, b) => asc ? a - b : b - a);
}

const render = (arr: number[]) => {
    if (list) {
        list.innerHTML = arr.join(', ');
    }
}

render(numbers);

const buttons: Record<string, () => number[]> = {
    "asc": () => sort(numbers, true),
    "desc": () => sort(numbers, false),
    "reset": () => numbers
}

Object.entries(buttons).forEach(([btn, fn]) => {
    document.getElementById(btn)?.addEventListener('click', () => render(fn()));
})
