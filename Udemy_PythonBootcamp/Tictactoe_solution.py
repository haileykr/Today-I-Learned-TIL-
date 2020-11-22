def display_board(board):
    print(board[7] + '|' + board[8] + '|' + board[9])
    print(board[4] + '|' + board[5] + '|' + board[6])
    print(board[1] + '|' + board[2] + '|' + board[3])

def player_input():
    # Output = (Player1 marker, Player2 marker)
    marker = ''
    while marker != 'X' and marker != 'O':
        marker = input('Player1: Choose X or O: ').upper()

    if marker == 'X':
        return ('X', 'O')
    else:
        return ('O', 'X')
    
def place_marker(board, marker, position):
    board[position] = marker

def win_check(board, mark):
    # all rows
    # all columns
    # 2 diagonals
    return (board[7] == board[8] == board[9] == mark) or
    (board[1] == board[2] == board[3] == mark) or
    (board[4] == board[5] == board[6] == mark) or
    (board[7] == board[4] == board[1] == mark) or
    (board[8] == board[5] == board[32 == mark) or
    (board[9] == board[6] == board[3] == mark) or
    (board[7] == board[5] == board[3] == mark) or
    (board[9] == board[5] == board[1] == mark)


import random

def choose_first():
    flip = random.randint(0,1)

    if flip == o:
        return 'Player 1'
    else:
        return 'Player 2'

def space_check(board, position):
    return board[position] == ' '

def full_board_check(board):
    for i in range(1,10):
        if space_check(board, i):
            return False
    return True


def player_choice(board):
    position = 0
    while position not in [1,2,3,4,5,6,7,8,9] or not space_check(board, position):
        position = int(input("Choose a position: (1-9)"))
    return position

def replay():
    choice = input("Play again? Enter Yes or No")

    return choice == 'Yes'

# WHILE LOOP TO KEEP RUNNING THE GAME
print('Welcome to Tic Tac Toe')

while True:
    # PLAY THE GAME
    
    ## SET EVERYTHING UP (BOARD, WHO'S FIRST, CHOOSE MARKERS)
    the_board = [' ']*10
    player1_marker, player2_marker = player_input()

    turn = choose_first()
    print(turn + ' will go first')
    
    play_game = input('Ready?')
    
    if play_game == 'y':
        game_on = True
    else:
        game_on = False

    ## GAME PLAY
    while game_on:
        if turn == 'Player 1':
            # Show the board
            display_board(the_board)
            # Choose a position
            position = player_choice(the_board)
            # Place the marker on the position
            place_marker(the_board, player1_marker, position)
            # Check if they won
            if win_check(the_board, player1_marker):
                display_board(the_board)
                print('Player 1 has won!')
                game_on = False
            # Or check if there is a tie
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME!")
                    game_on = False
                else:
                    turn = 'Player 2'

            # No tie and no win? Then next player's turn
    ### PLAYER ONE TURN
        else:
            # Show the board
            display_board(the_board)
            # Choose a position
            position = player_choice(the_board)
            # Place the marker on the position
            place_marker(the_board, player2_marker, position)
            # Check if they won
            if win_check(the_board, player2_marker):
                display_board(the_board)
                print('Player 2 has won!')
                game_on = False
            # Or check if there is a tie
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME!")
                    game_on = False
                else:
                    turn = 'Player 1'
    ### PLAYER TWO TURN

    if not replay():
        break
# BREAK OUT OF THE WHILE LOOP ON replay()