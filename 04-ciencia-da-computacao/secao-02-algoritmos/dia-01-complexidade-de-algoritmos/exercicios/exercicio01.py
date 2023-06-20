def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True
        previous_number = number

    return False


numbers = [1, 2, 2, 5, 6, 8, 10]
result = contains_duplicate(numbers)

print(result)
