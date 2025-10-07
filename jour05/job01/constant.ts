export const content = document.getElementById('content');
export const linkConnexion = document.getElementById('link-connexion');
export const linkInscription = document.getElementById('link-inscription');

export type SignupData = {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    address: string;
    postal: string;
}

export type SigninData = {
    email: string;
    password: string;
}

export type TypeRules = [string, string, () => boolean];