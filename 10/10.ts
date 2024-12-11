function compile(instructions: string[]): number {
  let i = 0;
  const registro: Record<string, number> = {};
  while (i < instructions.length) {
    const [mov, x, y] = instructions[i].split(' ');
    switch (mov) {
      case 'MOV':
        registro[y] = isNaN(+x) ? registro[x] || 0 : +x;
        break;
      case 'INC':
        registro[x] = (registro[x] || 0) + 1;
        break;
      case 'DEC':
        registro[x] = (registro[x] || 0) - 1;
        break;
      case 'JMP':
        if ((registro[x] || 0) === 0) {
          i = +y;
          continue;
        }
        break;
    }
    i++;
  }
  return registro['A'] ?? undefined;
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A', // incrementa el valor del registro 'a'
];

console.log(compile(instructions)); // -> 2

/**
   Ejecución paso a paso:
   0: MOV -1 C -> El registro C recibe el valor -1
   1: INC C    -> El registro C pasa a ser 0
   2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
   1: INC C    -> El registro C pasa a ser 1
   2: JMP C 1  -> C es 1, ignoramos la instrucción
   3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
   4: INC A    -> El registro A pasa a ser 2
   */
