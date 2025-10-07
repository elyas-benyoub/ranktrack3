const button = document.getElementById('btn') as HTMLButtonElement | null;
const tbody = document.querySelector('#tableau tbody') as HTMLTableSectionElement | null;


type User = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
}
console.log(tbody)

button?.addEventListener('click', async e => {
    try {
        const response = await fetch('user.php');

        if (!response.ok) {
            throw new Error(`Le fichier User.php est introuvable.`);
        }

        const users: User[] = await response.json();

        if (tbody) tbody.innerHTML = "";

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            tbody?.appendChild(tr);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Erreur :", error.message);
            alert(`Erreur : ${error.message}`);
        } else {
            console.error("Erreur inconnue :", error);
            alert("Une erreur inattendue est survenue.");
        }
    }
});