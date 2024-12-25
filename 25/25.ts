function execute(code: string): number {
  let value = 0;
  const jumpMap: Record<number, number> = {};
  const stack: number[] = [];
  const effects: Record<string, number> = { '+': 1, '-': -1 };

  // Preprocesar saltos de bucles y condicionales
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char === '[' || char === '{') stack.push(i);
    else if (char === ']' || char === '}') {
      const openIndex = stack.pop()!;
      jumpMap[openIndex] = i;
      jumpMap[i] = openIndex;
    }
  }

  for (let i = 0; i < code.length; ) {
    const char = code[i];
    if (char in effects) {
      value += effects?.[char]; // Incrementar o decrementar
    } else if (['[', '{'].includes(char) && value === 0) {
      i = jumpMap[i]; // Saltar al final del bucle o condicional
    } else if ([']'].includes(char) && value !== 0) {
      i = jumpMap[i]; // Volver al inicio del bucle o condicional
    }
    i++;
  }

  return value;
}
console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
console.log(execute('>>>+{++}')); // 3
console.log(execute('+{[-]+}+')); // 2
console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
console.log(execute('-[++{-}]+{++++}')); // 5
