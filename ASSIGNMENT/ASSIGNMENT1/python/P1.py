def checkPalidrome(num):
    num=str(num)
    k=len(num)-1
    for i in range((len(num)-1)//2):
        if num[i]!=num[k-i]:
            return False
    return True

def check(num):
    num=str(num)
    if num==num[::-1]:
        return True;
    return False

print(checkPalidrome(121121))
print(checkPalidrome(12121))
print(checkPalidrome(454545))
print(checkPalidrome(888899998888))
print()
print()
print(check(121121))
print(check(12121))
print(check(454545))
print(check(888899998888))