function distributeWeight(weight: number): string {
  const boxRepresentations: Record<string, Array<string>> = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  if (weight in boxRepresentations) {
    return boxRepresentations[weight].join('\n');
  }

  const boxes = Object.keys(boxRepresentations)
    .map(Number)
    .sort((a, b) => b - a); // Ordenar las cajas de mayor a menor capacidad

  let remainingWeight = weight;
  const result: Array<string[]> = [];

  // Distribuir el peso en las cajas
  for (const box of boxes) {
    while (remainingWeight >= box) {
      result.push([...boxRepresentations[box]]);
      remainingWeight -= box;
    }
  }

  const boxSort = result.sort((a, b) => a[0].length - b[0].length);

  // Añadir espacios en blanco a las cajas que no tengan el tamaño máximo
  for (let i = 0; i < boxSort.length - 1; i++) {
    const end = boxSort[i].length - 1;
    const repeat =
      boxSort[i + 1][0].trim().length - boxSort[i][0].trim().length - 1;
    boxSort[i][end] =
      boxSort[i][end].trim() + '_'?.repeat(repeat > 0 ? repeat : 0);
  }

  // elimina el primer elemento de cada caja excepto la primera
  for (const box of boxSort.filter((box, index) => index > 0)) {
    box.shift();
  }
  return boxSort.join('\n').split(',').join('\n');
}

console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3));
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
