class Monk extends Character {
  constructor(hp = 8, dmg = 3, mana = 160, name = "Moana", status = "playing") {
    super(hp, dmg, mana);
    this.status = status;
    this.name = name;
  }
}
const MoanaTheMonk = new Monk();
