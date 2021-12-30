import random

def initialize_the_board():
    mapping = []
    for i in range(0,9):
        mapping.append(' ')
    
    return mapping

# 1. Write a function that can print out a board
# Set up your board as a list, where each index 1-9 corresponds with a number on a number pad
def show_board(mapping):
    print(f'     |     |     ')
    print(f'  {mapping[6]}  |  {mapping[7]}  |  {mapping[8]}  ')
    print(f'     |     |     ')
    print('-----------------')
    print(f'     |     |     ')
    print(f'  {mapping[3]}  |  {mapping[4]}  |  {mapping[5]}  ')
    print(f'     |     |     ')
    print('-----------------')
    print(f'     |     |     ')
    print(f'  {mapping[0]}  |  {mapping[1]}  |  {mapping[2]}  ')
    print(f'     |     |     ')
    
# 2. Ask the player1 to choose 'X' or 'O'
def choose_marker():
    current_player_marker = ''
    while current_player_marker not in ['X', 'O']:
        current_player_marker = input("Do you want to be 'X' or 'O'? :")
    return current_player_marker


# 3. Write a function that takes in the board list object, a marker ('X'or 'O'), and a desired position (1-9)
# 8. Write a function that asks for a player's next position (1-9) and then uses the function from Step 6 ot check if it's a free position.
# If it is, then return the position for later use.
def marker_placer(marker, available_space, mapping):
    # chooses a marker
    index = ''
    within_range = False
    
    while index.isdigit() == False or within_range == False:
            index = input(f"Choose your marker location (1-9): ")
            
            if index.isdigit() == False:
                print("Enter a number instead!")
            else:
                if (int(index) - 1) in available_space:
                    within_range = True
                else:
                    print("Location not available!")
    
    mapping[int(index)-1] = marker
    return mapping



# 4. Write a function that takes in a board and a mark (X or O) and then checks to see if that mark has won
def if_won(marker):
    if mapping[7:10] == [marker, marker, marker] or mapping[0:3] == [marker, marker, marker] or (mapping[0] == mapping[3] == mapping[6] == marker) or (mapping[2] == mapping[5] == mapping[8] == marker) or (mapping[0] == mapping[4] == mapping[8] == marker) or (mapping[2] == mapping[4] == mapping[6] == marker):
        return True
    else:
        return False


# 5. Write a function that uses the random module to randomly decide which player goes first. 
# Use random.randint()
def coin_flip():
    turn = random.randint(0,1)
    if turn == 0:
        return True
    else:
        return False


# 6. Write a function which returns a boolean showing whether a space on the board is freely available
def available_space(mapping):
    available_space = []
    for i in range(0,9):
        if mapping[i] == ' ':
            available_space.append(i)
    return available_space

# 7. Write a function that checks if the board is full (True) and returns a boolean value
def if_full(mapping):
    for i in range(0,9):
        if mapping[i] == ' ':
            return False
    return True

# 9. Write a functino that asks the player if they wanna play again and returns a boolean True if they want to so.
def play_again_question_mark():
    answer = ''
    while answer not in ['Y','N']:
        answer = input("Wanna play again? 'Y' for Yes and 'N' for No!: ")
    if answer == 'Y':
        return True
    else:
        return False



#10. Use the while loops and the functions to complete the program!


print("Welcome to TicTactoe!")
ready = ''
keep_playing = False
    
while ready not in ['Y', 'N']:
    ready = input("Are you ready to play? 'Y' for Yes and 'N' for No! :")

if ready == 'Y':
    keep_playing = True

while keep_playing:
    # initializes the board
    mapping = initialize_the_board()
    show_board(mapping)

    # marker set
    current_player_marker = choose_marker()
    
    # who goes first? and set the marker again
    if coin_flip():
        print("Yes! Player1, you go first")
    else:
        print("Yes! Player2, you go first")
        if current_player_marker == 'X':
            current_player_marker = 'O'
        else:
            current_player_marker = 'X'

    # gets the input
    while True:
        available_spots = available_space(mapping)
        mapping = marker_placer(current_player_marker, available_spots, mapping)  
        show_board(mapping)

        if current_player_marker == 'X':
            current_player_marker = 'O'
        else:
            current_player_marker = 'X'
        
        if if_full(mapping) or if_won(current_player_marker):
            break
        
    if if_full(mapping):
        print("Game Over! And you are tied")
        if play_again_question_mark(): continue
        else: break


    elif if_won(current_player_marker):
        print("Congrats! You won the game")
        if play_again_question_mark(): continue
        else: break