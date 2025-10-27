import { getRandomRecipe } from "./get-recipe.js";
import { makeRandomRecipe } from "./make-recipe.js";

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    makeRandomRecipe();
}