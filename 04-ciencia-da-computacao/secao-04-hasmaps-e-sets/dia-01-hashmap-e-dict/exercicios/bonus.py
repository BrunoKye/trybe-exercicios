def count_words(words, chars):
    ans = 0
    alphabet = {}
    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1
    print(f"Montamos o alfabeto: {alphabet}\n")

    for word in words:
        print(f"Analisando a palavra {word}")
        str_count = {}
        for char in word:
            if char not in alphabet:
                print(
                    f"'{char}' não está no alfabeto. "
                    "Desconsiderar a palavra\n"
                )
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] += 1

                if str_count[char] > alphabet[char]:
                    print(
                        f"'{char}' ocorre com mais frequência "
                        "do que no alfabeto. Desconsiderar\n"
                    )
                    break
        else:
            print(f"Considerar {word}\n")
            ans += len(word)

    return ans


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {count_words(words, chars)}\n")

words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {count_words(words, chars)}\n")
