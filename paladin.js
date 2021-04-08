class Paladin extends Character {
  constructor(
    hp = 16,
    dmg = 3,
    mana = 160,
    name = "Ulder",
    status = "playing"
  ) {
    super(hp, dmg, mana);
    this.status = status;
    this.name = name;
  }
}
const UlderThePaladin = new Paladin();
