export async function getRandomRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const recipe = json.meals[0];
        console.log(recipe)
        return recipe;
    } catch (error) {
        console.error(error.message);
        window.alert('Någonting gick fel, matchdata kunde inte hämtas.')
        return [];
    }
}