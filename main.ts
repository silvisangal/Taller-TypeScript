import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('coleccion')!; 

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach ((serie)  => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a herf = "#" class = "clickable" data-id = "${serie.name}">${serie.name}</a></td>
                           <td>${serie.estudio}</td>
                           <td>${serie.rating}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function renderAverage(average: number): void {
  const averageElement: HTMLElement = document.getElementById('average')!;
  let prom: string = average.toString();
  averageElement.innerHTML += prom;

}

function getAverageSeasons(series: Serie[]): void {
  //Rating en este caso, por error de programación, sería igual a temporada
  let totalCredits: number = 0;
  series.forEach((serie) => totalCredits = totalCredits + serie.rating);
  let promedio : number = totalCredits / series.length;
  renderAverage(promedio);
}

function searchSerieByName(nameKey: string, series: Serie[]) {
  const matchingSeries = nameKey === '' ? series : series.filter( serie => serie.name.match(nameKey));
  return matchingSeries[0]
}

//El siguiente método fue obtenido del trabajo de Diego Ortiz, las pequeñas variantes del tamaño
//de la imagen fueron realizadas por mi al igual que la distribución de los elementos en la card
document.addEventListener("click", (event: MouseEvent) => {
  const triggered = event.target as HTMLElement;
  if (triggered.classList.contains("clickable")) {
    const nombre = triggered.dataset.id as string;
    let serieInfo : Serie = searchSerieByName(nombre, series);
    const cardTitle = document.querySelector('#cardTitle') as HTMLElement;
    const cardText = document.querySelector('#cardText') as HTMLElement;
    cardTitle.textContent = serieInfo.name;
    cardText.innerHTML = `
      <p><img class="serie-image" src="${serieInfo.image}" alt="${serieInfo.name} image" width = "250" height ="150" ></p>
      <p>${serieInfo.description}</p>
      <p><a href="${serieInfo.url}" target="_blank">${serieInfo.url}</a></p>
      
    `;
  }
})