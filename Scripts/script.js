// Aqui estão definidos os assets
const shipDown = "<img src=\"https://content.proenem.com.br/wp-content/uploads/2020/12/clipart-boat-explosion-transparent.png\" width=\"100px\" height=\"100px\">";
const noShip = "<img src=\"https://content.proenem.com.br/wp-content/uploads/2020/12/sea-pngrepo-com.png\" width=\"100px\" height=\"100px\">"
var myAudio = document.getElementById("myAudio");
var waterSound = document.getElementById("waterSound")

// Aqui é a ação quando não acerta o barco 
const cell = document.querySelectorAll('div');
cell.forEach(function (catchCell) {
    catchCell.addEventListener('click', function () {
        const blankWater = this.id;
        document.getElementById(blankWater).innerHTML = noShip;
        waterSound.play();

    })
})

// Aqui é a ação quando acerta o barco
const questionCell = document.querySelectorAll('.question');
console.log(questionCell);
questionCell.forEach(function (catchCell) {
    catchCell.addEventListener('click', function () {
        const findShip = this.id;
        document.getElementById(findShip).innerHTML = shipDown;
        myAudio.play();

    })
})