const moneyBox = document.getElementById("money");
// Array to keep track of the number of each symbol
// [cactus, hat, horseshoe, money bag, nugget, star]
const numOfSymbols = [0, 0, 0, 0, 0, 0]; 
const symbolNames = ["Cactuses", "Hats", "Horseshoes", "Money Bags", "Nuggets", "Stars"];
let boxesScratched = 0;

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
    ticketBox0.className = "cover";

    const ticketBox1 = document.createElement("img");
    ticketBox1.id = "symbol-1";

    const ticketBox2 = document.createElement("img");
    ticketBox2.id = "symbol-2";

    const ticketBox3 = document.createElement("img");
    ticketBox3.id = "symbol-3";

    const ticketBox4 = document.createElement("img");
    ticketBox4.id = "symbol-4";

    const ticketBox5 = document.createElement("img");
    ticketBox5.id = "symbol-5";

    const ticketBox6 = document.createElement("img");
    ticketBox6.id = "symbol-6";

    const ticketBox7 = document.createElement("img");
    ticketBox7.id = "symbol-7";

    const ticketBox8 = document.createElement("img");
    ticketBox8.id = "symbol-8";
    
    // Set which picture it shows
    generateSymbol(ticketBox0);
    generateSymbol(ticketBox1);
    generateSymbol(ticketBox2);
    generateSymbol(ticketBox3);
    generateSymbol(ticketBox4);
    generateSymbol(ticketBox5);
    generateSymbol(ticketBox6);
    generateSymbol(ticketBox7);
    generateSymbol(ticketBox8);

    // Puts scratch off cover over the symbol
    // Box 0
    const ticketBox0Cover = document.createElement("img");
    ticketBox0Cover.id = "symbol-0-cover";
    ticketBox0Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox0Cover.alt = "Scratch off cover";

    // Box 1
    const ticketBox1Cover = document.createElement("img");
    ticketBox1Cover.id = "symbol-1-cover";
    ticketBox1Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox1Cover.alt = "Scratch off cover";

    // Box 2
    const ticketBox2Cover = document.createElement("img");
    ticketBox2Cover.id = "symbol-2-cover";
    ticketBox2Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox2Cover.alt = "Scratch off cover";

    // Box 3
    const ticketBox3Cover = document.createElement("img");
    ticketBox3Cover.id = "symbol-3-cover";
    ticketBox3Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox3Cover.alt = "Scratch off cover";

    // Box 4
    const ticketBox4Cover = document.createElement("img");
    ticketBox4Cover.id = "symbol-4-cover";
    ticketBox4Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox4Cover.alt = "Scratch off cover";

    // Box 5
    const ticketBox5Cover = document.createElement("img");
    ticketBox5Cover.id = "symbol-5-cover";
    ticketBox5Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox5Cover.alt = "Scratch off cover";

    // Box 6
    const ticketBox6Cover = document.createElement("img");
    ticketBox6Cover.id = "symbol-6-cover";
    ticketBox6Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox6Cover.alt = "Scratch off cover";

    // Box 7
    const ticketBox7Cover = document.createElement("img");
    ticketBox7Cover.id = "symbol-7-cover";
    ticketBox7Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox7Cover.alt = "Scratch off cover";

    // Box 8
    const ticketBox8Cover = document.createElement("img");
    ticketBox8Cover.id = "symbol-8-cover";
    ticketBox8Cover.src = "assets/ScratchOffAssets/scratch_cover.png";
    ticketBox8Cover.alt = "Scratch off cover";
    

    // 3. Put it inside an element on the page
    table.append(ticketBox0);
    table.append(ticketBox0Cover);
    table.append(ticketBox1);
    table.append(ticketBox1Cover);
    table.append(ticketBox2);
    table.append(ticketBox2Cover);
    table.append(ticketBox3);
    table.append(ticketBox3Cover);
    table.append(ticketBox4);
    table.append(ticketBox4Cover);
    table.append(ticketBox5);
    table.append(ticketBox5Cover);
    table.append(ticketBox6);
    table.append(ticketBox6Cover);
    table.append(ticketBox7);
    table.append(ticketBox7Cover);
    table.append(ticketBox8);
    table.append(ticketBox8Cover);
    console.log(numOfSymbols);

    //"Scratching" the ticket
    ticketBox0Cover.addEventListener("click", function () {
        ticketBox0Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox1Cover.addEventListener("click", function () {
        ticketBox1Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox2Cover.addEventListener("click", function () {
        ticketBox2Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox3Cover.addEventListener("click", function () {
        ticketBox3Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox4Cover.addEventListener("click", function () {
        ticketBox4Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox5Cover.addEventListener("click", function () {
        ticketBox5Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox6Cover.addEventListener("click", function () {
        ticketBox6Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox7Cover.addEventListener("click", function () {
        ticketBox7Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });

    ticketBox8Cover.addEventListener("click", function () {
        ticketBox8Cover.remove();
        console.log("You scratched a box!");
        boxesScratched = boxesScratched + 1;
        console.log(boxesScratched);
        checkForWin();
    });
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

// Function that checks if all boxes have been scratched. If all have been scratched it checks if the user won.
function checkForWin(){
    if (boxesScratched === 9) {
        let check3 = numOfSymbols.indexOf(3)
        let check4 = numOfSymbols.indexOf(4)
        let check5 = numOfSymbols.indexOf(5)
        let check6 = numOfSymbols.indexOf(6)
        let check7 = numOfSymbols.indexOf(7)
        let check8 = numOfSymbols.indexOf(8)
        let check9 = numOfSymbols.indexOf(9)

        if (check9 != -1){
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 100;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check8 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 65;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check7 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 55;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check6 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 45;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check5 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 25;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check4 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 15;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else if (check3 != -1) {
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);

            // Add wins to players account
            player.money += 10;

            // Save the data locally and show updated balance
            savePlayer();
            showMoney();
        } else {
            // SECTION TO PUT THE WON NOTHING -> Work in progress...
            // Wait 3 seconds before deleting ticket
            setTimeout(function () {
                deleteTicket();
            }, 3000);
        }
        // Reset the count of how many symbols are currently on the ticket
        clearNumOfSymbols();
        boxesScratched = 0;
    }
  
}

// Deletes all the created images, hides the base ticket, and then displays the text on the table again
function deleteTicket(){
    
    for (let i = 0; i < 9; i++) {
        const symbol = document.getElementById("symbol-" + i);
        const cover = document.getElementById("symbol-" + i + "-cover");

        if (symbol) {
            symbol.remove();
        }
        if (cover) {
            cover.remove();
        }
    }

    // Remove Base Tickect
    hint.style.display = "block";
    ticketImage.style.display = "none";
}

// Resets the numOfSymbols array so that each ticket starts with a fresh count of active symbols
function clearNumOfSymbols(){
    for (let i = 0; i < 6; i++){
        numOfSymbols[i] = 0;
    }
}