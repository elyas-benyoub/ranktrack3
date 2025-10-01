const moves = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [3, 5, 9],
    7: [4, 8],
    8: [7, 5, 9],
    9: [6, 8]
}

const getFreeCase = (pos) => {
    const scope = moves[pos];
    console.log(scope)
    let freeCase = null;

    scope.forEach(position => {
        if (!$(`#box${position} .item`).length) {
            freeCase = position;
        }
    });

    return freeCase;
}

const shuffle = (arr) => {
    let copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const setCases = (indexes) => {
    $(`.item-container`).each((index, element) => {
        $(element).empty();

        if (index < 8) {
            $(element)
                .append(`<div class="item"
                            data-id="${indexes[index]}" 
                            id="item${indexes[index]}"
                        >${indexes[index]}</div>`)
        }
    })
}

const end = () => {
    
}

const begin = () => {
    setCases(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));

    $('.item').each((index, element) => {
        $(element).on("click", function() {
            const pos = $(this).parent().data('pos');
            const freeCase = getFreeCase(pos);

            if (freeCase) {
                $(`#box${freeCase}`).append($(this));
            }
        });
    })

    $('.overlay')
        .css({ display: 'none' })
}


const init = () => {
    setCases([1, 2, 3, 4, 5, 6, 7, 8]);

    $('.overlay')
        .css({ display: 'flex' })
        .append("<button id='btn'>Commencer</button>");
}

$(document).ready(() => {
    init();
    $('#btn').on('click', begin);
});
