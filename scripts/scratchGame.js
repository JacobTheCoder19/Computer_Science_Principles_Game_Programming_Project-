const moneyBox = document.getElementById("money");
// Array to keep track of the number of each symbol
// [cactus, hat, horseshoe, money bag, nugget, star]
const numOfSymbols = [0, 0, 0, 0, 0]; 

function showMoney() {
    moneyBox.textContent = "$" + player.money;
}

// When the page loads, it shows the player's saved money
showMoney();

//Buying a ticket
const ticket = document.querySelector(".shop-item");
ticket.addEventListener("click", function () {
    console.log("You clicked the ticket!");
    loadTicket();
    player.money -= 5;
    savePlayer();
    showMoney();
});

// Load ticket to board and symbols
const hint = document.getElementById("table-hint");
const ticketImage = document.getElementById("ticket-image");
const table = document.getElementById("table");
function loadTicket() {
    // Hides the hint and shows the ticket image
    hint.style.display = "none";
    ticketImage.style.display = "block";

    // Creates the symbols for the ticket
    // Make the <img>
    const ticketBox0 = document.createElement("img");
    ticketBox0.id = "symbol-0";
    
    // Set which picture it shows
    generateSymbol(ticketBox0);

    // Puts scratch off cover over the symbol
    const ticketBox0Cover = document.createElement("img");
    ticketBox0Cover.id = "symbol-0-cover";
    ticketBox0Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox0Cover.alt = "Scratch off cover";

    // 3. Put it inside an element on the page
    table.append(ticketBox0);
    table.append(ticketBox0Cover);
}

// Function to pick a random symbol for the ticket
function generateSymbol(box) {
    // Picks a random number from 1 to 6 which corresponds to a symbol
    let symbol = Math.floor(Math.random() * 6) + 1
   switch (symbol) {
        case 1:
            box.src = "assets/ScratchOffAssets/symbol_cactus.png";
            box.alt = "Cactus symbol";
            numOfSymbols[0]++;
            break;
        case 2:
            box.src = "assets/ScratchOffAssets/symbol_hat.png";
            box.alt = "Hat symbol";
            numOfSymbols[1]++;
            break;
        case 3:
            box.src = "assets/ScratchOffAssets/symbol_horseshoe.png";
            box.alt = "Horseshoe symbol";
            numOfSymbols[2]++;
            break;
        case 4:
            box.src = "assets/ScratchOffAssets/symbol_moneybag.png";
            box.alt = "Money Bag symbol";
            numOfSymbols[3]++;
            break;
        case 5:
            box.src = "assets/ScratchOffAssets/symbol_nugget.png";
            box.alt = "Nugget symbol";
            numOfSymbols[4]++;
            break;
        case 6:
            box.src = "assets/ScratchOffAssets/symbol_star.png";
            box.alt = "Star symbol";
            numOfSymbols[5]++;
            break;
    }
}