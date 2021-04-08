class Game {
  constructor(turnLeft) {
    this.turnLeft = turnLeft;
    this.characters = [
      GraceTheFighter,
      UlderThePaladin,
      CarlTheAssassin,
      MoanaTheMonk,
      DravenTheBerzerker,
    ];
  }
  newTurn = () => {
    while (this.turnLeft < 5) {
      console.clear();
      console.log("___________________");
      console.log(` Tour ${this.turnLeft}`);

      let turn = new Turn(this.characters);
      this.turnLeft += 1;
    }
    console.log("🕶️🕶️ ======== Score Final ======== 🕶️🕶️");
    console.log(
      "Le combat etait rude mais bravo à nos champions qui sont encore debout :"
    );
    this.characters.forEach((player) => {
      if (player.status === "playing")
        console.log(
          `bravo ${player.name} tu finis la partie avec ${player.hp} points de vie`
        );
    });
  };
}

console.log("****🪓*****⚔️******🏹******🗡️****⚒️***********");
console.log("*⚔️*******Bienvenue sur notre jeu ***🏹******");
console.log("🗡️**** Seul les plus fort survivront  ***🗡️*");
console.log("******🪓*****⚔*********🏹********🗡️****⚒️****");
