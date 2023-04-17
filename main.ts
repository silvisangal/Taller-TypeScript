import { Serie } from "./Serie";
import { series } from "./data";

const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[]): void {
  series.forEach (c  => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.estudio}</td>
                           <td>${c.rating}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

renderSeriesInTable(series);
