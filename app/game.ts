///  <reference path="utility.ts"/>
///  <reference path="result.ts"/>
///  <reference path="player.ts"/>
///  <reference path="scoreboard.ts"/>


class Game {
   private scoreboard: Scoreboard = new Scoreboard();
   // player: Player; not needed bc of public

   //parameter properties
   constructor(public player: Player, public numOfProblems: number, public multFactor: number) {

   }

   displayGame(): void {
      //create the html for the current gme

      let gameForm: string = '';

      for (let i = 1; i <= this.problemCount; i++) {
         gameForm += '<div class="form-group">'
         gameForm += '<label for="answer"' + i + '" class="col-sm-1 control label">'
         gameForm += String(this.factor) + ' x ' + i + ' =</label>'
         gameForm += '<div class="col-sm-1"><input type="text"class="form-control" id="answer' + i + '"size="5"/></div>'
         gameForm += '</div>'
      }

      const gameElement: HTMLElement = document.getElementById('game')!;
      gameElement.innerHTML = gameForm;

      document.getElementById('calculate')!.removeAttribute('disabled')
   }
}