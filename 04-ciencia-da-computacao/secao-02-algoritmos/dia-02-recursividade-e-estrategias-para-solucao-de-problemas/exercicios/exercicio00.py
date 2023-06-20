# 01 - Iterativo

def conta_pares(n):
    numero_de_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


# 02 - Recursivo

# def conta_pares(n):
#     if n == 1:
#         return 0
#     elif n % 2 == 0:
#         return 1 + conta_pares(n-1)
#     else:
#         return conta_pares(n-1)


result = conta_pares(10)
print(result)
