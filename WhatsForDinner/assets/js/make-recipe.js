import { getRandomRecipe } from "./get-recipe.js";
import { searchRecipe } from "./get-recipe.js";

// Funktion för att göra en lista med ingredienser och deras respektive mått
async function makeIngredientList(recipe) {
    const ingredients = [];
    const measures = [];

    const ingredientList = document.createElement('ul');

    // Loopar igenom de 20 strIngredient- och strMeasure-objekten
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

    // Loopar igenom listorna och lägger till dem till HTML-listan
    for (let i=0; i < ingredients.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` ${measures[i]} ${ingredients[i]}`;

        ingredientList.appendChild(listItem);
    }

    return ingredientList;
}

// Funktion för att lägga till radbrytningar och öka instruktionernas läsbarhet
function addLineBreaks(text) {
    const modifiedText = text.replace(/\.\s*/g, '$&<br>');
    return modifiedText;
}

// Funktion för att generera recept-innehållet
async function makeRecipe(recipeContent) {
    const recipeDiv = document.querySelector(".recipe-wrapper");

    // Gör en div per recept
    const recipeBox = document.createElement('div');
    recipeBox.className = 'recipe-box';

    // Lägger till rättens namn som h3
    const recipeTitle = document.createElement('h3');
    recipeTitle.className = 'recipe-title';
    recipeTitle.textContent = recipeContent.strMeal;

    recipeBox.appendChild(recipeTitle);

    // Skapar en div för ingredienser och instruktioner
    const recipe = document.createElement('div');  
    recipe.className = 'recipe';
    recipe.appendChild(await makeIngredientList(recipeContent));

    const instructions = document.createElement('p');
    instructions.innerHTML = addLineBreaks(recipeContent.strInstructions);
    recipe.appendChild(instructions);
    
    // Lägger till receptkällan
    const source = document.createElement('p');
    const sourceUrl = document.createElement('a');
    sourceUrl.href = recipeContent.strSource;
    sourceUrl.textContent = recipeContent.strSource;
    source.innerHTML = `Source: <br>`;
    source.appendChild(sourceUrl);
    
    
    // Lägger till diven i HTML-diven
    recipeBox.appendChild(recipe);
    recipeBox.appendChild(source);
    recipeDiv.appendChild(recipeBox);
}

export async function makeRandomRecipe() {
    const recipeContent = await getRandomRecipe();
    await makeRecipe(recipeContent);
}

// Funktion för att kunna visa flera sökträffar samtidigt
export async function makeSearchRecipe(searchTerm) {
    const recipeContent = await searchRecipe(searchTerm);
    console.log(recipeContent);
    for (let i=0; i < recipeContent.length; i++) {
        await makeRecipe(recipeContent[i]);
    }
}

