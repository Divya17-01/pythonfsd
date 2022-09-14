min_32_bit = -2147483648
max_32_bit = 2147483647


def reverse_num(num):
    result = 0
    x = str(num)
    check = False
    if x[0] == '-':
        num = int(x[1:])
        check = True
    while num != 0:
        digit = num % 10
        result = result * 10 + digit
        num //= 10
    if check == True:
        result = result*-1
    if result > max_32_bit or result < min_32_bit:
        return 0
    return result


num = int(input("give a number "))
print(reverse_num(num))
print(reverse_num(165498))
print(reverse_num(-165498))
print(reverse_num(16549815648))
print(reverse_num(-16549815648))
print(reverse_num(1698))
print(reverse_num(-1698))