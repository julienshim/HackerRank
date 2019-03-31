if __name__ == '__main__':
    N = int(input())
    if N % 2 == 1:
        print("Weird")
    else:
        print("Weird") if N >= 6 and N <= 20 else print("Not Weird")
