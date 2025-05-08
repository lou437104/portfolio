let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game in HTML
    for (let i = 0; i < 9; i++) { // i goes yo from 0 to 8 stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selectTile);
        document.getElementById
        ("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // every 1000 ms = 1 seconds set a mole
    setInterval(setPlant, 2000); // every 2000 ms = 2 seconds set a plant
}

function getRandomTile() {
    //math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) intergers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return; // don't set a mole if the game is over
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = ""; // remove the mole from the previous tile
    }

    let mole = document.createElement("img");
    mole.src ="./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) {
        return; // don't place a mole on the same tile as the plant
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return; // don't set a plant if the game is over
    }
if (currPlantTile) {
        currPlantTile.innerHTML = ""; // remove the mole from the previous tile
    }
    let plant = document.createElement("img");
    plant.src ="./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) {
        return; // don't place a plant on the same tile as the mole
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}


function selectTile() {
    if (gameOver) {
        return; // don't allow selection if the game is over
    }
    if (this === currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update the score 
    }
    else if (this === currPlantTile) {
       document.getElementById("score").innerText = "GAME OVER!" + score.toString(); //update the score
       gameOver = true;
    }
}