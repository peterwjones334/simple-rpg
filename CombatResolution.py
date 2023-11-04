# python - Combat Resolution

import random

class Character:
    def __init__(self, name, health, attack_damage, defense):
        self.name = name
        self.health = health
        self.attack_damage = attack_damage
        self.defense = defense

    def attack(self):
        return random.randint(1, self.attack_damage)

    def take_damage(self, damage):
        self.health -= max(0, damage - self.defense)

def combat_resolution(player, npc):
    round_count = 1

    while player.health > 0 and npc.health > 0:
        print(f"\nRound {round_count} - {player.name} vs {npc.name}")
        print(f"{player.name} Health: {player.health} | {npc.name} Health: {npc.health}")

        player_attack = player.attack()
        npc_attack = npc.attack()

        print(f"{player.name} attacks {npc.name} and deals {player_attack} damage.")
        npc.take_damage(player_attack)

        if npc.health <= 0:
            print(f"{npc.name} has been defeated!")
            break

        print(f"{npc.name} attacks {player.name} and deals {npc_attack} damage.")
        player.take_damage(npc_attack)

        if player.health <= 0:
            print(f"{player.name} has been defeated!")
            break

        round_count += 1

# Example usage:

player_name = input("Enter the name of your character: ")
player_health = int(input("Enter the health of your character: "))
player_attack_damage = int(input("Enter the attack damage of your character: "))
player_defense = int(input("Enter the defense of your character: "))

npc_name = input("Enter the name of the NPC: ")
npc_health = int(input("Enter the health of the NPC: "))
npc_attack_damage = int(input("Enter the attack damage of the NPC: "))
npc_defense = int(input("Enter the defense of the NPC: "))

player = Character(player_name, player_health, player_attack_damage, player_defense)
npc = Character(npc_name, npc_health, npc_attack_damage, npc_defense)

combat_resolution(player, npc)