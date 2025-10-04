interface School {
    name: string;
    address: string;
    city: string;
    nb_staff: string;
    creation: string;
}

const school: School = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019"
};

function jsonValueKey<T, K extends keyof T>(json: T, key: K) {
    return json[key]
}

const value = jsonValueKey(school, "city");

console.log(value);