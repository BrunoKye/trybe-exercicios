conjunto_a = set()
conjunto_b = set([1, 1, 2, 3, 3, 3])

conjunto_a.add(5)
conjunto_a.add(3)
conjunto_a.add(0)
conjunto_a.add('elemento')
print(f'{conjunto_a}\n')

conjunto_b.remove(3)
# conjunto_b.remove(3)
print(f'{conjunto_b}\n')

conjunto_b.discard(3)

some_element = conjunto_a.pop()
print(f'{some_element}\n')

conjunto_b.clear()
print(f'{conjunto_b}\n')

if 2 in conjunto_a:
    print("2 está em A")

if 7 not in conjunto_a:
    print("7 não está em A")
