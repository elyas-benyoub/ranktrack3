console.log("✅ JS chargé");
const form = document.querySelector('.form');
const input1 = document.getElementById('nb1');
const input2 = document.getElementById('nb2');
const message = document.querySelector('.message');
const isPrime = (nb) => {
    if (nb < 2)
        return false;
    const limit = Math.sqrt(nb);
    for (let i = 2; i <= limit; i++) {
        if (nb % i === 0)
            return false;
    }
    return true;
};
const sommenombrespremiers = (nb1, nb2) => {
    if (isPrime(nb1) && isPrime(nb2)) {
        return nb1 + nb2;
    }
    return null;
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input1?.value && input2?.value) {
        const nb1 = Number(input1?.value);
        const nb2 = Number(input2?.value);
        const sum = sommenombrespremiers(nb1, nb2);
        if (message) {
            message.innerHTML = sum
                ? `La somme de ${nb1} et ${nb2} est ${sum}.`
                : "Choisissez seulement des nombres premiers.";
        }
    }
});
export {};
