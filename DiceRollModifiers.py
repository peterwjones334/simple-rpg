# python - Dice Roll with Modifiers

import random

def roll_dice(dice_string):
    # Split the input string into the number of dice, dice type, and modifier
    parts = dice_string.split("d")
    num_dice = int(parts[0])
    
    # Check if a modifier is present
    if "+" in parts[1]:
        dice, modifier = parts[1].split("+")
        modifier = int(modifier.strip())
    elif "-" in parts[1]:
        dice, modifier = parts[1].split("-")
        modifier = -int(modifier.strip())
    else:
        dice = parts[1]
        modifier = 0
    
    dice_type = int(dice)
    
    # Roll the dice
    rolls = [random.randint(1, dice_type) for _ in range(num_dice)]
    
    # Calculate the total result
    total = sum(rolls) + modifier
    
    # Print the individual rolls and the total result
    print(f"Rolls: {rolls}")
    print(f"Total: {total}")

# roll_dice("4d6 + 2")  # Roll four six-sided dice and add 2 to the total
# roll_dice("1d8 - 1")  # Roll one eight-sided die and subtract 1 from the total
# roll_dice("2d4")      # Roll two four-sided dice without any modifier