# python - GM Simulator

import random

def ask_numbered_question(question, options):
    print(question)
    for i, option in enumerate(options):
        print(f"{i+1}. {option}")
    while True:
        response = input("Enter the number of your choice: ")
        if response.isdigit() and 1 <= int(response) <= len(options):
            return int(response)

def roll_d20():
    return random.randint(1, 20)

def simulate_game_master(difficulty):
    # Introduction
    print("Welcome to the Game Master Emulator!")
    print("You can simulate the decisions of a Game Master using this tool.")

    # Main loop
    while True:
        # Prompt for player's action
        print("\nWhat do you want to do?")
        action = input("> ")

        # Simulate Game Master decision
        yes_weight = 10 + difficulty  # Adjust the weights based on difficulty
        no_weight = 10 - difficulty

        if roll_d20() <= yes_weight:
            print("The action is successful.")
        else:
            print("The action failed.")

        if roll_d20() > no_weight:
            print("Something unexpected happens.")

        if roll_d20() > no_weight:
            print("Random encounter!")

        if roll_d20() <= yes_weight:
            print("You find valuable items or treasure.")

        if roll_d20() <= yes_weight:
            print("You receive useful information.")

        if roll_d20() > no_weight:
            print("There are obstacles in your path.")

        if roll_d20() <= yes_weight:
            skill_check_result = roll_d20()
            print("You rolled a", skill_check_result, "on the skill check.")

        if roll_d20() > no_weight:
            print("You are in immediate danger.")

        # Prompt to continue or exit
        if not ask_numbered_question("Continue playing?", ["Yes", "No"]) == 1:
            print("Exiting the Game Master Emulator.")
            break

# Run the Game Master emulator
difficulty = ask_numbered_question("Select difficulty:", ["Easy", "Medium", "Hard"])
simulate_game_master(difficulty)