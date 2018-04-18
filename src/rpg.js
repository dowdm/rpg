export class Character {
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

export function audition(charObj) {
  if (charObj.talent >= 5 || charObj.talent + (charObj.hotness / 2) >= 5) {
    charObj.finances += 50;
    charObj.exp += 3;
    charObj.esteem += 2;
  } else {
    charObj.finances -= 10;
    charObj.exp += 1;
    charObj.esteem -= 1;
  }
  charObj.levelCalc();
}
