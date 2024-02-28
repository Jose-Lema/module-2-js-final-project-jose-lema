const formBtn = document.getElementById('selection');
const recipeName = document.getElementById('recipes');
const test = document.getElementById('testing');

function setIngredients() {
    const first = document.getElementById('ing1');
    const second = document.getElementById('ing2');
    const third = document.getElementById('ing3');

    test.textContent = recipeName.value;
    first.textContent = 'Spicy Sauce';
    second.textContent = 'pasta';
    third.textContent = 'sausage';
}

function setName() {
    
}

formBtn.addEventListener('click', setIngredients);
recipeName.addEventListener('change', setName);