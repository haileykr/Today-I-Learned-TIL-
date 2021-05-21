from cs50 import get_int

def main():
    height=get_right_int()
    for i in range(1,height+1):
        print(" "*(height-i)+"#"*i)

def get_right_int():
    while True:
        n=get_int("Height: ")
        if n in range(9) and n>0:
            break
    return n

main()

# $ ./mario
# Height: 4
#   #
#   ##
#  ###
# ####