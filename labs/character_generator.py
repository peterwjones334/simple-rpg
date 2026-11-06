# Demo only. OSR-like classes (Fighter d8, Cleric d6, Thief/Magic-User d4) and 3d6 abilities.
# Not the SRPG d6 roll-under character procedure in rules/characters.md.

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
    rolls, sides = dice.lower().split("d")
    # Class hit dice are stored as "d8"; treat a missing count as 1.
    count = int(rolls) if rolls else 1
    return sum(random.randint(1, int(sides)) for _ in range(count))

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

if __name__ == "__main__":
    generate_character()
