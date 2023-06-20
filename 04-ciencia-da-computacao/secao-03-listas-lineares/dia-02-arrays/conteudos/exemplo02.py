class Exemplo:
    def __init__(self, value):
        self.value = value

    def update(self, index, value):
        self.value[index] = value


exemplo = Exemplo([1, 2, 3, 4, 5])
print(exemplo.value)

exemplo.update(2, 10)
print(exemplo.value)
