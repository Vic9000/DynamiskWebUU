import { getRandomRecipe } from "./get-recipe.js";
import { searchRecipe } from "./get-recipe.js";

async function makeIngredientList(recipe) {
    const ingredients = [];
    const measures = [];

    const ingredientList = document.createElement('ul');

    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        const ingredient = recipe[ingredientKey];
        const measure = recipe[measureKey];
        
        if (ingredient && typeof ingredient === 'string' && ingredient.trim() !== "") {
            ingredients.push(ingredient.trim());
        }

        if (measure && typeof measure === 'string' && measure.trim() !== "") {
            measures.push(measure.trim());
        }
    }

    for (let i=0; i < ingredients.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` ${measures[i]} ${ingredients[i]}`;

        ingredientList.appendChild(listItem);
    }

    return ingredientList;
}

export async function makeRandomRecipe() {
    const recipeContent = await getRandomRecipe();
    const recipeDiv = document.querySelector(".recipe-wrapper");
    console.log(recipeContent);

    const recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    recipeTitle.textContent = recipeContent.strMeal;
    recipeDiv.appendChild(recipeTitle);

    const recipe = document.createElement('div');
    recipe.className = 'recipe';

    
    
    recipe.appendChild(await makeIngredientList(recipeContent));

    const instructions = document.createElement('p');
    instructions.textContent = recipeContent.strInstructions;
    recipe.appendChild(instructions);


    recipeDiv.appendChild(recipe);

}