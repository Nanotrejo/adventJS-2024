function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  const result: [boolean, string] = [false, tree1?.value || ''];

  if (!tree1 && !tree2) {
    result[0] = true;
  } else if (tree1 && tree2) {
    const left = isTreesSynchronized(tree1.left, tree2.right);
    const right = isTreesSynchronized(tree1.right, tree2.left);

    result[0] = left[0] && right[0] && tree1.value === tree2.value;
  }

  return result;
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
};

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' },
};

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

/*
    tree1          tree2
     🎄              🎄
    / \             / \
  ⭐   🎅         🎅   ⭐
  */

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })); // [false, '🎅']
