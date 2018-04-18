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

export function performance(charObj) {
  if (charObj.talent >= 8 || charObj.talent + (charObj.hotness / 3) >= 8) {
    charObj.finances += 100;
    charObj.exp += 10;
    charObj.esteem += 10;
  } else {
    charObj.finances -= 100;
    charObj.exp -= 1;
    charObj.esteem -= 10;
  }
  charObj.levelCalc();
}

export function awards(charObj) {
  if (charObj.hotness >= 8 || charObj.hotness + (charObj.talent / 2) >= 5) {
    charObj.finances += 300;
    charObj.exp += 30;
    charObj.esteem += 20;
  } else {
    charObj.finances -= 100;
    charObj.exp += 30;
  }
  charObj.levelCalc();
}
