import { handleRandomRecipe } from "./index.js";

// Denna fil existerar för att det är den enklaste lösningen jag känner till för att köra handleRandomRecipe när random.html laddas om

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    handleRandomRecipe();
}