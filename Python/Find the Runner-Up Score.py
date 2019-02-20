if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())

    intArray = []
    for i in arr:
        intArray.append(int(i))
    
    intArray.sort()

    secondIndex = intArray.index(max(intArray)) - 1
    
    print(intArray[secondIndex])
