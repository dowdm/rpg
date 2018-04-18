# **Starlet RPG**

#### By William Chu and Matt Dowdney

## Description

RPG game to practice Jasmine and Karma testing along with implementing ES6 syntax.

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Generates character of choice | Generate Character  | Character {type:choice} |
| Characters have fame level and experience points, hotness and talent traits, finances and an inventory| Character | Character {<br>type:choice,<br>hotness: 1,<br>talent: 10,<br>fame: 0,<br>exp: 0,<br>inventory: ['makeup', 'breath mint']<br>}|
|Characters enter battles for exp, finances and inventory| Battles: Auditions, Awards Ceremony, Performance | Character {<br>exp: +20,<br>finances: + or -50}|
|Characters can trade finances for inventory| Character {finances: -20}| Character {inventory: ['makeup', 'breath mint', 'hairspray']}|

## Setup/Installation Requirements

* To view project code, _clone repository from_
* To view project, _open in web browser_

## Known Bugs

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel

## License

* GPL

William Chu and Matt Dowdney © 2018
