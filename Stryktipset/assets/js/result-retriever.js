

export async function getResult() {
    const url = 'https://api-internal.azurewebsites.net/strycket2025';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json().playedGames;
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}