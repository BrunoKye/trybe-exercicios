def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


candies = [2, 3, 5, 1, 3]
result = kids_with_candies(candies, 3)

print(result)
