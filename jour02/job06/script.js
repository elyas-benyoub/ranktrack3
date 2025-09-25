const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let takenCode = [];
document.addEventListener('keydown', (e) => {
    takenCode.push(e.key);
    if (takenCode.every((key, i) => konamiCode[i] === key)) {
        if (takenCode.length === konamiCode.length) {
            document.body.classList.add("konami");
            document.body.innerText = "Bienvenue à la Plateforme_";
            takenCode = [];
        }
    }
    else {
        takenCode = [];
    }
});
export {};
