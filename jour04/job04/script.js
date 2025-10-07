"use strict";
const button = document.getElementById('btn');
const tbody = document.querySelector('#tableau tbody');
console.log(tbody);
button?.addEventListener('click', async (e) => {
    try {
        const response = await fetch('user.php');
        if (!response.ok) {
            throw new Error(`Le fichier User.php est introuvable.`);
        }
        const users = await response.json();
        if (tbody)
            tbody.innerHTML = "";
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
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Erreur :", error.message);
            alert(`Erreur : ${error.message}`);
        }
        else {
            console.error("Erreur inconnue :", error);
            alert("Une erreur inattendue est survenue.");
        }
    }
});
