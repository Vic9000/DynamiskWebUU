import { getRandomRecipe } from "./get-recipe.js";

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    getRandomRecipe();
}