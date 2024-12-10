type Shoe = {
  type: 'I' | 'R';
  size: number;
};

function organizeShoes(shoes: { type: string; size: number }[]): number[] {
  const sizeMap = new Map<number, { left: number; right: number }>();

  for (const shoe of shoes) {
    const current = sizeMap.get(shoe.size) || { left: 0, right: 0 };
    shoe.type === 'I' ? current.left++ : current.right++;
    sizeMap.set(shoe.size, current);
  }
  const pairedSizes: number[] = [];
  for (const [size, { left, right }] of sizeMap) {
    const repeat = Math.min(left, right);
    repeat > 0 && pairedSizes.push(...Array(repeat).fill(size));
  }
  return pairedSizes;
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
];
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 },
];

console.log(organizeShoes(shoes3));
// []
