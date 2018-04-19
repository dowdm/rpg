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

  //LEVEL METER
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

  //BATTLE TYPES
  audition() {
    if (this.talent >= 5 || this.talent + (this.hotness / 2) >= 5) {
      this.finances += 50 * (1 + this.fame);
      this.exp += 3;
      this.esteem += 2;
    } else {
      this.finances -= 10;
      this.exp += 1;
      this.esteem -= 1;
    }
    this.levelCalc();
  }
  performance() {
    if (this.talent >= 8 || this.talent + (this.hotness / 3) >= 8) {

      this.finances += 100 * (1 + this.fame);
      this.exp += 10;
      this.esteem += 10;
    } else {
      this.finances -= 100;
      this.exp -= 1;
      this.esteem -= 10;
    }
    this.levelCalc();
  }
  awards() {
    if (this.hotness >= 8 || this.hotness + (this.talent / 2) >= 5) {
      this.finances += 300  * (1 + this.fame);
      this.exp += 30;
      this.esteem += 20;
    } else {
      this.finances -= 100;
      this.exp += 3;
    }
    this.levelCalc();
  }
  //PURCHASE INVENTORY
  buyMakeUp() {
    if (this.finances >= 20 && this.inv.length < 10) {
      this.inv.push('makeup');
      this.finances -= 20;
    }
  }
  buyHairSpray() {
    if (this.finances >= 40 && this.inv.length < 10) {
      this.inv.push('hairspray');
      this.finances -= 40;
    }
  }
  buyMethodActing() {
    if (this.finances >= 150 && this.inv.length < 10) {
      this.inv.push('methodacting');
      this.finances -= 150;
    }
  }

  //USE INVENTORY
  useMakeUp() {
    if (this.inv.includes('makeup')) {
      this.hotness += 2;
      let removeItemIndex = this.inv.indexOf('makeup');
      this.inv.splice(removeItemIndex, 1);
    }
  }
  useHairSpray() {
    if (this.inv.includes('hairspray')) {
      this.hotness += 3;
      this.esteem += 2;
      let removeItemIndex = this.inv.indexOf('hairspray');
      this.inv.splice(removeItemIndex, 1);
    }
  }
  useMethodActing() {
    if (this.inv.includes('methodacting')) {
      this.talent += 3;
      this.esteem += 1;
      let removeItemIndex = this.inv.indexOf('methodacting');
      this.inv.splice(removeItemIndex, 1);
    }
  }
}

export { Character };
