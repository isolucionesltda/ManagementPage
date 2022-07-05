const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNombre = document.querySelector('#m-nombre')
const sCargo = document.querySelector('#m-cargo')
const sSueldo = document.querySelector('#m-sueldo')
const btnGuardar = document.querySelector('#btnGuardar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNombre.value = itens[index].nombre
    sCargo.value = itens[index].cargo
    sSueldo.value = itens[index].sueldo
    id = index
  } else {
    sNombre.value = ''
    sCargo.value = ''
    sSueldo.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nombre}</td>
    <td>${item.cargo}</td>
    <td>R$ ${item.sueldo}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnGuardar.onclick = e => {
  
  if (sNombre.value == '' || sCargo.value == '' || sSueldo.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nombre = sNombre.value
    itens[id].cargo = sCargo.value
    itens[id].sueldo = sSueldo.value
  } else {
    itens.push({'nombre': sNombre.value, 'cargo': sCargo.value, 'sueldo': sSueldo.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
