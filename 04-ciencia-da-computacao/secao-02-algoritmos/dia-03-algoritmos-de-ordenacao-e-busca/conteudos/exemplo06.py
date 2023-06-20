def linear_search(numbers, target):
    n = len(numbers)

    for index in range(0, n):
        if numbers[index] == target:
            return index

    return -1


numbers = [1, 2, 3]

print(linear_search(numbers, 2))
print(linear_search(numbers, 4))
