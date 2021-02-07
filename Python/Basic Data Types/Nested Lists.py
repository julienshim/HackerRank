if __name__ == '__main__':
    dunce = []
    scores = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        dunce.append([name, score])
        scores.append(score)

    scores.sort()
    second = 0

    first = min(scores);

    for i in scores:
        if i != first:
            second = i
            break

    names = [];

    for dumb in dunce:
        if dumb[1] == second:
            names.append(dumb[0]);

    names.sort()
    print("\n".join(names))
