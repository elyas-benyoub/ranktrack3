export {} 
console.log("✅ JS chargé");
const form = document.querySelector('.form') as HTMLFormElement | null;
const input1 = document.getElementById('nb1') as HTMLInputElement | null;
const input2 = document.getElementById('nb2') as HTMLInputElement | null;
const message = document.querySelector('.message') as HTMLElement | null;


const isPrime = (nb: number) => {
    if (nb < 2) return false;

    const limit = Math.sqrt(nb);
    for (let i = 2; i <= limit; i++) {
        if (nb % i === 0) return false;
    }

    return true;
}

const sommenombrespremiers = (nb1: number, nb2: number) => {
    if (isPrime(nb1) && isPrime(nb2)) {
        return nb1 + nb2;
    }

    return null;
}

form?.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    if (input1?.value && input2?.value) {
        const nb1 = Number(input1?.value);
        const nb2 = Number(input2?.value);
        const sum = sommenombrespremiers(nb1, nb2);

        if (message) {
            message.innerHTML = sum 
                ? `La somme de ${nb1} et ${nb2} est ${sum}.` 
                : "Choisissez seulement des nombres premiers."
        }
    }
})