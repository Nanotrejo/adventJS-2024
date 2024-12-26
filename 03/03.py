def organizeInventory(inventory):
    result = {}
    for item in inventory:
        category = item['category']
        name = item['name']
        quantity = item['quantity']

        if category not in result:
            result[category] = {}

        if name not in result[category]:
            result[category][name] = 0

        result[category][name] += quantity
    return result


inventory = [
  { "name": 'doll', "quantity": 5, "category": 'toys' },
  { "name": 'car', "quantity": 3, "category": 'toys' },
  { "name": 'ball', "quantity": 2, "category": 'sports' },
  { "name": 'car', "quantity": 2, "category": 'toys' },
  { "name": 'racket', "quantity": 4, "category": 'sports' },
];

print(organizeInventory(inventory));
# Resultado esperado:
# {
#   toys: {
#     doll: 5,
#     car: 5
#   },
#   sports: {
#     ball: 2,
#     racket: 4
#   }

inventory2 = [
  { "name": 'book', "quantity": 10, "category": 'education' },
  { "name": 'book', "quantity": 5, "category": 'education' },
  { "name": 'paint', "quantity": 3, "category": 'art' },
]

print(organizeInventory(inventory2));
# Resultado esperado:
# {
#   education: {
#     book: 15
#   },
#   art: {
#     paint: 3
#   }
# }
