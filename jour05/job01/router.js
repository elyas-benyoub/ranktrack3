import { linkConnexion, linkInscription, content } from "./constant.js";
export const setActiveLink = (active) => {
    linkConnexion?.classList.remove('active');
    linkInscription?.classList.remove('active');
    if (active === 'connexion')
        linkConnexion?.classList.add('active');
    if (active === 'inscription')
        linkInscription?.classList.add('active');
};
export const loadForm = async (file, type = null) => {
    try {
        const response = await fetch(file);
        if (!response.ok)
            throw new Error("Erreur du chargement du formulaire.");
        const html = await response.text();
        if (content) {
            content.innerHTML = html;
        }
        setActiveLink(type);
    }
    catch (error) {
        if (content && error instanceof Error) {
            content.innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
        else {
            console.error("Erreur inconnue :", error);
        }
    }
};
