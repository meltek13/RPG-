class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, name = "Draven", status = "playing") {
    super(hp, dmg, mana);
    this.status = status;
    this.name = name;
  }
}
const DravenTheBerzerker = new Berzerker();
