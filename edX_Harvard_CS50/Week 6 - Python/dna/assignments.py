import csv

from sys import exit
from sys import argv


def get_max_num_repetition(s, sub):
    # calculate the maximum number of times a substring is repeated
    # s:   [ATATATTATATTT]
    # ans: [302010201000] - starting at that index how many times does the substring repeat in s
    # sub: AT

    ans = [0]*len(s)

    for i in range(len(s)-len(sub), -1, -1):  # eq. to for (i=str(s)-str(sub); i>-1; i--)
        if s[i:i+len(sub)] == sub:  # basecase
            if i+len(sub) > len(s)-1:
                ans[i] = 1
            else:
                ans[i] = ans[i+len(sub)]+1
    return max(ans)


def print_match(reader, actual):
    for line in reader:
        name = line[0]
        values = [int(val) for val in line[1:]]
        if values == actual:
            print(name)
            return
    print("No Match")


def main():
    if len(argv) != 3:
        print("Usage: ./dna database check")
        exit(1)

    with open(argv[1])as database:
        reader = csv.reader(database)

        all_sequences = next(reader)[1:]
        print(all_sequences)

        with open(argv[2]) as check:
            s = check.read()
            actual = [get_max_num_repetition(s, seq) for seq in all_sequences]

        print_match(reader, actual)


if __name__ == "__main__":
    main()