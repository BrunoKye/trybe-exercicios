# Fatorial

def sum_recursive(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_recursive(n - 1)


sum_recursive(4)


# def iterative_factorial(n):
#     fact = 1

#     for i in range(1, n + 1):
#         fact = fact * i

#     return fact

# iterative_factorial(5)
