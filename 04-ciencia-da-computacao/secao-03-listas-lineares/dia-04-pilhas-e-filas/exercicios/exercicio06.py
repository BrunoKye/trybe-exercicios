from exercicio03 import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == '/':
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()


print(solve_expression('5 10 + 30 5 / -'))
print(solve_expression('10 5 30 * 30 / 2 * +'))
print(solve_expression('5 10 * 30 - 4 5 * 10 - +'))
print(solve_expression('30 10 / 5 + 5 10 + *'))
print(solve_expression('50 10 * 2 / 5 * 5 /'))
