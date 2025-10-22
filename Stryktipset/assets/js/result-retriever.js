

export async function getResult() {
    const url = 'https://api-internal.azurewebsites.net/strycket2025';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const playedGames = json.playedGames;

        return playedGames;
    } catch (error) {
        console.error(error.message);
        window.alert('Någonting gick fel, matchdata kunde inte hämtas.')
        return [];
    }
}