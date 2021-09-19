def solve(s):
    [first, last] = s.split(' ')
    def capitalize(n):
        return n[0].upper() + n[1:]
    return ' '.join([capitalize(first), capitalize(last)])