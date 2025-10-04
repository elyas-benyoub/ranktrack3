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
    const response = await fetch('user.php');
    const users: User[] = await response.json();
    if (tbody) {
        tbody.innerHTML = "";
    }

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
});