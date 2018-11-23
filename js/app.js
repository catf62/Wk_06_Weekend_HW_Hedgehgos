document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const hedgehogListItem = createHedgehogListItem(event.target);
  const hedgehogList = document.querySelector('#hedgehogs-list');
  hedgehogList.appendChild(hedgehogListItem);

  event.target.reset();
}




const createHedgehogListItem = function (form) {
  const hedgehogListItem = document.createElement('div');
  hedgehogListItem.classList.add('hedgehog-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  hedgehogListItem.appendChild(name);

  const gene = document.createElement('h3');
  gene.textContent = form.gene.value;
  hedgehogListItem.appendChild(gene);

  const type = document.createElement('p');
  type.textContent = form.type.value;
  hedgehogListItem.appendChild(type);


  const colours = document.createElement('p');
  colours.textContent = form.colours.value;
  hedgehogListItem.appendChild(colours);

  return hedgehogListItem;
}




const handleDeleteAllClick = function (event) {
  const hedgehogList = document.querySelector('#hedgehogs-list');
  hedgehogList.innerHTML = '';
}
