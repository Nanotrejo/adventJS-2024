function drawRace(indices: number[], length: number): string {
  let result: Array<string> = [];
  const indices_length = indices.length - 1;
  indices.map((f, i) => {
    let text = '';
    const index = f >= 0 ? f : length - Math.abs(f);
    if (indices_length !== i) {
      text += ' '.repeat(indices_length - i);
    }
    const aux = '~'.repeat(length);
    text +=
      f === 0
        ? aux
        : aux.substring(0, index) + 'r' + aux.substring(index + 'r'.length);

    text += ` /${i + 1}`;
    result.push(text);
  });
  return result.join('\n');
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/
