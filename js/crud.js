const modal = document.querySelector('.modal-container')
const tbody__crud = document.querySelector('tbody__crud')
const snombre = document.querySelector('#m-nombre')
const scargo = document.querySelector('#m-cargo')
const ssueldo = document.querySelector('#m-sueldo')
const btnguardar = document.querySelector('#btnguardar')

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
        snombre.value = itens[index].nombre
        scargo.value = itens[index].cargo
        ssueldo.value = itens[index].sueldo
        id = index
    } else {
        snombre.value = ''
        scargo.value = ''
        ssueldo.value = ''
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
    let tr__crud = document.createElement('tr')

    tr__crud.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="tabla__divtabla__columna">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="tabla__divtabla__columna">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
    tbody__crud.appendChild(tr__crud)
}

btnguardar.onclick = e => {

    if (snombre.value == '' || scargo.value == '' || ssueldo.value == '') {
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nombre = sNome.value
        itens[id].cargo = sFuncao.value
        itens[id].sueldo = sSalario.value
    } else {
        itens.push({ 'nombre': snombre.value, 'cargo': scargo.value, 'sueldo': ssueldo.value })
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}

function loadItens() {
    itens = getItensBD()
    tbody__crud.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
