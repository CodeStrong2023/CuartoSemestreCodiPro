let playerLives = 3;
let enemyLives = 3;
let selectedCharacter = '';

const attacks = ["puño", "patada", "barrida"];

function showRules() {
    document.getElementById("rules-modal").style.display = "flex";
}

function closeRules() {
    document.getElementById("rules-modal").style.display = "none";
}

function selectCharacter(character) {
    selectedCharacter = character;
    document.getElementById("player-name").textContent = `Jugador: ${character}`;
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("battle-area").style.display = "block";
    updateLives();
}

function attack(playerAttack) {
    const enemyAttack = getEnemyAttack();
    const feedbackEl = document.getElementById("feedback");

    feedbackEl.textContent = `Elegiste ${playerAttack}. El enemigo eligió ${enemyAttack}.`;
    feedbackEl.classList.add("animated-text");

    if (playerAttack === enemyAttack) {
        feedbackEl.textContent += " ¡Es un empate!";
        feedbackEl.style.color = "gray";
    } else {
        if (didPlayerWin(playerAttack, enemyAttack)) {
            feedbackEl.textContent += " ¡Ganaste este round!";
            feedbackEl.style.color = "green";
            enemyLives--;
        } else {
            feedbackEl.textContent += " El enemigo gana este round.";
            feedbackEl.style.color = "red";
            playerLives--;
        }
        updateLives();
    }

    checkGameOver();
}

function getEnemyAttack() {
    const randomIndex = Math.floor(Math.random() * attacks.length);
    return attacks[randomIndex];
}

function didPlayerWin(playerAttack, enemyAttack) {
    return (
        (playerAttack === "puño" && enemyAttack === "barrida") ||
        (playerAttack === "patada" && enemyAttack === "puño") ||
        (playerAttack === "barrida" && enemyAttack === "patada")
    );
}

function updateLives() {
    const playerLivesEl = document.getElementById("player-lives");
    const enemyLivesEl = document.getElementById("enemy-lives");

    playerLivesEl.innerHTML = "❤️".repeat(playerLives);
    enemyLivesEl.innerHTML = "❤️".repeat(enemyLives);
}

function checkGameOver() {
    const resultEl = document.getElementById("result");
    const restartBtn = document.getElementById("restart-btn");
    const celebrationDiv = document.getElementById("celebration");
    const winSound = document.getElementById("win-sound");

    resultEl.classList.add("animated-text");

    if (playerLives === 0) {
        resultEl.textContent = "Has sido derrotado.";
        disableButtons();
        restartBtn.style.display = "block";
    } else if (enemyLives === 0) {
        resultEl.textContent = "¡Has ganado!";
        celebrationDiv.style.display = "block";
        winSound.play();
        disableButtons();
        restartBtn.style.display = "block";
    }
}

function disableButtons() {
    const buttons = document.getElementsByClassName("attack-btn");
    for (let btn of buttons) {
        btn.disabled = true;
        btn.style.opacity = "0.5";
    }
}

function restartGame() {
    playerLives = 3;
    enemyLives = 3;
    selectedCharacter = '';
    document.getElementById("feedback").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("celebration").style.display = "none";
    updateLives();

    const buttons = document.getElementsByClassName("attack-btn");
    for (let btn of buttons) {
        btn.disabled = false;
        btn.style.opacity = "1";
    }

    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("character-selection").style.display = "block";
    document.getElementById("battle-area").style.display = "none";
}

window.onload = updateLives;
