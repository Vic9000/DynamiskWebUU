import { getRandomRecipe } from "./get-recipe.js";
import { searchRecipe } from "./get-recipe.js";

async function makeRandomRecipe() {
    const recipe = getRandomRecipe();
    const recipeDiv = document.querySelector(".recipe-wrapper");
    

    const instructions = recipe.strInstructions;



    recipeDiv.appendChild(recipe);

}