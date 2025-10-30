import { makeRandomRecipe, makeSearchRecipe } from "./make-recipe.js";

const RANDOMBUTTON = document.querySelector('.random-btn');
const SEARCHFORM = document.querySelector('.search');

window.addEventListener('load', main);

export function clearRecipe(elementID) {
    document.querySelector(elementID).innerHTML = '';
}

async function main() {
    removeEventListener('load', main);
}

function handleSearchRecipe(event) {
    clearRecipe('.recipe-wrapper');
    event.preventDefault();

    const searchTerm = event.target.elements.searchTerm.value;
    

    if (!searchTerm) {
        console.warn('Please enter a search term.');
        return;
    }

    makeSearchRecipe(searchTerm);
}

export function handleRandomRecipe() {
    clearRecipe('.recipe-wrapper');

    makeRandomRecipe();
}

RANDOMBUTTON.addEventListener('click', handleRandomRecipe);
SEARCHFORM.addEventListener('submit', handleSearchRecipe);