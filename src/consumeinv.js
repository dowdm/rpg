export function useMakeUp(charObj) {
  if (charObj.inv.includes('makeup')) {
    charObj.hotness += 2;
    let indexOf = charObj.inv.indexOf('makeup');
    charObj.slice(indexOf, 1);
  }
}
