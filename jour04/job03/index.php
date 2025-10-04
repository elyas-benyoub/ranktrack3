<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Jour04, Job03</title>
</head>

<body>
    <form id="form">
        <fieldset>
            <legend>Rechercher un Pokémon :</legend>
            <input type="text" name="id" id="id" placeholder="id">
            <div id="input-name">
                <input type="text" name="name" id="name" placeholder="nom" autocomplete="off">
                <ul class="name-completion hide"></ul>
            </div>
            <select name="types" id="types"></select>
            <button type="submit">Filtrer</button>
            <button id="reset">reset</button>
        </fieldset>
    </form>
    <table id="list" class="show">
        <thead>
            <tr>
                <th>srite</th>
                <th>id</th>
                <th>name</th>
                <th>types</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Sp. Attack</th>
                <th>Sp. Defense</th>
                <th>Speed</th>
                <th>hp</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script type="module" src="./script.js"></script>
</body>

</html>