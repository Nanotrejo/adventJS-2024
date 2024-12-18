function detectBombs(grid: boolean[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const result: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  // Desplazamientos relativos para las 8 direcciones
  const directions = [
    [-1, 0], // Arriba
    [1, 0], // Abajo
    [0, -1], // Izquierda
    [0, 1], // Derecha
    [-1, -1], // Diagonal arriba izquierda
    [-1, 1], // Diagonal arriba derecha
    [1, -1], // Diagonal abajo izquierda
    [1, 1], // Diagonal abajo derecha
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        for (const [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;
          // Verificar que la celda vecina está dentro de los límites
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            result[ni][nj]++;
          }
        }
      }
    }
  }

  return result;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ])
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
