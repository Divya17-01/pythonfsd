def func(input_array, target):
    for i in range(len(input_array)):
        for j in range(i+1, len(input_array)):
            if input_array[i] + input_array[j] == target:
                return (i, j)
    return -1


input_array = []
size_of_input_array = int(input("size : "))

for i in range(size_of_input_array):
    input_array.append(int(input()))
print(input_array)
target = int(input("enter the target"))
print(func(input_array, target))