function drawTable(data: Array<Record<string, string | number>>): string {
  const keys: string[] = Object.keys(data[0]);
  const maxLengths: number[] = keys.map((key) =>
    Math.max(key.length, ...data.map((row) => String(row[key]).length))
  );
  console.log(maxLengths);
  const header: string =
    '| ' +
    keys
      .map((key, i) =>
        (key[0].toUpperCase() + key.slice(1)).padEnd(maxLengths[i])
      )
      .join(' | ') +
    ' |';
  const divider: string =
    '+' + keys.map((_, i) => '-'.repeat(maxLengths[i] + 2)).join('+') + '+';
  const rows: string[] = data.map(
    (row) =>
      keys
        .map(
          (key, index) =>
            (index === 0 ? '| ' : '') +
            String(row[key]).padEnd(maxLengths[keys.indexOf(key)])
        )
        .join(' | ') + ' |'
  );
  return [divider, header, divider, ...rows, divider].join('\n');
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' },
  ])
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
  ])
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
