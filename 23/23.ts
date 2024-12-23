function findMissingNumbers(nums: number[]): number[] {
  const numSet = new Set(nums);
  const result: number[] = [];

  for (let i = 1; i < Math.max(...nums); i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findMissingNumbers([1, 2, 4, 6]));
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]));
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]
