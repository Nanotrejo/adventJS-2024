function drawRace(indices: number[], length: number): string {
  return indices
    .map((reindeer: number, index: number) => {
      const draw: Array<string> = '~'.repeat(length).split('');
      if (reindeer !== 0) {
        const position: number = reindeer > 0 ? reindeer : length + reindeer;
        draw[position] = 'r';
      }
      const spaces: number = indices.length - index - 1;
      return draw.join('').padStart(length + spaces, ' ') + ` /${index + 1}`;
    })
    .join('\n');
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
