class Character {
  constructor(type, hotness, talent, finances) {
    this.type = type;
    this.hotness = hotness;
    this.talent = talent;
    this.esteem = 5;
    this.finances = finances;
    this.exp = 0;
    this.fame = 0;
    this.inv = [];
  }

  levelCalc() {
    if (this.exp >= 20) {
      this.fame = 1;
    }
  }
}

export { Character };
