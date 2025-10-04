const form = document.getElementById('form');
const byId = document.getElementById('id');
const byName = document.getElementById('name');
const byTypes = document.getElementById('types');
const reset = document.getElementById('reset');
const completion = document.querySelector('.name-completion');
let pokemons = [];
const types = ["all", "Normal", "Fire",
    "Water", "Electric", "Grass",
    "Ice", "Fighting", "Poison",
    "Ground", "Flying", "Psychic",
    "Bug", "Rock", "Ghost",
    "Dragon", "Fairy", "Steel"];
const getList = async () => {
    try {
        const response = await fetch('./pokemon.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return [];
    }
};
const getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};
const createTable = async (data) => {
    const list = document.getElementById('list');
    const tbody = list?.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = "";
    }
    data.forEach(pokemon => {
        const row = document.createElement('tr');
        const data = [
            `<img src="${getPokemonImage(pokemon.id)}" alt="${pokemon.name}">`,
            pokemon.id,
            pokemon.name.french,
            pokemon.type.join(', '),
            pokemon.base.Attack,
            pokemon.base.Defense,
            pokemon.base.HP,
            pokemon.base['Sp. Attack'],
            pokemon.base['Sp. Defense'],
            pokemon.base.Speed
        ];
        data.forEach(field => {
            const td = document.createElement('td');
            td.innerHTML = field.toString();
            row.appendChild(td);
        });
        list?.querySelector('tbody')?.appendChild(row);
    });
};
const setTypes = () => {
    types.forEach(type => {
        const option = document.createElement('option');
        if (type === 'all') {
            option.value = "";
            option.innerHTML = type;
        }
        else {
            option.value = type;
            option.innerHTML = type;
        }
        byTypes?.appendChild(option);
    });
};
const updateAutoCompete = (e, names) => {
    const target = e.target;
    const value = target.value.trim();
    if (completion) {
        completion.innerHTML = "";
    }
    if (value.length > 0) {
        const result = names.filter(name => name.toLowerCase().includes(value.toLowerCase()));
        if (result.length) {
            completion?.classList.remove('hide');
        }
        else {
            completion?.classList.add('hide');
        }
        result.forEach((name, index) => {
            const li = document.createElement('li');
            li.setAttribute('id', `name${index}`);
            li.setAttribute('tabindex', "-1");
            li.setAttribute('data-id', `${index}`);
            li.innerText = name;
            li.addEventListener('click', () => {
                target.value = name;
                completion?.classList.add('hide');
            });
            completion?.appendChild(li);
        });
    }
    else {
        completion?.classList.add('hide');
    }
};
const keepVisible = (element, container) => {
    const elTop = element.offsetTop;
    const elBottom = elTop + element.offsetHeight;
    const viewTop = container.scrollTop;
    const viewBottom = viewTop + container.clientHeight;
    if (elTop < viewTop) { // Si le li dépasse en haut
        container.scrollTop = elTop;
    }
    else if (elBottom > viewBottom) { // Si le li dépasse en bas
        container.scrollTop = elBottom - container.clientHeight;
    }
};
const handleKey = (e) => {
    const items = Array.from(completion?.querySelectorAll("li") ?? []);
    if (!items.length)
        return;
    const container = completion;
    switch (e.key) {
        case "ArrowDown":
            e.preventDefault(); // empêche le scroll de la page
            if (document.activeElement === byName) {
                items[0].focus();
                keepVisible(items[0], container);
            }
            else {
                const currentIndex = items.indexOf(document.activeElement);
                const nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].focus();
                keepVisible(items[nextIndex], container);
            }
            break;
        case "ArrowUp":
            e.preventDefault();
            const currentIndex = items.indexOf(document.activeElement);
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].focus();
            keepVisible(items[prevIndex], container);
            break;
        case "Enter":
            if (document.activeElement && document.activeElement.tagName === "LI") {
                byName.value = document.activeElement.innerText;
                completion?.classList.add("hide");
                byName?.focus();
            }
            break;
        case "Escape":
            completion?.classList.add("hide");
            break;
    }
};
const clickOutside = (e) => {
    if (e.target !== byName && !completion?.contains(e.target)) {
        completion?.classList.add("hide");
    }
};
const toggleDisable = (source, target) => {
    source?.addEventListener('input', function (e) {
        const input = e.target;
        target.disabled = input.value.trim().length > 0;
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const id = data.get("id")?.trim();
    const name = data.get("name")?.trim().toLowerCase();
    const type = data.get("types")?.trim();
    const filtered = pokemons.filter((pokemon) => {
        const matchId = id ? pokemon.id === Number(id) : true;
        const matchName = name ? pokemon.name.french.toLowerCase().includes(name) : true;
        const matchType = type ? pokemon.type.includes(type) : true;
        return matchId && matchName && matchType;
    });
    createTable(filtered);
};
const resetFilter = (e) => {
    e.preventDefault();
    byId.value = "";
    byName.value = "";
    byTypes.value = "";
    createTable(pokemons);
};
document.addEventListener('DOMContentLoaded', async () => {
    pokemons = await getList();
    const names = pokemons.map((pokemon) => pokemon.name.french);
    toggleDisable(byId, byName);
    toggleDisable(byName, byId);
    setTypes();
    reset?.addEventListener('click', resetFilter);
    byName?.addEventListener('input', (e) => updateAutoCompete(e, names));
    document.addEventListener('keydown', handleKey);
    document.addEventListener("click", clickOutside);
    form?.addEventListener('submit', handleSubmit);
    createTable(pokemons);
});
export {};
