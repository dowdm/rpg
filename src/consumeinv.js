export function useMakeUp(charObj) {
  if (charObj.inv.includes('makeup')) {
    charObj.hotness += 2;
    let removeItemIndex = charObj.inv.indexOf('makeup');
    console.log(removeItemIndex + " removeItemIndex");
    charObj.inv.splice(removeItemIndex, 1);
  }
}
