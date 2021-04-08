class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, name = "Carl", status = "playing") {
    super(hp, dmg, mana);
    this.status = status;
    this.name = name;
  }
}
const CarlTheAssassin = new Assassin();
