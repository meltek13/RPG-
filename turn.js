class Turn {
  constructor(characters, alive_player, player) {
    this.characters = characters;
    this.alivePlayer = this.characters.filter(
      (player) => player.status === "playing"
    );
    this.player = this.alivePlayer.forEach((player) => {
      if (player.status !== "dead") {
        this.startTurn(player);
        this.attack(player);
      }
    });
  }
  startTurn = (player) => {
    console.log(
      `⚔️⚔️⚔️ ${player.name} à toi de jouer, choisis qui tu veux attaquer !! `
    );
  };

  attack = (player) => {
    const whoAttack = prompt(
      `${player.name} qui veux tu attaquer ? choisis un numero \n 0: Grace \n 1: Ulder \n 2: Carl \n 3: Moana \n 4: Draven \n 5: Voir Stats`
    );

    switch (whoAttack) {
      case "0":
        if (player.name === this.characters[0].name) {
          console.log("___________________");
          console.log(
            "T'es completement ZINZIN de t'attaquer toi même, t'es sadique hmmm ça m'excite"
          );
          console.log("allez recommence");
          this.attack(player);
        } else if (this.characters[0].status === "dead") {
          console.log("___________________");
          console.log(
            "waoou t'es vraiment dégueu de d'attaquer à un mort, tu me degoutes"
          );
          console.log("allez recommence");
          console.log("___________________");
          this.attack(player);
        } else {
          console.log(
            `⚔️⚔️⚔️ ${player.name} décide d'attaquer ${this.characters[0].name}`
          );
          return player.dealDamage(this.characters[0]);
        }
        break;
      case "1":
        if (player.name === this.characters[1].name) {
          console.log("___________________");
          console.log(
            "T'es completement ZINZIN de t'attaquer toi même, t'es sadique hmmm ça m'excite"
          );
          console.log("allez recommence");
          this.attack(player);
        } else if (this.characters[1].status === "dead") {
          console.log("___________________");
          console.log(
            "waoou t'es vraiment dégueu de d'attaquer à un mort, tu me degoutes"
          );
          console.log("allez recommence");
          console.log("___________________");
          this.attack(player);
        } else {
          console.log(
            `⚔️⚔️⚔️ ${player.name} décide d'attaquer ${this.characters[1].name}`
          );
          return player.dealDamage(this.characters[1]);
        }
        break;
      case "2":
        if (player.name === this.characters[2].name) {
          console.log("___________________");
          console.log(
            "T'es completement ZINZIN de t'attaquer toi même, t'es sadique hmmm ça m'excite"
          );
          console.log("allez recommence");
          this.attack(player);
        } else if (this.characters[2].status === "dead") {
          console.log("___________________");
          console.log(
            "waoou t'es vraiment dégueu de d'attaquer à un mort, tu me degoutes"
          );
          console.log("allez recommence");
          console.log("___________________");
          this.attack(player);
        } else {
          console.log(
            `⚔️⚔️⚔️ ${player.name} décide d'attaquer ${this.characters[2].name}`
          );
          return player.dealDamage(this.characters[2]);
        }
        break;
      case "3":
        if (player.name === this.characters[3].name) {
          console.log("___________________");
          console.log(
            "T'es completement ZINZIN de t'attaquer toi même, t'es sadique hmmm ça m'excite"
          );
          console.log("allez recommence");
          this.attack(player);
        } else if (this.characters[3].status === "dead") {
          console.log("___________________");
          console.log(
            "waoou t'es vraiment dégueu de d'attaquer à un mort, tu me degoutes"
          );
          console.log("allez recommence");
          console.log("___________________");
          this.attack(player);
        } else {
          console.log(
            `⚔️⚔️⚔️ ${player.name} décide d'attaquer ${this.characters[3].name}`
          );
          return player.dealDamage(this.characters[3]);
        }
        break;
      case "4":
        if (player.name === this.characters[4].name) {
          console.log("___________________");
          console.log(
            "T'es completement ZINZIN de t'attaquer toi même, t'es sadique hmmm ça m'excite"
          );
          console.log("allez recommence");
          this.attack(player);
        } else if (this.characters[4].status === "dead") {
          console.log("___________________");
          console.log(
            "⚔️⚔️⚔️ waoou t'es vraiment dégueu de d'attaquer à un mort, tu me degoutes"
          );
          console.log("allez recommence");
          console.log("___________________");
          this.attack(player);
        } else {
          console.log(
            `${player.name} décide d'attaquer ${this.characters[4].name}`
          );
          return player.dealDamage(this.characters[4]);
        }
        break;
      case "5":
        console.clear();
        this.characters.forEach((x, y) => {
          if (x.status === "playing")
            console.log(
              y +
                "/ " +
                x.name +
                " : " +
                x.hp +
                "💙" +
                " " +
                x.mana +
                "🔋" +
                " " +
                x.dmg +
                "💥"
            );
          else console.log(y + "/ " + x.name + " : DEAD ☠️☠️☠️☠️");
        });

        this.attack(player);
        break;
      default:
        console.log("je n'ai pas compris ta réponse( choisis 0, 1, 2, 3 ou 4 ");
        this.attack(player);
        break;
    }
  };
}
