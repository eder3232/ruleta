const $table = document.querySelector('.table')
const $body = $table.lastElementChild

const $buttonAdd = document.getElementById('addNewNumber')
const $numeroGanador = document.getElementById('numeroGanador')

const database = []

$buttonAdd.onclick = function () {
  numeroGanador = Number($numeroGanador.value)
  database.push(numeroGanador)
  let row = $body.insertRow($body.length)
  let cell0 = row.insertCell(0)
  let cell1 = row.insertCell(1)
  let cell2 = row.insertCell(2)
  let cell3 = row.insertCell(3)
  let cell4 = row.insertCell(4)

  cell0.innerHTML = `<td>${numeroGanador}</td>`
  $numeroGanador.value = ''
  //analizamos si es par o inpar
  if (numeroGanador === 0) {
    cell3.innerHTML = '<td><p class="verde">Verde</p></td>'
  } else if (numeroGanador % 2 === 0) {
    cell3.innerHTML = `<td><p class="par">Par</p></td>`
  } else {
    cell3.innerHTML = `<td><p class="inpar">Inpar</p></td>`
  }
  const rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 36]
  const negros = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ]
  //analizamos rojo o negro
  if (numeroGanador === 0) {
    cell2.innerHTML = '<td><p class="verde">Verde</p></td>'
  } else if (rojos.includes(numeroGanador)) {
    cell2.innerHTML = `<td><p class="rojo">Rojo</p></td>`
  } else if (negros.includes(numeroGanador)) {
    cell2.innerHTML = `<td><p class="negro">Negro</p></td>`
  }
  // analizamos mayor menor
  if (numeroGanador === 0) {
    cell1.innerHTML = '<td><p class="verde">Verde</p></td>'
  } else if (numeroGanador < 19) {
    cell1.innerHTML = `<td><p class="menor">Menor</p></td>`
  } else if (numeroGanador >= 19) {
    cell1.innerHTML = `<td><p class="mayor">Mayor</p></td>`
  }
  // analizamos a que fila pertenece
  const fila1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
  const fila2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35]
  const fila3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
  if (numeroGanador === 0) {
    cell4.innerHTML = '<td><p class="verde">Verde</p></td>'
  } else if (fila1.includes(numeroGanador)) {
    cell4.innerHTML = `<td><p>Fila 1</p></td>`
  } else if (fila2.includes(numeroGanador)) {
    cell4.innerHTML = `<td><p>Fila 2</p></td>`
  } else if (fila3.includes(numeroGanador)) {
    cell4.innerHTML = `<td><p>Fila 3</p></td>`
  }
}
