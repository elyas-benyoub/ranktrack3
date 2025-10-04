"use strict";
const school = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019"
};
function jsonValueKey(json, key) {
    return json[key];
}
const value = jsonValueKey(school, "city");
console.log(value);
