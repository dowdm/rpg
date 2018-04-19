import { Character } from './character';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    let userClass = $("input:radio[name=class]:checked").val();
    let userCharacter;
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
    $('.character-sheet').show();
  });
});
