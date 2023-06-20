# Fatorial

# Método 01
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

# Método 02
number = 5
result = 1
for factor in range(1, number+1):
    result *= factor
result
