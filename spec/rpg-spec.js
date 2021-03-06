import { Character } from "./../src/character.js";

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
    reusableCharacter4.exp = 100;
    reusableCharacter4.esteem = -100;
  });

  it('should return Character object with reusableCharacter properties', function() {
    expect(reusableCharacter1.type).toEqual('handsome boyband singer');
    expect(reusableCharacter1.hotness).toEqual(8);
    expect(reusableCharacter1.talent).toEqual(3);
    expect(reusableCharacter1.finances).toEqual(50);
  });

  it('should add Character.exp , Character.finances, and Character.esteem on successful audition', function(){
    reusableCharacter1.audition();
    expect(reusableCharacter1.finances).toEqual(100);
    expect(reusableCharacter1.exp).toEqual(3);
    expect(reusableCharacter1.esteem).toEqual(7);
  });

  it('should add Character.exp , subtract Character.finances, and subtract Character.esteem based on failed audition', function(){
    reusableCharacter2.audition();
    expect(reusableCharacter2.finances).toEqual(40);
    expect(reusableCharacter2.exp).toEqual(1);
    expect(reusableCharacter2.esteem).toEqual(4);
  });

  it('should show fame level 1 after Character.exp reaches 20', function(){
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    reusableCharacter1.audition();
    expect(reusableCharacter1.fame).toEqual(1);
  });

  it('should add Character.exp , Character.finances, and Character.esteem on successful performance', function(){
    reusableCharacter3.performance();
    expect(reusableCharacter3.finances).toEqual(250);
    expect(reusableCharacter3.exp).toEqual(10);
    expect(reusableCharacter3.esteem).toEqual(15);
  });

  it('should buy makeup, add to Character.inv and subtract Character.finances', function(){
    reusableCharacter3.buyMakeUp();
    expect(reusableCharacter3.finances).toEqual(130);
    expect(reusableCharacter3.inv).toContain('makeup');
  });

  it('should consume makeup, add 2 to Character.hotness and remove makeup from Character.inv', function(){
    reusableCharacter3.buyMakeUp();
    reusableCharacter3.buyMakeUp();
    expect(reusableCharacter3.inv).toContain('makeup','makeup');
    reusableCharacter3.useMakeUp();
    expect(reusableCharacter3.hotness).toEqual(3);
    expect(reusableCharacter3.inv).toContain('makeup');
  });

  it('should consume hairspray, add 3 to Character.hotness, add 2 to Character.esteem and remove hairspray from Character.inv', function(){
    reusableCharacter3.buyHairSpray();
    reusableCharacter3.buyHairSpray();
    expect(reusableCharacter3.inv).toContain('hairspray','hairspray');
    reusableCharacter3.useHairSpray();
    expect(reusableCharacter3.hotness).toEqual(4);
    expect(reusableCharacter3.esteem).toEqual(7);
    expect(reusableCharacter3.inv).toContain('hairspray');
  });

  it('should increase charObj.finances by 650 on successful performance for Character with charObj.fame 5', function(){
    reusableCharacter4.levelCalc();
    reusableCharacter4.performance();
    expect(reusableCharacter4.finances).toEqual(650);
  });

  it('should consume methodacting, increase charObj.talent by 3, increase charObj.esteem by 1 and remove methodacting from Character.inv', function(){
    reusableCharacter3.buyMethodActing();
    expect(reusableCharacter3.inv).toContain('methodacting');
    reusableCharacter3.useMethodActing();
    expect(reusableCharacter3.talent).toEqual(12);
    expect(reusableCharacter3.esteem).toEqual(6);
  });
});
