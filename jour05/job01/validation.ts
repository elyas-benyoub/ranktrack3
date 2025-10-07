import { TypeRules } from "./constant";

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const signupRules: TypeRules[] = [
    ['lastname', "Veuillez renseigner votre nom.", () => byId('lastname')?.value === ""],
    ['firstname', "Veillez renseigner votre prénom.", () => byId('firstname')?.value === ""],
    ['email', "Email invalide.", () => !validateEmail(byId('email').value)],
    ['password', "Le mot de passe doit avoir 8 caractères minimum.", () => byId('password').value.length < 8],
    ['address', "Veuillez renseigner une adresse.", () => byId('address').value === ""],
    ['postal', "Code postal invalide.", () => byId('postal').value.length !== 5]
];

export const signinRules: TypeRules[] = [
    ['email', "Email invalide.", () => !validateEmail(byId('email').value)],
    ['password', "Le mot de passe doit avoir 8 caractères minimum.", () => byId('password').value.length < 8]
];

export const setError = (field: string, message: string, check: () => boolean): boolean => {
    const inputError = document.getElementById(`${field}-error`) as HTMLElement | null;
    const input = document.getElementById(`${field}`) as HTMLInputElement | null;

    const isInvalid = check();
    if (inputError) inputError.textContent = isInvalid ? message : "";

    input?.addEventListener('input', () => {
        const invalid = check();
        if (inputError) inputError.textContent = invalid ? message : "";
    });

    return !isInvalid;
};

export const byId = (id: string) => document.getElementById(id) as HTMLInputElement;

export const validateForm = (rules: TypeRules[]) => {
    let valid = true;

    rules.forEach(([field, message, check]) => {
        if (!setError(field, message, check)) {
            valid = false;
        }
    })
}