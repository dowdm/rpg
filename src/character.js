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
    if (this.exp >= 100) {
      this.fame = 5;
    } else if (this.exp >= 80 && this.exp < 100) {
      this.fame = 4;
    } else if (this.exp >= 60 && this.exp < 80) {
      this.fame = 3;
    } else if (this.exp >= 40 && this.exp < 60) {
      this.fame = 2;
    } else if (this.exp >= 20 && this.exp < 40) {
      this.fame = 1;
    } else if (this.exp >= 0 && this.exp < 20) {
      this.fame = 0;
    }
  }
}

export { Character };
