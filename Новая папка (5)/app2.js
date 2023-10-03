const board = document.querySelector('#board')
const colors = ['red', 'blue', 'orange', 'green', 'pink' , 'purple' , 'yellow']
const SQURES_NUMBER = 450
for (let i = 0; i < SQURES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    board.append(square)
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}
function  setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color} 0 0 2px ${color}`
}
function removeColor(elem){
    elem.style.backgroundColor = `#1d1d1d`
    elem.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
const index = Math.floor(Math.random() * colors.length)
return colors[index]
}