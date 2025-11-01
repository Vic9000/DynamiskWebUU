export async function getRandomRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const recipe = json.meals[0];
        return recipe;
    } catch (error) {
        console.error(error.message);
        window.alert('Something went wrong, recipe could not be found.')
        return [];
    }
}

export async function searchRecipe(searchTerm) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        const recipe = json.meals; // Skickar alla sökträffar
        return recipe;
    } catch (error) {
        console.error(error.message);
        window.alert('Something went wrong, recipe could not be found.');
        return [];
    }
}