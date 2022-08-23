// document.getElementById('players').addEventListener('click', function (event) {
//     const playerName = event.target.value;
//     console.log(playerName)

//     const playerListMain = document.getElementById('player-list')
//     const playerList = playerListMain.innerHTML = `
//     <li class="py-1 text-sm md:text-base lg:text-lg ">${playerName}</li>
// `
//     playerListMain.appendChild(playerList);
//     // console.log(playerList)

// })


function disableButton(playerId) {
    document.getElementById(playerId).disabled = true;
    document.getElementById(playerId).style.backgroundColor = 'gray';


}

const players = [];

document.getElementById('players').addEventListener('click', function (event) {
    const playerName = event.target.value;
    console.log(playerName)






    if (!players.includes(playerName) && players.length < 5) {
        players.push(playerName);

        const playerId = event.target.id;
        disableButton(playerId)
    }
    else {
        alert('You can not add more than 5 players')
    }
    console.log(players)

    let playerListMain = document.getElementById('player-list');
    playerListMain.innerHTML = '';


    for (let i = 0; i < players.length; i++) {
        // if (i < 5) {
        const playerName = players[i];
        console.log(playerName)
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${playerName}</span>
        `;
        playerListMain.appendChild(li);

    }

    //     const playerList = playerListMain.innerHTML = `
    //     <li class="py-1 text-sm md:text-base lg:text-lg ">${playerName}</li>
    // `
    //     playerListMain.appendChild(playerList);
    // console.log(playerList)

})



