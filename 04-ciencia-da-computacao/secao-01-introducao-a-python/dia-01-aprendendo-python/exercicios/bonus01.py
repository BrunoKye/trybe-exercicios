# Menor número

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


# Método 01
def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


# Método 02
# def minimum(numbers):
    # return min(numbers)
