function decodeFilename(filename: string): string {
  return (
    filename
      .split('_')
      ?.splice(1)
      ?.join('_')
      ?.split('.')
      ?.slice(0, -1)
      .join('.') || ''
  );
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));
// ➞ "elf-roster.csv"

console.log(decodeFilename('987654321_test.-_random.txt.tempfile'));
// ➞ "test.-_random.txt"
