export function buyMakeUp(charObj) {
  if (charObj.finances >= 20) {
  charObj.inv.push('makeup');
  charObj.finances -= 20;
  }
}

export function buyHairSpray(charObj) {
  if (charObj.finances >= 40) {
  charObj.inv.push('hairspray');
  charObj.finances -= 40;
  }
}

export function buyMethodActing(charObj) {
  if (charObj.finances >= 150) {
  charObj.inv.push('methodacting');
  charObj.finances -= 150;
  }
}
