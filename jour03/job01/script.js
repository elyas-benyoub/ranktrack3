$(document).ready(function () {
    $("#btn").click(function() {
        $("#btn").after("<p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.</p>")
    }),
    $('#hide').click(function () {
        $('html').hide();
    })
})