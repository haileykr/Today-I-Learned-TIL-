from random import randint

class Dice:
    """A class representing a single 주사위"""

    def __init__(self, num_sides = 6):
        """Assume a six-sided 주사위"""
        self.num_sides = num_sides
    
    # method to roll
    def roll(self):
        """Return a random value between 1 and number of sides."""
        return randint(1, self.num_sides)