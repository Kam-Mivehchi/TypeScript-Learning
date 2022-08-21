class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    let playerName = getInput('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}
function logPlayer(name = "MultiMatch Player") {
    console.log(`New game starting for player: ${name}`);
}
function getInput(elementId) {
    let input = document.getElementById(elementId);
    console.log(input.value);
    return (input.value === '' ? undefined : input.value);
}
const logMessage = (message) => console.log(message);
const logError = (err) => console.log(err);
function postScore(score, name = "MultiMath Player") {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    let scoreEl = document.getElementById('display_score');
    scoreEl.textContent = `${score}-${name}`;
    logger(`Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
let myResult = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};
let player = {
    name: 'Daniel',
    formatName: () => 'Dan'
};
const firstPlayer = new Player();
firstPlayer.name = "Donny";
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map