import { series } from "./data";
var seriesTbody = document.getElementById('coleccion');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.estudio, "</td>\n                           <td>").concat(c.rating, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(series);
