export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
export const signupRules = [
    ['lastname', "Veuillez renseigner votre nom.", () => byId('lastname')?.value === ""],
    ['firstname', "Veillez renseigner votre prénom.", () => byId('firstname')?.value === ""],
    ['email', "Email invalide.", () => !validateEmail(byId('email').value)],
    ['password', "Le mot de passe doit avoir 8 caractères minimum.", () => byId('password').value.length < 8],
    ['address', "Veuillez renseigner une adresse.", () => byId('address').value === ""],
    ['postal', "Code postal invalide.", () => byId('postal').value.length !== 5]
];
export const signinRules = [
    ['email', "Email invalide.", () => !validateEmail(byId('email').value)],
    ['password', "Le mot de passe doit avoir 8 caractères minimum.", () => byId('password').value.length < 8]
];
export const setError = (field, message, check) => {
    const inputError = document.getElementById(`${field}-error`);
    const input = document.getElementById(`${field}`);
    const isInvalid = check();
    if (inputError)
        inputError.textContent = isInvalid ? message : "";
    input?.addEventListener('input', () => {
        const invalid = check();
        if (inputError)
            inputError.textContent = invalid ? message : "";
    });
    return !isInvalid;
};
export const byId = (id) => document.getElementById(id);
export const validateForm = (rules) => {
    let valid = true;
    rules.forEach(([field, message, check]) => {
        if (!setError(field, message, check)) {
            valid = false;
        }
    });
};
