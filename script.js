// Seleciona o input file e o label para exibir o nome do arquivo selecionado
const inputFile = document.querySelector('#inputFile');
const fileSelected = document.querySelector('#fileSelected');
const fileSelectedName = document.querySelector('#fileSelectedName');

inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0];
  fileSelected.classList.toggle('d-none');
  fileSelectedName.innerText = file.name;
});

// Adiciona evento para remover o arquivo selecionado
const fileRemoveBtn = document.querySelector('#fileRemoveBtn');

fileRemoveBtn.addEventListener('click', () => {
  fileSelected.classList.toggle('d-none');
  inputFile.value = '';
});

// Adiciona evento para abrir o modal de adicionar arquivo
const addFileBtn = document.querySelector('#addFileBtn');
const modalAddFile = document.querySelector('#modalAddFile');

addFileBtn.addEventListener('click', () => {
  modalAddFile.classList.toggle('show');
});

// Adiciona evento para fechar o modal de adicionar arquivo
const modalAddFileCloseBtn = document.querySelector('#modalAddFileCloseBtn');

modalAddFileCloseBtn.addEventListener('click', () => {
  modalAddFile.classList.toggle('show');
});

// Adiciona evento para adicionar nova linha na tabela
const formAddFile = document.querySelector('#formAddFile');
const tableBody = document.querySelector('#tableBody');

formAddFile.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputName = event.target.elements.name;
  const inputDate = event.target.elements.date;
  const inputFile = event.target.elements.inputFile;

  const fileName = inputFile.files[0].name;
  const fileDate = new Date(inputDate.value).toLocaleDateString();

  const row = document.createElement('tr');

  const cellName = document.createElement('td');
  cellName.innerText = inputName.value;

  const cellDate = document.createElement('td');
  cellDate.innerText = fileDate;

  const cellActions = document.createElement('td');
  cellActions.classList.add('btn-actions');

  const downloadBtn = document.createElement('a');
  downloadBtn.href = '#';
  downloadBtn.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
  const downloadIcon = document.createElement('i');
  downloadIcon.classList.add('fas', 'fa-download');
  downloadBtn.appendChild(downloadIcon);

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('btn', 'btn-sm', 'btn-outline-danger');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash');
  deleteBtn.appendChild(deleteIcon);

  cellActions.appendChild(downloadBtn);
  cellActions.appendChild(deleteBtn);

  row.appendChild(cellName);
  row.appendChild(cellDate);
  row.appendChild(cellActions);

  tableBody.appendChild(row);

  inputName.value = '';
  inputDate.value = '';
  inputFile.value = '';

  modalAddFile.classList.toggle('show');
});

// Adiciona evento para remover linha da tabela
tableBody.addEventListener('click', (event) => {
  if (event.target.matches('.btn-outline-danger')) {
    const row = event.target.closest('tr');
    row.remove();
  }
});
