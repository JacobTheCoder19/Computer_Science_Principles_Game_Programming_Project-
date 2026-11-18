
        // =========================
        // GAME VARIABLES
        // =========================

        let coins = player.money
        let bet = 10;
        let spinning = false;
        let gameEnded = false;

        // PNG SYMBOL FILES

        const symbols = [
            "images/cowboy.png",
            "images/star.png",
            "images/cactus.png",
            "images/money.png",
            "images/horse.png",
            "images/bell.png"
        ];

        let reelResults = [
            "images/cowboy.png",
            "images/star.png",
            "images/cactus.png"
        ];

        // =========================
        // HTML ELEMENTS
        // =========================

        const coinDisplay = document.getElementById("coins");
        const betDisplay = document.getElementById("betAmount");
        const message = document.getElementById("message");

        const spinButton = document.getElementById("spinButton");
        const increaseBetButton = document.getElementById("increaseBet");
        const decreaseBetButton = document.getElementById("decreaseBet");

        const gameOverScreen = document.getElementById("gameOver");
        const finalBalance = document.getElementById("finalBalance");
        const playAgainButton = document.getElementById("playAgain");

        const reels = [
            document.getElementById("reel1"),
            document.getElementById("reel2"),
            document.getElementById("reel3")
        ];

        // =========================
        // UPDATE DISPLAY
        // =========================

        function updateDisplay() {

            coinDisplay.textContent = coins;
            betDisplay.textContent = bet;

            increaseBetButton.disabled =
                spinning || gameEnded || bet + 10 > coins;

            decreaseBetButton.disabled =
                spinning || gameEnded || bet <= 10;

            spinButton.disabled =
                spinning || gameEnded || coins < bet;
        }

        // =========================
        // RANDOM SYMBOL
        // =========================

        function randomSymbol() {

            const randomIndex = Math.floor(
                Math.random() * symbols.length
            );

            return symbols[randomIndex];
        }

        // =========================
        // CHANGE BET
        // =========================

        function changeBet(direction) {

            if (spinning || gameEnded) return;

            if (direction === 1 && bet + 10 <= coins) {
                bet += 10;
            }

            if (direction === -1 && bet > 10) {
                bet -= 10;
            }

            updateDisplay();
        }

        // =========================
        // HOLD-TO-CHANGE BET
        // =========================

        let betHoldTimer = null;
        let betHoldDirection = 0;
        let betHoldStart = 0;

        function stopBetHold() {

            clearTimeout(betHoldTimer);

            betHoldTimer = null;
            betHoldDirection = 0;
        }

        function continueBetHold() {

            if (betHoldDirection === 0) return;

            const button = betHoldDirection === 1
                ? increaseBetButton
                : decreaseBetButton;

            if (button.disabled) {
                stopBetHold();
                return;
            }

            const heldTime = Date.now() - betHoldStart;

            // ACCELERATE THE LONGER THE BUTTON IS HELD

            let delay;

            if (heldTime < 1000) {
                delay = 350;
            } else if (heldTime < 2000) {
                delay = 200;
            } else if (heldTime < 3000) {
                delay = 120;
            } else {
                delay = 35;
            }

            betHoldTimer = setTimeout(function() {

                if (betHoldDirection === 0) return;

                changeBet(betHoldDirection);

                continueBetHold();

            }, delay);
        }

        function startBetHold(direction, button) {

            if (spinning || gameEnded || button.disabled) return;

            stopBetHold();

            betHoldDirection = direction;
            betHoldStart = Date.now();

            // CHANGE BET IMMEDIATELY

            changeBet(direction);

            // KEEP CHANGING WHILE HELD

            continueBetHold();
        }

        // PLUS BUTTON

        increaseBetButton.addEventListener("pointerdown", function(event) {

            event.preventDefault();

            increaseBetButton.setPointerCapture(event.pointerId);

            startBetHold(1, increaseBetButton);

        });

        // MINUS BUTTON

        decreaseBetButton.addEventListener("pointerdown", function(event) {

            event.preventDefault();

            decreaseBetButton.setPointerCapture(event.pointerId);

            startBetHold(-1, decreaseBetButton);

        });

        // STOP WHEN RELEASED

        increaseBetButton.addEventListener("pointerup", stopBetHold);
        decreaseBetButton.addEventListener("pointerup", stopBetHold);

        increaseBetButton.addEventListener("pointercancel", stopBetHold);
        decreaseBetButton.addEventListener("pointercancel", stopBetHold);

        increaseBetButton.addEventListener("lostpointercapture", stopBetHold);
        decreaseBetButton.addEventListener("lostpointercapture", stopBetHold);

        // KEYBOARD SUPPORT

        increaseBetButton.addEventListener("click", function(event) {
            if (event.detail === 0) changeBet(1);
        });

        decreaseBetButton.addEventListener("click", function(event) {
            if (event.detail === 0) changeBet(-1);
        });

        // STOP IF WINDOW LOSES FOCUS

        window.addEventListener("blur", stopBetHold);

        // =========================
        // SPIN THE REELS
        // =========================

        spinButton.addEventListener("click", spin);

        function spin() {

            if (spinning || gameEnded || coins < bet) {
                return;
            }

            stopBetHold();

            spinning = true;

            // DEDUCT THE BET

            coins -= bet;

            message.textContent = "GOOD LUCK, PARTNER!";

            updateDisplay();

            let ticks = 0;
            const maxTicks = 15;

            // REEL ANIMATION

            const spinInterval = setInterval(function() {

                for (let i = 0; i < reels.length; i++) {

                    const symbol = randomSymbol();

                    reels[i].src = symbol;
                    reelResults[i] = symbol;

                }

                ticks++;

                if (ticks >= maxTicks) {

                    clearInterval(spinInterval);

                    finishSpin();

                }

            }, 100);

        }

        // =========================
        // CHECK WINNING COMBINATIONS
        // =========================

        function finishSpin() {

            spinning = false;

            const first = reelResults[0];
            const second = reelResults[1];
            const third = reelResults[2];

            // THREE MATCHING SYMBOLS

            if (first === second && second === third) {

                const winnings = bet * 10;

                coins += winnings;
                player.money = coins;
                savePlayer();


                message.textContent =
                    "JACKPOT! THREE MATCHING SYMBOLS! YOU WON " +
                    winnings + " COINS!";

            }

            // TWO MATCHING SYMBOLS

            else if (
                first === second ||
                first === third ||
                second === third
            ) {

                const winnings = bet * 3;

                coins += winnings;
                player.money = coins;
                savePlayer();
                message.textContent =
                    "NICE ONE, PARTNER! TWO MATCHING SYMBOLS! YOU WON " +
                    winnings + " COINS!";

            }

            // NO MATCH

            else {

                message.textContent =
                    "NO MATCH THIS TIME. BETTER LUCK NEXT TIME!";

            }
            player.money = coins;
            savePlayer();
            updateDisplay();

            // GAME OVER IF BELOW MINIMUM BET

            if (coins < 10) {

                setTimeout(function() {
                    showGameOver();
                }, 800);

            }

        }

        // =========================
        // GAME OVER
        // =========================

        function showGameOver() {

            gameEnded = true;

            finalBalance.textContent = coins;

            gameOverScreen.style.display = "flex";

            updateDisplay();

        }

        // =========================
        // PLAY AGAIN
        // =========================

        playAgainButton.addEventListener("click", function() {

            stopBetHold();

            coins = 100;
            bet = 10;

            spinning = false;
            gameEnded = false;

            reelResults = [
                "images/cowboy.png",
                "images/star.png",
                "images/cactus.png"
            ];

            // RESET REEL IMAGES

            for (let i = 0; i < reels.length; i++) {
                reels[i].src = reelResults[i];
            }

            // RESET MESSAGE

            message.textContent = "STEP RIGHT UP, PARTNER!";

            // HIDE GAME OVER SCREEN

            gameOverScreen.style.display = "none";

            updateDisplay();

        });

        // =========================
        // START GAME
        // =========================

        updateDisplay();