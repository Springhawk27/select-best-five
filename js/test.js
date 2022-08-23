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

const players = [];

document.getElementById('players').addEventListener('click', function (event) {
    const playerName = event.target.value;
    console.log(playerName)

    document.getElementById("btn-player1").disabled = true;
    document.getElementById("btn-player1").style.backgroundColor = 'gray';



    if (!players.includes(playerName) && players.length <= 5) {
        players.push(playerName);
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



