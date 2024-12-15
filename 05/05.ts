type Shoe = {
  type: 'I' | 'R';
  size: number;
};

function organizeShoes(shoes: { type: string; size: number }[]): number[] {
  const sizeMap = new Map<number, Record<string, number>>();

  for (const { type, size } of shoes) {
    const count: Record<string, number> = sizeMap.get(size) || { I: 0, R: 0 };
    count[type]++;
    sizeMap.set(size, count);
  }

  const result: number[] = [];
  for (const [size, { I, R }] of sizeMap) {
    const pairs = Math.min(I, R);
    result.push(...Array(pairs).fill(size));
  }

  return result;
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
console.log(organizeShoes(shoes2));
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
