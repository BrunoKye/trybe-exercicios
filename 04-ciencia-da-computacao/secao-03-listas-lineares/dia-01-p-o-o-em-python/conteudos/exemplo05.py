class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

print(objeto.atributo_do_objeto)

print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe)

Classe.método_normal(objeto)
objeto.método_normal()

Classe.método_estático()
objeto.método_estático()

Classe.método_de_classe()
objeto.método_de_classe()
