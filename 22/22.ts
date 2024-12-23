function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];
  const generate = (arr: string[], index: number) => {
    if (index === gifts.length) {
      result.push(arr);
      return;
    }
    generate([...arr, gifts[index]], index + 1);
    generate([...arr], index + 1);
  };
  generate([], 0);
  return result.filter((a) => a.length > 0).sort((a, b) => a.length - b.length);
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
