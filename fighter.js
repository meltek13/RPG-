class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, name = "Grace", status = "playing") {
    super(hp, dmg, mana);
    this.status = status;
    this.name = name;
  }
}
let GraceTheFighter = new Fighter();
