def rotate(input_matrix) -> None:
    for i in range(len(matrix)):
        for j in range(i+1, len(matrix)):
            input_matrix[i][j], input_matrix[j][i] = matrix[j][i], matrix[i][j]
        matrix[i].reverse()


size_of_matrix = int(input("size of matrix:"))
matrix = []
for i in range(size_of_matrix):
    ls = []
    for j in range(size_of_matrix):
        ls.append(int(input()))
    matrix.append(ls)
print(matrix)
rotate(matrix)
print(matrix)