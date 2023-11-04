# python - Generate Character

import random

# Character classes and their hit dice
classes = {
    "Fighter": "d8",
    "Cleric": "d6",
    "Thief": "d4",
    "Magic-User": "d4"
}

# Ability scores and their modifiers
abilities = {
    "Strength": 0,
    "Dexterity": 0,
    "Constitution": 0,
    "Intelligence": 0,
    "Wisdom": 0,
    "Charisma": 0
}

def roll_dice(dice):
    rolls, sides = map(int, dice.split("d"))
    return sum(random.randint(1, sides) for _ in range(rolls))

def generate_character():
    # Roll ability scores
    for ability in abilities:
        abilities[ability] = roll_dice("3d6")

    # Randomly select a character class
    character_class = random.choice(list(classes.keys()))

    # Generate hit points based on character class hit dice
    hit_dice = classes[character_class]
    hit_points = roll_dice(hit_dice)

    # Print the generated character
    print("Character Class:", character_class)
    print("Ability Scores:")
    for ability, score in abilities.items():
        print(ability + ":", score)
    print("Hit Points:", hit_points)
