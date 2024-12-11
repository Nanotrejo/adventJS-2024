type Space = '·' | '@' | '*' | 'o';
type Board = Space[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

function moveTrain(board: Board, mov: Movement): Result {
  const row = board.findIndex((row) => row.includes('@'));
  if (row === -1) return 'crash';

  const col = board[row].indexOf('@');

  const moves: Record<Movement, [number, number]> = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const [rowOffset, colOffset] = moves[mov] || [0, 0];
  const newRow = row + rowOffset;
  const newCol = col + colOffset;

  const new_value = board[newRow]?.[newCol];
  if (!new_value || new_value === 'o') return 'crash';
  if (new_value === '*') return 'eat';

  return 'none';
}

const board: any = ['·····', '*····', '@····', 'o····', 'o····'];

console.log(moveTrain(board, 'U'));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
