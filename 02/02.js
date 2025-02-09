/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const max_witch = names.reduce((max, str) => Math.max(max, str.length), 0);
  let result = ['*'.repeat(max_witch + 4)];
  names.map((value) => {
    const input = `* ${value} ${' '.repeat(max_witch - value.length)}*`;
    result.push(input);
  });
  result.push('*'.repeat(max_witch + 4));
  return result.join('\n');
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
