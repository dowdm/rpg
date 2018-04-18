export class Character {
  constructor(type, hotness, talent, finances) {
    this.type = type;
    this.hotness = hotness;
    this.talent = talent;
    this.finances = finances;
    this.fame = 0;
    this.exp = 0;
    this.inv = [];
  }
}
