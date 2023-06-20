class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj1 = Conjunto()
    for i in [1, 10, 100, 1000]:
        conj1.add(i)
    print(conj1)
    print(1 in conj1)
    print(f'{0 in conj1}\n')

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(f'{conj2}\n')

    conj3 = conj1.union(conj2)
    print(f'{conj3}\n')

    conj4 = conj1.intersection(conj2)
    print(f'{conj4}\n')

    conj5 = Conjunto()
    print(f'{conj5}\n')

    print(conj1.difference(conj2))
    print(conj2.difference(conj1))
    print(conj1.issubset(conj3))
    print(conj4.issuperset(conj3))
