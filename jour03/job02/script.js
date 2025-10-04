const images = [
    "./images/arc1.png",
    "./images/arc2.png",
    "./images/arc3.png",
    "./images/arc4.png",
    "./images/arc5.png",
    "./images/arc6.png"
];

const shuffle = (arr) => {
    let copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const checkWin = () => {
    let correct = true;

    $('#rainbow img').each(function (index, elem) {
        if ($(elem).attr('src') !== images[index]) {
            correct = false;
            return false; // stop la boucle
        }
    });

    if ($('#rainbow img').length === images.length) {
        $('.overlay').css({ display: 'flex' });
        $('.overlay .message')
            .text(correct ? "Vous avez gagné 🎉" : "Vous avez perdu ❌")
            .css("color", correct ? "lime" : "red");

        $('.overlay #btn').text("Recommencer");
    }
}

const init = () => {
    Array.from(images.keys()).forEach(key => {
        $('#rainbow').append(`<img src="${images[key]}" id="chunk${key}" alt="arc${key + 1}">`);
    })

    $('.overlay')
        .css({ display: 'flex' })
        .append("<button id='btn'>Commencer</button>");

    $('#btn').click(function () {
        shuffle(Array.from(images.keys())).forEach(key => {
            $('#shuffled').append($(`#chunk${key}`));
        })

        $('.overlay').css('display', 'none');
    })
}

$(document).ready(function () {
    init();

    $('#shuffled').on('click', "img[id^='chunk']", function () {
        $('#rainbow').append($(this));
        checkWin();
    })
});


$('#start').on('click', shuffle);