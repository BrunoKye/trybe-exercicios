def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


result = mdc(8, 12)
print(result)
