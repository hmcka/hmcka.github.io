const addItems = document.querySelector('.add-items');
const removeItems = document.querySelector('.remove-items');
const deleteItems = document.querySelector('.delete-all');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const box = document.querySelector('#rectWrapper');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function removeItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;

  items.forEach(function(item, index, array) {
    if (item.text === text) {
      var position = items.indexOf(item);
      items.splice(position, 1);
    }

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset;
  });
}

function deleteAll(e) {
  window.localStorage.clear();
  this.reset;
}


function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function onShimmer(e) {
  box.classList.add("shimmer");
}










window.addEventListener("load", onShimmer); 
box.addEventListener('mouseenter', onShimmer);

addItems.addEventListener('submit', addItem);
removeItems.addEventListener('submit', removeItem);
deleteItems.addEventListener('submit', deleteAll)

itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList);