import { getResult } from "./result-retriever.js";

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

export async function makeRow() {
    const playedGames = await getResult();
    console.log(playedGames);
    const table = document.getElementById('table');

    playedGames.forEach(game => {
        const row = document.createElement('tr');

        const gameIdCell = document.createElement('td'); 
        gameIdCell.textContent = game.id;
        row.appendChild(gameIdCell);

        const teamCell = document.createElement('td');

        const homeLink = document.createElement('a');
        homeLink.href = game.teams[0].homepage;
        homeLink.textContent = game.teams[0].teamName;

        const awayLink = document.createElement('a');
        awayLink.href = game.teams[1].homepage;
        awayLink.textContent = game.teams[1].teamName;

        teamCell.appendChild(homeLink);
        teamCell.appendChild(document.createTextNode(' VS '));
        teamCell.appendChild(awayLink);

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