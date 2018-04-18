export function useMakeUp(charObj) {
  if (charObj.inv.includes('makeup')) {
    charObj.hotness += 2;
    let removeItemIndex = charObj.inv.indexOf('makeup');
    charObj.inv.splice(removeItemIndex, 1);
  }
}

export function useHairSpray(charObj) {
  if (charObj.inv.includes('hairspray')) {
    charObj.hotness += 3;
    charObj.esteem += 2;
    let removeItemIndex = charObj.inv.indexOf('hairspray');
    charObj.inv.splice(removeItemIndex, 1);
  }
}
