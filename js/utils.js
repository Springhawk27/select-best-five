// getId function 
function getId(id) {
    return document.getElementById(id);
}

// button disable function
function disableButton(playerId) {
    document.getElementById(playerId).disabled = true;
    document.getElementById(playerId).style.backgroundColor = 'gray';
}

// player expense function
function playerExpense(players, playerExpenseAmount) {
    const totalPlayer = players.length;
    const totalPlayerExpense = totalPlayer * playerExpenseAmount;
    return totalPlayerExpense
}

function getPlayerExpense(players) {

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
}
