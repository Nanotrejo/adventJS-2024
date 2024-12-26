function inBox(box) {
  const gift = box.filter(
    (f, i) => i !== 0 && i !== box.length - 1 && f.includes('*')
  );
  const regex = /#\*#/;
  return regex.test(gift.join('').replaceAll(' ', ''));
}

console.log(inBox(['###', '#*#', '###'])); // ➞ true

console.log(inBox(['####', '#* #', '#  #', '####'])); // ➞ true

console.log(inBox(['#####', '#   #', '#  #*', '#####'])); // ➞ false

console.log(inBox(['#####', '#   #', '#   #', '#   #', '#####'])); // ➞ false
