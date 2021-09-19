def swap_case(s):
    new_s = ''
    for c in s:
        if c.isalpha:
            new_s += c.lower() if c.isupper() else c.upper()
        else:
            new_s += c
    return new_s