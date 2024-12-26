/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const result = [];

  for (let i = 1; i <= height; i++) {
    const spaces = '_'.repeat(height - i);
    const ornaments = ornament.repeat(2 * i - 1);
    result.push(`${spaces}${ornaments}${spaces}`);
  }

  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  result.push(trunk, trunk);

  return result.join('\n');
}

const tree = createXmasTree(5, '*');
console.log(tree);
/*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  */

const tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
  __+__
  _+++_
  +++++
  __#__
  __#__
  */

const tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
  _____@_____
  ____@@@____
  ___@@@@@___
  __@@@@@@@__
  _@@@@@@@@@_
  @@@@@@@@@@@
  _____#_____
  _____#_____
  */
