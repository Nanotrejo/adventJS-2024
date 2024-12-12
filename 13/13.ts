function isRobotBack(moves: string): true | [number, number] {
  const moveArray: Record<string, [number, number]> = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  let x: number = 0, y:number = 0;
  let i: number = 0;
  const allRegisteredMoves = new Set<string>(); // Para gestionar movimientos únicos con '?'

  while (i < moves.length) {
    let move = moves[i];
    let multiplier = 1;

    if (move === '*') {
      multiplier = 2;
      move = moves[++i];
    }

    if (move === '!') {
      move = moves[++i];
      x += (moveArray[move]?.[0] || 0) * -1 * multiplier;
      y += (moveArray[move]?.[1] || 0) * -1 * multiplier;
      i++;
      continue;
    }

    if (move === '?') {
      // Movimiento condicional: solo se realiza si no se ha hecho antes
      move = moves[++i];
      if (allRegisteredMoves.has(move)) {
        i++;
        continue;
      }
      allRegisteredMoves.add(move);
    } else {
      allRegisteredMoves.add(move);
    }

    x += (moveArray[move]?.[0] || 0) * multiplier;
    y += (moveArray[move]?.[1] || 0) * multiplier;

    i++;
  }

  return x === 0 && y === 0 ? true : [x, y];
}

console.log(isRobotBack('R')); // [1, 0]
console.log(isRobotBack('RL')); // true
console.log(isRobotBack('RLUD')); // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R')); // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')); // true
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
