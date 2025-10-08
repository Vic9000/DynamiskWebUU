import { getResult } from "./result-retriever.js";

window.addEventListener('load', main);

async function main() {
    removeEventListener('load', main);

    makeRow();
}

function makeCheckmark() {
    const checkmarkDiv = document.createElement('div');
    checkmarkDiv.className = 'checkmark'

    const stemSpan = document.createElement('span');
    stemSpan.className = 'stem';

    const kickSpan = document.createElement('span');
    kickSpan.className = 'kick';

    checkmarkDiv.appendChild(stemSpan);
    checkmarkDiv.appendChild(kickSpan);

    return checkmarkDiv;
}

async function makeRow() {
    const playedGames = await getResult();
    const table = document.getElementById('table');

    playedGames.forEach(game => {
        const row = document.createElement('tr');

        const gameIdCell = document.createElement('td'); 
        gameIdCell.textContent = game.id;
        row.appendChild(gameIdCell);

        const teamCell = document.createElement('td');
        const homeTeam = game.teams[0].teamName;
        const awayTeam = game.teams[1].teamName;
        teamCell.innerHTML = `${homeTeam} VS ${awayTeam}`;
        row.appendChild(teamCell);

        const results = ['1', 'X', '2'];
        results.forEach(result => {
            const resultCell = document.createElement('td');

            if (game.outcome === result) {
                resultCell.appendChild(makeCheckmark());
            } else {
                resultCell.innerHTML = '&nbsp;';
            }
            row.appendChild(resultCell);
        });

        table.appendChild(row);
    });
}


/*

*/