function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts.sort((a: number, b: number) => a - b))];
}

const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2: number[] = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3: number[] = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
