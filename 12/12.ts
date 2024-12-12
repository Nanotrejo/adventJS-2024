function calculatePrice(ornaments: string): number | undefined {
  const values: Record<string, number> = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };

  return (
    ornaments.split('').reduce((total, current, i) => {
      const currentValue = values[current];
      const nextValue = values[ornaments[i + 1]];
      return total + (currentValue < nextValue ? -currentValue : currentValue);
    }, 0) || undefined
  );
}

console.log(calculatePrice('***')); // 3   (1 + 1 + 1)
console.log(calculatePrice('*o')); // 4   (5 - 1)
console.log(calculatePrice('o*')); // 6   (5 + 1)
console.log(calculatePrice('*o*')); // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@')); // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#')); // 49  (-1 + 50)
console.log(calculatePrice('@@@')); // 300 (100 + 100 + 100)
console.log(calculatePrice('#@')); // 50  (-50 + 100)
console.log(calculatePrice('#@Z')); // undefined (Z es desconocido)
