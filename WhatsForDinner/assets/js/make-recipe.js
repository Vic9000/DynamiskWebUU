import { getRandomRecipe } from "./get-recipe.js";
// import { searchRecipe } from "./get-recipe.js";

function getIngredients()

export async function makeRandomRecipe() {
    const recipeContent = await getRandomRecipe();
    const recipeDiv = document.querySelector(".recipe-wrapper");
    console.log(recipeContent);
    const recipe = document.createElement('div');
    recipe.className = 'recipe';

    const recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    recipeTitle.textContent = recipeContent.strMeal;
    recipe.appendChild(recipeTitle);

    recipeContent.forEach(item => {
        if (item )
    });

    const instructions = document.createElement('p');
    instructions.textContent = recipeContent.strInstructions;
    recipe.appendChild(instructions);


    recipeDiv.appendChild(recipe);

}