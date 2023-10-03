let player = 1
let list = [0, 0, 0, 0, 0, 0, 0, 0, 0]  //пустая ячейка, 1 - крест, 2 - ноль

let board = document.querySelector('.board')
for (let i = 0; i < 9; i++) {
    let div = document.createElement("div")
    div.classList.add("cell")
    div.setAttribute("data-number", i)
    board.append(div)
}
board.addEventListener('click', onclick)
function onclick(event) {
    if (event.target.className != 'cell') return;
    let cell = event.target
    if (cell.classList.length !== 1) return;    // cell zero
    if (player === 2) {
        cell.classList.add('zero')
        list[cell.dataset.number] = 2
    }
    else {
        cell.classList.add('cross')
        list[cell.dataset.number] = 1
    }
    if (winner(player)) {
        console.log(`Выиграл игрок ${player}`)
        var outputElement = document.getElementById("output");
        outputElement.innerHTML = (`Выиграл игрок ${player}`)
    }
    player = (player === 1) ? 2 : 1
}
function winner(plr) {
    return (
        (list[0] === list[1] && list[0] === list[2] && list[0] === plr) ||
        (list[3] === list[4] && list[3] === list[5] && list[3] === plr) ||
        (list[6] === list[7] && list[6] === list[8] && list[6] === plr) ||
        (list[0] === list[3] && list[0] === list[6] && list[0] === plr) ||
        (list[1] === list[4] && list[1] === list[7] && list[1] === plr) ||
        (list[2] === list[5] && list[2] === list[8] && list[2] === plr) ||
        (list[0] === list[4] && list[0] === list[8] && list[0] === plr) ||
        (list[2] === list[4] && list[2] === list[6] && list[2] === plr)
    )
} 


