import random

suits = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
ranks = ('Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace')
values = {'Two':2, 'Three':3, 'Four':4, 'Five':5, 'Six':6, 'Seven':7, 'Eight':8, 'Nine':9, 'Ten':10, 'Jack':10,
         'Queen':10, 'King':10, 'Ace':11}

playing = True

class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
    
    def __str__(self):
        return self.rank + " of " + self.suit

class Deck:
    def __init__(self):
        self.deck = [] #start with an empty list
        for suit in suits:
            for rank in ranks:
                self.deck.append(Card(suit, rank))
    
    def __str__(self):
        deck_comp = ''
        for card in self.deck:
            deck_comp += '\n' + card.__str__()
        return "The deck has: " + deck_comp
    
    def shuffle(self):
        random.shuffle(self.deck)
    
    def deal(self):
        single_card = self.deck.pop()
        return single_card

class Hand:
    def __init__(self):
        self.cards = []
        self.value = 0
        self.aces = 0
        
    def add_card(self,card):
        # card passed in from Deck.deal(), single Card(suit, rank)
        self.cards.append(card)
        self.value += values[card.rank]
        
        # track aces
        if card.rank == 'Ace':
            self.aces += 1
        
    def adjust_for_ace(self):
        
        # If total value > 21 and I still have an ACE
        # then change my ace to be 1 instead of 11
        while self.value > 21 and self.aces:
            self.value -= 10
            self.aces -= 1
            
class Chips:
    
    def __init__(self):
        self.total = 100
        self.bet = 0
    
    def win_bet(self):
        self.total += self.bet
        
        
    def lose_bet(self):
        self.total -= self.bet
    
def take_bet(chips):
    while True:

        try:
            chips.bet = int(input("what is ur bet?"))
        except:
            print("Provide an integer")
        else:
            if chips.bet > chips.total:
                print('Sorry, you do not have enough chips! You have {}'.format(chips.total))
            else:
                break

def hit(deck ,hand):
    hand.add_card(deck.deal())
    hand.adjust_for_ace()

def hit_or_stand(deck, hand):
    global playing # to control an upcoming while loop
    
    while True:
        x = input('Hit or Stand? Enter h or s')
        
        if x[0].lower() == 'h':
            hit(deck, hand)
        elif x[0].lower() == 's':
            print("Player Stands Dealer's Turn")
            playing = False
        else:
            print("Sorry, I did not understand - Enter h or s")
            continue
        break

def show_some(player, dealer):
    print('DEALERS HAND:')
    print('one card hidden!')
    print(dealer.cards[1])
    print('\n')
    print('PLAYERS HAND:')
    for card in player.cards:
        print(card)
    
def show_all(player, dealer):
    print('DEALERS HAND:')
    for card in dealer.cards:
        print(card)
    print('\n')
    print('PLAYERS HAND:')
    for card in player.cards:
        print(card)
def player_busts(player, dealer, chips):
    chips.lose_bet()
    
def player_wins(player, dealer, chips):
    print("Player wins!")
    chips.win_bet()

def dealer_busts(player, dealer, chips):
    print("Dealer busts!")
    chips.win_bet()

def dealer_wins(player, dealer, chips):
    print("Dealer wins!")
    chips.lose_bet()

def push (player, dealer):
    print('Dealer and player tie! PUSH')

while True:
    # Print an opening statement
    print("WELCOME TO BLACKJACK")
    # Create & shuffle the deck, deal two cards per player
    deck = Deck()
    deck.shuffle()
    
    player_hand = Hand()
    player_hand.add_card(deck.deal())
    player_hand.add_card(deck.deal())
    
    dealer_hand = Hand()
    dealer_hand.add_card(deck.deal())
    dealer_hand.add_card(deck.deal())
    
    # Set up the Player's chips
    player_chips = Chips()
    # Prompt the Player for their bet
    take_bet(player_chips)
    
    # Show cards (but keep one dealer card hidden)
    show_some(player_hand, dealer_hand)
    
    while playing: # recall this variable from out hit_or_stand function
        
        # Prompt for Player to Hit or Stand
        hit_or_stand(deck, player_hand)
        
        # Show Cards (but keep one dealer card hidden)
        show_some(player_hand, dealer_hand)
        
        # If player's hand exceeds 21, run player_busts and break out of loop
        if player_hand.value > 21:
            player_busts(player_hand, dealer_hand, player_chips)
            break

    # If Player hasn't busted, play Dealer's hand until Dealer reaches 17

    if player_hand.value <= 21:
        while dealer_hand.value < 17:
            hit(deck, dealer_hand)

        # Show all cards
        show_all(player_hand, dealer_hand)

        # Run different winning scenarios
        if dealer_hand.value > 21:
            dealer_busts(player_hand, dealer_hand, player_chips)
        elif dealer_hand.value > player_hand.value:
            dealer_wins(player_hand, dealer_hand, player_chips)
        elif dealer_hand.value < player_hand.value:

            player_wins(player_hand, dealer_hand, player_chips)
        else:
            push(player_hand, dealer_hand)

    # Inform Player of their chips Total
    print('\n Player total chips are at: {}'.format(player_chips.total))
    # Ask to play again
    new_game = input('Would you like to play another hand - y or no')

    if new_game[0].lower() == 'y':
        playing = True
        continue
    else:
        print('Thank you for playing!')
        break