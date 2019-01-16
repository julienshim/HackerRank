tests = []
n = int(input()) # read number of elements in the list

for line in range(n):
    tests.append(input())

for test in tests:
    even = ""
    odd = ""
    for b, char in enumerate(test):
        if b % 2 == 0:
            even = even + char
        else:
            odd = odd + char
    print(f"{even} {odd}")
    