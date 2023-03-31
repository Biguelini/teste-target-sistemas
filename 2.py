def is_fibonacci(num):
    a, b = 0, 1
    while b < num:
        a, b = b, a + b
    if (b == num or num == 0):
        return print("O número '{}' pertence à sequência de fibonacci".format(num))
    return print("O número '{}' não pertence à sequência de fibonacci".format(num))


user_input = input('Digite o número que deseja saber se está na sequência de fibonacci: ')
is_fibonacci(int(user_input))