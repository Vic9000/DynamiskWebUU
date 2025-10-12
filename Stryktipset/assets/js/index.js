import { makeRow } from "./make-row.js";

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    makeRow();
}