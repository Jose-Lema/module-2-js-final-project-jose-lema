const recipeConf = document.getElementById('selection');
const recipeSelection = document.getElementById('recipes');
const recipeNameSelected = document.getElementById('recipe-name');
const pantrySubmit = document.getElementById('pantry-submit');
const ingList = document.getElementById('ing-list');
const ingEntry = document.getElementById('ing-entry');
const removeBtn = document.getElementsByClassName('.remove-item');

function displayPantryItems() {
    const pantryItemsfromStorage = getPantryItemsFromStorage();
    pantryItemsfromStorage.forEach(item => addPantryItemToDOM(item));
}

function addPantryItem() {
    const pantryItemName = ingEntry.value;

    addPantryItemToDOM(pantryItemName);

    addPantryItemToStorage(pantryItemName);
    ingEntry.value = '';
}

function addPantryItemToDOM(item){
    const li = document.createElement('li');
    console.log(li);
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    li.appendChild(input);
    li.appendChild(document.createTextNode(item))
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'remove-item';
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);
    ingList.appendChild(li);
}

function removeItemFromPantry(item) {
    item.remove();
    removePantryItemfromStorage(item);
}

function removePantryItemfromStorage(item) {
    let pantryItemsfromStorage = getPantryItemsFromStorage();

    pantryItemsfromStorage = pantryItemsfromStorage.filter(i => i !== item);

    localStorage.setItem('items', JSON.stringify(pantryItemsfromStorage));
}

function onClickItem(e) {
    if(e.target.className === 'remove-item') {
        console.log(e.target.parentElement);
        removeItemFromPantry(e.target.parentElement);
    }
}

function setIngredients() {
    const first = document.getElementById('ing1');
    const second = document.getElementById('ing2');
    const third = document.getElementById('ing3');
    
    recipeNameSelected.textContent = recipeSelection.value;
    first.textContent = 'Milk';
    second.textContent = 'Pasta';
    third.textContent = 'Cheese';
}

function setName() {
    
}


function addPantryItemToStorage(item) {
    const pantryItemsfromStorage = getPantryItemsFromStorage();
    
    pantryItemsfromStorage.push(item);
    
    console.log(pantryItemsfromStorage);
    
    localStorage.setItem('items', JSON.stringify(pantryItemsfromStorage));
}

function getPantryItemsFromStorage() {
    let pantryItemsfromStorage;

    if(localStorage.getItem('items') === null) {
        pantryItemsfromStorage = [];
    } else {
        pantryItemsfromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return pantryItemsfromStorage;
}

recipeConf.addEventListener('click', setIngredients);
recipeSelection.addEventListener('change', setName);
pantrySubmit.addEventListener('click', addPantryItem);
document.addEventListener('DOMContentLoaded', displayPantryItems);
ingList.addEventListener('click', onClickItem);