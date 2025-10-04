const button = document.getElementById('btn');
const p = document.getElementById('expression');

if (button) {
    button.addEventListener('click', async e => {
        try {
            const response = await fetch("./expression.txt");

            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            
            const text = await response.text();
            p.innerHTML = text;
        } catch(err) {
            p.innerHTML = err.message;
        }
    });
}