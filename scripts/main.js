import { series } from "./data.js";
var seriesTbody = document.getElementById('coleccion');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a herf = \"#\" class = \"clickable\" data-id = \"").concat(serie.name, "\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.estudio, "</td>\n                           <td>").concat(serie.rating, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderAverage(average) {
    var averageElement = document.getElementById('average');
    var prom = average.toString();
    averageElement.innerHTML += prom;
}
function getAverageSeasons(series) {
    //Rating en este caso, por error de programación, sería igual a temporada
    var totalCredits = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.rating; });
    var promedio = totalCredits / series.length;
    renderAverage(promedio);
}
function searchSerieByName(nameKey, series) {
    var matchingSeries = nameKey === '' ? series : series.filter(function (serie) { return serie.name.match(nameKey); });
    return matchingSeries[0];
}
//El siguiente método fue obtenido del trabajo de Diego Ortiz, las pequeñas variantes del tamaño
//de la imagen fueron realizadas por mi al igual que la distribución de los elementos en la card
document.addEventListener("click", function (event) {
    var triggered = event.target;
    if (triggered.classList.contains("clickable")) {
        var nombre = triggered.dataset.id;
        var serieInfo = searchSerieByName(nombre, series);
        var cardTitle = document.querySelector('#cardTitle');
        var cardText = document.querySelector('#cardText');
        cardTitle.textContent = serieInfo.name;
        cardText.innerHTML = "\n      <p><img class=\"serie-image\" src=\"".concat(serieInfo.image, "\" alt=\"").concat(serieInfo.name, " image\" width = \"250\" height =\"150\" ></p>\n      <p>").concat(serieInfo.description, "</p>\n      <p><a href=\"").concat(serieInfo.url, "\" target=\"_blank\">").concat(serieInfo.url, "</a></p>\n      \n    ");
    }
});
