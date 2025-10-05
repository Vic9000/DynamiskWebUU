import { getResult } from "./result-retriever.js";

window.addEventListener('load', main);

function main() {
    removeEventListener('load', main);

    makeRow();
}


function makeRow() {
    const RESULT = getResult();

    for (let i = 0; i < RESULT.length(); i++) {

    }
}


/*
<div class="checkmark">
    <span class="stem"></span>
    <span class="kick"></span>
</div> 
*/