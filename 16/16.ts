/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  const stack: Array<string> = [];

  for (const char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

console.log(removeSnow('zxxzoz')); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')); // -> "a"
// No hay montículos repetidos
