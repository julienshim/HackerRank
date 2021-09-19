def count_substring(string, sub_string):
    count = 0
    max = len(string) - len(sub_string) + 1
    for i in range(0, max):
        cur_sub_string = string[i:i+len(sub_string)]
        if  cur_sub_string  == sub_string:
            count += 1
    return count