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
  $('form').hide();
  updateCharacterSheet(userCharacter);
  $('.game-interface').show();
}

function updateCharacterSheet(userCharacter) {
  $(".character-image").html(`<img src="img/${userCharacter.type}.svg">`);
  $(".character-fame").text(`${userCharacter.fame}/5`);
  $(".character-hotness").text(userCharacter.hotness);
  $(".character-talent").text(userCharacter.talent);
  $(".character-esteem").text(userCharacter.esteem);
  $(".character-finances").text(userCharacter.finances);
  $(".character-exp").text(userCharacter.exp);
  $(".character-inventory").empty();
  userCharacter.inv.forEach(function(element) {
    $(".character-inventory").append('<img class="inventory-image" data-consumeItem="' + element + '" src="img/' + element + '.svg">');
  });
  activateStuff();
}

function runBattle(battle) {
  if (battle === 'audition') {
    userCharacter.audition();
  } else if (battle === 'performance') {
    userCharacter.performance();
  } else if (battle === 'awards') {
    userCharacter.awards();
  }
  updateCharacterSheet(userCharacter);
}

function buyStuff(item) {
  if (item === 'makeup') {
    userCharacter.buyMakeUp();
  } else if (item === 'hairspray') {
    userCharacter.buyHairSpray();
  } else if (item === 'acting') {
    userCharacter.buyMethodActing();
  }
  updateCharacterSheet(userCharacter);
}

function activateStuff() {
  $('.inventory-image').click(function(){
    let itemConsume = $(this).attr('data-consumeItem');
    useStuff(itemConsume);
  });
}

function useStuff(item) {
  if (item === 'makeup') {
    userCharacter.useMakeUp();
  } else if (item === 'hairspray') {
    userCharacter.useHairSpray();
  } else if (item === 'methodacting') {
    userCharacter.useMethodActing();
  }
  updateCharacterSheet(userCharacter);
}

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    let userClass = $("input:radio[name=class]:checked").val();
    genCharacter(userClass);
    $('.item').click(function(){
      let itemPurchase = $(this).attr('data-item');
      buyStuff(itemPurchase);
    });
    $('.battletype').click(function(){
      let battleSelect = $(this).attr('data-battleType');
      runBattle(battleSelect);
    });
  });
});
