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
    console.log(totalPlayerExpense)

    return totalPlayerExpense


}