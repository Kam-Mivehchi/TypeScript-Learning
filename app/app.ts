/// <reference path="player.ts"/>
/// <reference path="result.ts"/>

function startGame(): void {
    let playerName: string | undefined = getInput('playername');
    // getPlayerName(playerName)
    // playerName = getPlayerName('#playerName')
    logPlayer(playerName)
    postScore(100, playerName)
    postScore(-5, playerName)
    // let messagesElement = document.getElementById('messages');
    // messagesElement!.innerText = 'Welcome to MultiMatch! Starting a new game...'


    // if (typeof messagesElement === 'string') {
    //     return messagesElement
    // } else if (typeof messagesElement === null) {
    //     return messagesElement;
    // } else {
    //     messagesElement!.innerText = 'Welcome to MultiMatch! Starting a new game...'
    //     return messagesElement;
    // }
}

function logPlayer(name: string = "MultiMatch Player"): void {
    console.log(`New game starting for player: ${name}`);
}

// get player name from input
//input: element id
//output: player name string or undefined

function getInput(elementId: string): string | undefined {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
    console.log(input.value)
    return (input.value === '' ? undefined : input.value)
}
// getPlayerName('#playerName')
//default values automatically make it optional
const logMessage = (message: string): void => console.log(message);
const logError = (err: string): void => console.log(err);
function postScore(score: number, name: string = "MultiMath Player"): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    let scoreEl: HTMLElement | null = document.getElementById('display_score')
    scoreEl!.textContent = `${score}-${name}`

    logger(`Score: ${score}`)
}


document.getElementById('startGame')!.addEventListener('click', startGame);


let myResult: Result = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};

let player: Person = {
    name: 'Daniel',
    formatName: () => 'Dan'
};


const firstPlayer: Player = new Player()
firstPlayer.name = "Donny";
console.log(firstPlayer.formatName())
