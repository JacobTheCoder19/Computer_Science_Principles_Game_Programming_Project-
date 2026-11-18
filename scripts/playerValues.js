// Starting money and values for the player's first game
const DEFAULT_PLAYER = {
    money: 10,
    money_Lost: 0
};

// Function that loads the player's values from local storage or if it's there first time, 
// it makes a copy so we don't edit DEFAULT_PLAYER
function loadPlayer(){
    // Gets the player object from local storage, or null if it doesn't exist
    const raw = localStorage.getItem("player");

    // If its the first time playing, return a copy of the default player values
    if (raw === null) {
        return {...DEFAULT_PLAYER};
    }

    try {
        const saved = JSON.parse(raw);
        // It starts from the default values, then puts the saved values over it
        return {...DEFAULT_PLAYER, ...saved};
    } catch (err) {
        // The saved values are corrupted, so we return a copy of the default player values
        console.warn("Player saved values are corrupted, starting with default values", err);
        return {...DEFAULT_PLAYER};
    }
   
}

function savePlayer() {
    if (player.money <= 0){
        window.location.href="gettingkilled.html";
    }        
    try {
        // This basically turns the player object into a flat string or serialization by following the address
        // in player and reads the actual values and writes them as text.Then it stores it as "player"
        localStorage.setItem("player", JSON.stringify(player));
    } catch (err) {
        console.error("Failed to save player values", err);
    }
}

function resetPlayer(){
     Object.assign(player, DEFAULT_PLAYER);

     savePlayer();
}

const player = loadPlayer();