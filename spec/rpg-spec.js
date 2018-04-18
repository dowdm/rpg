import{ Character } from "./../src/rpg.js";

describe('Character', function() {
  var reusableCharacter;

  beforeEach(function() {
    reusableCharacter = new Character('boyband singer', 8, 3, 50);
  });

  it('should return Character object with reusableCharacter properties', function() {
    expect(reusableCharacter.type).toEqual('boyband singer');
    expect(reusableCharacter.hotness).toEqual(8);
    expect(reusableCharacter.talent).toEqual(3);
    expect(reusableCharacter.finances).toEqual(51);
  });
});
