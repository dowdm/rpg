import { Character } from './character';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

var userCharacter;

function genCharacter(userClass) {
  switch(userClass) {
    case "1":
      userCharacter = new Character ('boyband', 8, 3, 50);
      break;
    case "2":
      userCharacter = new Character ('enthusiast', 2, 2, 50);
      break;
    case "3":
      userCharacter = new Character('homelyactor', 1, 9, 150);
      break;
    case "4":
      userCharacter = new Character('savant', 8, 8, 50);
      userCharacter.esteem = -100;
      break;
  }
}

function updateCharacterSheet(userCharacter) {
  $(".character-image").html(`<img src="img/${userCharacter.type}.svg">`)
  $(".character-fame").text(`${userCharacter.fame}/5`);
  $(".character-hotness").text(userCharacter.hotness);
  $(".character-talent").text(userCharacter.talent);
  $(".character-esteem").text(userCharacter.esteem);
  $(".character-finances").text(userCharacter.finances);
  $(".character-exp").text(userCharacter.exp);
  $(".character-inventory").text(userCharacter.inv.join(", "));
}

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    let userClass = $("input:radio[name=class]:checked").val();
    genCharacter(userClass);
    $('form').hide();
    $('.game-interface').show();
    updateCharacterSheet(userCharacter);

  });
});
