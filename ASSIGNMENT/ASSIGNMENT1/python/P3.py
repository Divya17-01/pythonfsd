def binarySearch(input_array, target, i, j):
    if j >= i:

        mid = i + (j - i) // 2

        if input_array[mid] == target:
            return mid

        elif input_array[mid] > target:
            return binarySearch(input_array,target, i, mid-1)

        else:
            return binarySearch(input_array,target, mid + 1, j)

    else:
        return -1


input_array = [1, 8, 11, 17, 48, 55, 88, 400]
target = 55
print(binarySearch(input_array, target, 0, len(input_array)-1))
target = 66
print(binarySearch(input_array, target, 0, len(input_array)-1))