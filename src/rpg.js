export class Character {
  constructor(type, hotness, talent, finances) {
    this.type = type;
    this.hotness = hotness;
    this.talent = talent;
    this.esteem = 5;
    this.finances = finances;
    this.fame = 0;
    this.exp = 0;
    this.inv = [];
  }
}

export function battle(charObj) {
  if (charObj.talent >= 5) {
    charObj.finances += 50;
    charObj.exp += 3;
    charObj.esteem += 2;
  } else {
    charObj.finance -= 10;
    charObj.esteem -= 1;
  }
}
