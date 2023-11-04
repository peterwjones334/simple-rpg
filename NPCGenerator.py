# python - NPC Generator

import random

class NPCGenerator:
    races = ["Human", "Elf", "Dwarf", "Orc", "Goblin"]
    classes = ["Warrior", "Mage", "Rogue", "Cleric"]
    armor_types = ["Leather", "Chainmail", "Plate"]
    weapon_types = ["Sword", "Axe", "Bow", "Staff", "Dagger"]
    likely_responses = ["Friendly", "Neutral", "Hostile"]
    
    @staticmethod
    def generate_npc():
        npc = {}
        npc["race"] = random.choice(NPCGenerator.races)
        npc["class"] = random.choice(NPCGenerator.classes)
        npc["stats"] = {
            "Strength": random.randint(1, 10),
            "Dexterity": random.randint(1, 10),
            "Intelligence": random.randint(1, 10),
            "Wisdom": random.randint(1, 10),
            "Charisma": random.randint(1, 10)
        }
        npc["armor"] = random.choice(NPCGenerator.armor_types)
        npc["weapon"] = random.choice(NPCGenerator.weapon_types)
        npc["likely_response"] = random.choice(NPCGenerator.likely_responses)
        
        return npc

# Example usage:

npc = NPCGenerator.generate_npc()
print("Race:", npc["race"])
print("Class:", npc["class"])
print("Stats:", npc["stats"])
print("Armor:", npc["armor"])
print("Weapon:", npc["weapon"])
print("Likely Response:", npc["likely_response"])