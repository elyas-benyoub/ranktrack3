import { linkConnexion, linkInscription } from "./constant.js";
import { loadForm } from "./router.js";
import { setError, signinRules, signupRules } from "./validation.js";

linkConnexion?.addEventListener('click', () => loadForm("connexion.html", "connexion"));
linkInscription?.addEventListener('click', () => loadForm("inscription.html", "inscription"));

document.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    
    if (target.matches('.signup-form')) {
        let valid = true;

        signupRules.forEach(([field, message, check]) => {
            if (!setError(field, message, check)) {
                valid = false;
            }
        })

        if (valid) {
            console.table(Object.fromEntries((new FormData(target) as FormData).entries()))
        }
    }

    if (target.matches('.signin-form')) {
        let valid = true;

        signinRules.forEach(([field, message, check]) => {
            if (!setError(field, message, check)) {
                valid = false;
            }
        })

        if (valid) {
            console.table(Object.fromEntries((new FormData(target) as FormData).entries()))
        }
    }
})
