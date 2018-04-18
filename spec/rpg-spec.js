import { audition, performance, awards } from "./../src/battles.js";
import { Character } from "./../src/character.js";
import { buyMakeUp, buyHairSpray } from "./../src/purchaseinv.js";
import { useMakeUp } from "./../src/consumeinv.js";

describe('Character', function() {
  let reusableCharacter1;
  let reusableCharacter2;
  let reusableCharacter3;
  let reusableCharacter4;

  beforeEach(function() {
    reusableCharacter1 = new Character('handsome boyband singer', 8, 3, 50);
    reusableCharacter2 = new Character('unfortunate thespian enthusiast', 2, 2, 50);
    reusableCharacter3 = new Character('talented but homely actor', 1, 9, 150);
    reusableCharacter4 = new Character('depressed sexy savant', 8, 8, 50);
    // reusableCharacter4.esteem = -100;
  });

  it('should return Character object with reusableCharacter properties', function() {
    expect(reusableCharacter1.type).toEqual('handsome boyband singer');
    expect(reusableCharacter1.hotness).toEqual(8);
    expect(reusableCharacter1.talent).toEqual(3);
    expect(reusableCharacter1.finances).toEqual(50);
  });

  it('should add Character.exp , Character.finances, and Character.esteem on successful audition', function(){
    audition(reusableCharacter1);
    expect(reusableCharacter1.finances).toEqual(100);
    expect(reusableCharacter1.exp).toEqual(3);
    expect(reusableCharacter1.esteem).toEqual(7);
  });

  it('should add Character.exp , subtract Character.finances, and subtract Character.esteem based on failed audition', function(){
    audition(reusableCharacter2);
    expect(reusableCharacter2.finances).toEqual(40);
    expect(reusableCharacter2.exp).toEqual(1);
    expect(reusableCharacter2.esteem).toEqual(4);
  });

  it('should show fame level 1 after Character.exp reaches 20', function(){
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    audition(reusableCharacter1);
    expect(reusableCharacter1.fame).toEqual(1);
  });

  it('should add Character.exp , Character.finances, and Character.esteem on successful performance', function(){
    performance(reusableCharacter3);
    expect(reusableCharacter3.finances).toEqual(250);
    expect(reusableCharacter3.exp).toEqual(10);
    expect(reusableCharacter3.esteem).toEqual(15);
  });

  it('should buy makeup, add to Character.inv and subtract Character.finances', function(){
    buyMakeUp(reusableCharacter3);
    expect(reusableCharacter3.finances).toEqual(130);
    expect(reusableCharacter3.inv).toContain('makeup');
  });

  it('should consume makeup, add 2 to Character.hotness and remove makeup from Character.inv', function(){
    buyMakeUp(reusableCharacter3);
    buyMakeUp(reusableCharacter3);
    expect(reusableCharacter3.inv).toContain('makeup','makeup');
    useMakeUp(reusableCharacter3);
    expect(reusableCharacter3.hotness).toEqual(3);
    expect(reusableCharacter3.inv).toContain('makeup');
  });
});
