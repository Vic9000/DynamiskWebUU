import { getRandomRecipe, searchRecipe } from "./get-recipe.js";
import { makeRandomRecipe } from "./make-recipe.js";

const RANDOMBUTTON = document.querySelector('.random-btn');
const SEARCHFORM = document.querySelector();

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    makeRandomRecipe();
}

RANDOMBUTTON.addEventListener('click', handleRandomRecipe);
SEARCHFORM.addEventListener('submit', handleSearchRecipe);