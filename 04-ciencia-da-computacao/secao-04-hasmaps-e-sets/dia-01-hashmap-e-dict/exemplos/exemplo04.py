dict1 = {}
dict2 = dict()
dict3 = {1: 'name1', 2: 'name2'}

print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

dict1[14] = 'name1'
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")
