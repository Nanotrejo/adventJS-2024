def createFrame(names):
    max_witch = max([len(name) for name in names])
    result = ['*' * (max_witch + 4)]
    for value in names:
        input = f'* {value} {" " * (max_witch - len(value))} *'
        result.append(input)
    result.append('*' * (max_witch + 4))
    return '\n'.join(result)

print(createFrame(['midu', 'madeval', 'educalvolpz']));
# Resultado esperado:
# ***************
# * midu        *
# * madeval     *
# * educalvolpz *
# ***************

print(createFrame(['midu']));

# Resultado esperado:
# ********
# * midu *
# ********

print(createFrame(['a', 'bb', 'ccc']));

# Resultado esperado:
# *******
# * a   *
# * bb  *
# * ccc *
# *******

print(createFrame(['a', 'bb', 'ccc', 'dddd']));

# Resultado esperado:
# ********
# * a    *
# * bb   *
# * ccc  *
# * dddd *
# ********
