
const players = [];

document.getElementById('players').addEventListener('click', function (event) {
    const playerName = event.target.value;

    if (!players.includes(playerName) && players.length < 5) {
        players.push(playerName);

        const playerId = event.target.id;
        disableButton(playerId)
    }
    else {
        alert('You can not add more than 5 players')
    }

    let playerListMain = getId('player-list');
    playerListMain.innerHTML = '';


    for (let player of players) {
        const playerName = player;
        const li = document.createElement('li');
        li.innerHTML = `
        <p class="mb-2">${playerName}</p>
        `;
        playerListMain.appendChild(li);
    }
})




document.getElementById('player-expense-button').addEventListener('click', function () {

    const playerExpenseField = getId('player-expense-field');
    const playerExpenseAmountString = playerExpenseField.value;
    const playerExpenseAmount = parseFloat(playerExpenseAmountString);

    if (players.length == 0) {
        alert('Please add some player first');
    }
    else if (playerExpenseAmount) {
        const totalPlayerExpense = playerExpense(players, playerExpenseAmount)

        const totalPlayerExpenseElement = getId('total-player-expense');
        totalPlayerExpenseElement.innerText = totalPlayerExpense;
    }
    else {
        alert('Please enter per player expense');
    }

    playerExpenseField.value = '';
})


document.getElementById('total-expense-button').addEventListener('click', function () {
    const totalPlayerExpenseElement = getId('total-player-expense');
    const totalPlayerExpenseString = totalPlayerExpenseElement.innerText;
    const totalPlayerExpenseAmount = parseFloat(totalPlayerExpenseString);


    const managerExpenseField = getId('manager-field');
    const managerAmountString = managerExpenseField.value;
    const managerExpenseAmount = parseFloat(managerAmountString);

    const couchExpenseField = getId('coach-field');
    const couchAmountString = couchExpenseField.value;
    const couchExpenseAmount = parseFloat(couchAmountString);


    if (!totalPlayerExpenseString) {
        alert('Please add some player and calculate their enpenses first');
    }
    else if (totalPlayerExpenseAmount && managerExpenseAmount && couchExpenseAmount) {
        const total = totalPlayerExpenseAmount + managerExpenseAmount + couchExpenseAmount

        const totalExpenseElement = getId('total-expense');
        totalExpenseElement.innerText = total;
    }
    else {
        alert('Please enter expenses for coach and manager');
    }

    managerExpenseField.value = '';
    couchExpenseField.value = '';

})





