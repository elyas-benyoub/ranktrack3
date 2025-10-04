"use strict";
const button = document.getElementById('btn');
const tbody = document.querySelector('#tableau tbody');
console.log(tbody);
button?.addEventListener('click', async (e) => {
    const response = await fetch('user.php');
    const users = await response.json();
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
