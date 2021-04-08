class Character {
  constructor(hp, dmg, mana) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
  }
  dealDamage = (victim) => {
    console.log("⚔️⚔️⚔️ Choisis ton attaque (basique ou speciale)");
    if (this.name === "Grace") {
      const competence = prompt(
        `${this.name}  ♥️:${this.hp}  MANA:${this.mana} \nQuelle action souhaite tu effectuer ? \n a) attaque basique : inflige 4 points de degats \n b) Dark Vision 🔥: inflige 5 points de degats. Elle coute 20 de mana.  `
      );
      switch (competence) {
        case "a":
          console.log(
            `⚔️⚔️⚔️ ${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
          );

          return victim.takeBasicDamage(this.dmg);

          break;
        case "b":
          console.log(
            `⚔️⚔️⚔️ ${this.name} utilise son attaque speciale Dark Vision, inflige 5 point de degats et depense 20 de mana`
          );

          return victim.takeSpecialDamage(this);
          break;

        default:
          console.log("je n'ai pas compris ta réponse( choisis a ou b )");
          this.dealDamage(victim);
          break;
      }
    } else if (this.name === "Ulder") {
      const competence = prompt(
        `${this.name}  ♥️:${this.hp}  MANA:${this.mana} \nQuelle action souhaite tu effectuer ? \n a) attaque basique : inflige 3 points de degats \n b) Healing Lighting 🔥: inflige 4 de dégâts et te soigne de 5. Elle coute 40 de mana.  `
      );
      switch (competence) {
        case "a":
          console.log(
            `⚔️⚔️⚔️ ${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
          );

          return victim.takeBasicDamage(this.dmg);

          break;
        case "b":
          console.log(
            `⚔️⚔️⚔️ ${this.name} utilise son attaque speciale Healing Lighting, inflige 4 points de degats, se régènere de 5HP et dépense 40 de mana `
          );

          return victim.takeSpecialDamage(this);
          break;

        default:
          console.log("je n'ai pas compris ta réponse( choisis a ou b )");
          this.dealDamage(victim);
          break;
      }
    } else if (this.name === "Moana") {
      const competence = prompt(
        `${this.name}  ♥️:${this.hp}  MANA:${this.mana} \nQuelle action souhaite tu effectuer ? \n a) attaque basique : inflige 2 points de degats \n b) Heal 🔥: te rend 8 PV. Elle coute 25 de mana.  `
      );
      switch (competence) {
        case "a":
          console.log(
            `⚔️⚔️⚔️ ${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
          );

          return victim.takeBasicDamage(this.dmg);

          break;
        case "b":
          console.log(
            `⚔️⚔️⚔️ ${this.name} utilise son pouvoir special Heal, se régènere de 8HP et dépense 25 de mana `
          );

          return victim.takeSpecialDamage(this);
          break;

        default:
          console.log("je n'ai pas compris ta réponse( choisis a ou b )");
          this.dealDamage(victim);
          break;
      }
    } else if (this.name === "Draven") {
      const competence = prompt(
        `${this.name}  ♥️:${this.hp}  MANA:${this.mana} \nQuelle action souhaite tu effectuer ? \n a) attaque basique : inflige 4 points de degat \n b) Rage 🔥: augmente tes degats de 1 pour tout le reste de la partie mais t'enleve 1 hp. Elle coûte 0 mana  `
      );
      switch (competence) {
        case "a":
          console.log(
            `⚔️⚔️⚔️ ${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
          );

          return victim.takeBasicDamage(this.dmg);

          break;
        case "b":
          console.log(
            `⚔️⚔️⚔️ ${this.name} utilise son attaque speciale Rage, ses degats augmente de 1 pour le reste de la partie.`
          );

          return victim.takeSpecialDamage(this);
          break;

        default:
          console.log("je n'ai pas compris ta réponse( choisis a ou b )");
          this.dealDamage(victim);
          break;
      }
    } else if (this.name === "Carl") {
      const competence = prompt(
        `${this.name}  ♥️:${this.hp}  MANA:${this.mana} \nQuelle action souhaite tu effectuer ? \n a) attaque basique : inflige 6 points de degats \n b) Shadow hit 🔥: inflige 7 points  de dégâts. Elle coute 20 de mana.  `
      );
      switch (competence) {
        case "a":
          console.log(
            `⚔️⚔️⚔️ ${this.name} inflige ${this.dmg} points de degats avec son attaque de base`
          );

          return victim.takeBasicDamage(this.dmg);

          break;
        case "b":
          console.log(
            ` ⚔️⚔️⚔️${this.name} utilise son attaque speciale Shadow Hit, inflige 7 points de degats et dépense 20 de mana`
          );

          return victim.takeSpecialDamage(this);
          break;

        default:
          console.log("je n'ai pas compris ta réponse( choisis a ou b )");
          this.dealDamage(victim);
          break;
      }
    }
  };

  takeBasicDamage = (dmg) => {
    this.hp -= dmg;
    console.log(`${this.name} à desormais ${this.hp} points de vie`);
    this.isKilled();
  };

  takeSpecialDamage = (fighter) => {
    if (fighter.name == "Grace") {
      fighter.mana -= 20;
      if (fighter.mana >= 0) {
        this.hp -= fighter.dmg + 1;
        console.log(`${this.name} à desormais ${this.hp} points de vie`);
        this.isKilled();
      } else {
        console.log(
          "Mais malheuresement tu n'as pas assez de mana, choisie une autre attaque"
        );
        fighter.mana += 20;
        fighter.dealDamage(this);
      }
    }
    if (fighter.name == "Ulder") {
      fighter.mana -= 40;
      if (fighter.mana >= 0) {
        fighter.hp += 5;
        this.hp -= fighter.dmg + 1;
        console.log(`${this.name} à desormais ${this.hp} points de vie`);
        this.isKilled();
      } else {
        console.log(
          "Mais malheuresement tu n'as pas assez de mana, choisie une autre attaque"
        );
        fighter.mana += 40;
        fighter.dealDamage(this);
      }
    }
    if (fighter.name == "Moana") {
      fighter.mana -= 25;
      if (fighter.mana >= 0) {
        fighter.hp += 8;
        console.log(
          `Waaaou what the heal, tu as desormais ${fighter.hp}points de vie`
        );
      } else {
        console.log(
          "Mais malheuresement tu n'as pas assez de mana, choisie une autre attaque"
        );
        fighter.mana += 25;
        fighter.dealDamage(this);
      }
    }
    if (fighter.name == "Draven") {
      fighter.hp -= 1;
      fighter.dmg += 1;
      console.log(
        `rien ne peut t'arreter tes dommages augemente, tu dispose desormais de ${fighter.dmg} points de damage`
      );
    }
    if (fighter.name == "Carl") {
      fighter.mana -= 20;
      if (fighter.mana >= 0) {
        this.hp -= fighter.dmg + 1;
        console.log(`${this.name} à desormais ${this.hp} points de vie`);
        this.isKilled();
      } else {
        console.log(
          "Mais malheuresement tu n'as pas assez de mana, choisie une autre attaque"
        );
        fighter.mana += 20;
        fighter.dealDamage(this);
      }
    }
  };

  isKilled = () => {
    if (this.hp <= 0) {
      this.status = "dead";
      console.log(`${this.name} est mort, RIP 🧟‍♂️🧟‍♂️🧟‍♂️`);
    }
  };
}
