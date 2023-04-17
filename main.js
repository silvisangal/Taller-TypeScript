"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.estudio, "</td>\n                           <td>").concat(c.rating, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(data_1.series);
