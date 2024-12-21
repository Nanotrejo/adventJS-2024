function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0;

  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
// Devuelve: 3
console.log(treeHeight(tree));
