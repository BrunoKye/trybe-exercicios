# Complexidade O(n²)

def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            result.append(number1 * number2)
            number_of_iterations += 1

    print(result)
    print(f'{number_of_iterations} iterações!')

    return result


meu_array = [1, 2, 3, 4, 5]
multiply_arrays(meu_array, meu_array)
