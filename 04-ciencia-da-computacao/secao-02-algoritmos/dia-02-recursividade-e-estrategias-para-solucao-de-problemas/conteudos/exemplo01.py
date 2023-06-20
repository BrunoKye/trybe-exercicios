# Recursividade

def countdown(n):
    if n == 0:
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)


countdown(5)


# def iterative_countdown(n):
#     while n > 0:
#         print(n)
#         n = n - 1
#     print("FIM!")


# iterative_countdown(5)
