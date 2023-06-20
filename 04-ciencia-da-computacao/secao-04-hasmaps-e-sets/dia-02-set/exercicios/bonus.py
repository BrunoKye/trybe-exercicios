def longer_no_repeating_substring_len(string):
    n = len(string)
    char_map = {}
    left = 0
    max_length = 0

    for right in range(n):
        if string[right] in char_map:
            left = max(left, char_map[string[right]] + 1)

        char_map[string[right]] = right
        max_length = max(max_length, right - left + 1)

    return max_length


string = "serdevemuitolegalmasehprecisoestudarbastante"
result = longer_no_repeating_substring_len(string)

print(result)
