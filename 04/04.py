def create_xmas_tree(height, ornament):
    result = []
    for i in range(1, height + 1):
        spaces = '_' * (height - i)
        ornaments = ornament * (2 * i - 1)
        result.append(spaces + ornaments + spaces)
    trunk = '_' * (height - 1) + '#' + '_' * (height - 1)
    result.append(trunk, trunk)
    
    return result.join('\n')

tree = createXmasTree(5, '*');
print(tree);
# /*
# ____*____
# ___***___
# __*****__
# _*******_
# *********
# ____#____
# ____#____
# */

tree2 = createXmasTree(3, '+');
print(tree2);
# /*
# __+__
# _+++_
# +++++
# __#__
# __#__
# */

tree3 = createXmasTree(6, '@');
print(tree3);
# /*
# _____@_____
# ____@@@____
# ___@@@@@___
# __@@@@@@@__
# _@@@@@@@@@_
# @@@@@@@@@@@
# _____#_____
# _____#_____
# */