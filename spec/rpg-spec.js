import{ Character, battle } from "./../src/rpg.js";

describe('Character', function() {
  let reusableCharacter1;
  let reusableCharacter2;

  beforeEach(function() {
    reusableCharacter1 = new Character('boyband singer', 8, 3, 50);
    reusableCharacter2 = new Character('thespian actor', 2, 2, 50);
  });

  it('should return Character object with reusableCharacter properties', function() {
    expect(reusableCharacter1.type).toEqual('boyband singer');
    expect(reusableCharacter1.hotness).toEqual(8);
    expect(reusableCharacter1.talent).toEqual(3);
    expect(reusableCharacter1.finances).toEqual(50);
  });

  it('should add Character.exp , Character.finances, and Character.esteem on successful battle', function(){
    battle(reusableCharacter1);
    expect(reusableCharacter1.finances).toEqual(100);
    expect(reusableCharacter1.exp).toEqual(3);
    expect(reusableCharacter1.esteem).toEqual(7);
  });

  it('should add Character.exp , subtract Character.finances, and subtract Character.esteem based on failed battle', function(){
    battle(reusableCharacter2);
    expect(reusableCharacter2.finances).toEqual(40);
    expect(reusableCharacter2.exp).toEqual(1);
    expect(reusableCharacter2.esteem).toEqual(4);
  });

  it('should show fame level 1 after Character.exp reaches 20', function(){
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    battle(reusableCharacter1);
    expect(reusableCharacter1.fame).toEqual(1);
  });
});
