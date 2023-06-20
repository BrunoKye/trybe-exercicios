# Somatória até o número limit

limit = 10


# Método 01
def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total


# Método 02
# def summation(limit):
    # return sum(range(1, limit + 1))
