#python - Code to generate adventure outline

import random

class AdventureGenerator:
    quests = ["Retrieve an artifact", "Rescue a captive", "Slay a monster", "Uncover a secret", "Deliver an important message"]
    locations = ["Ancient ruins", "Enchanted forest", "Mysterious caverns", "Haunted castle", "Lost city"]
    NPCs = ["Mysterious wizard", "Skilled rogue", "Wise old sage", "Brave knight", "Shady merchant"]

    @staticmethod
    def generate_adventure():
        adventure = {}
        adventure["quest"] = random.choice(AdventureGenerator.quests)
        adventure["location"] = random.choice(AdventureGenerator.locations)
        adventure["npc"] = random.choice(AdventureGenerator.NPCs)
        adventure["encounters"] = AdventureGenerator.generate_encounters()
        return adventure

    @staticmethod
    def generate_encounters():
        num_encounters = random.randint(3, 6)
        encounters = []
        for _ in range(num_encounters):
            encounter = {
                "location": random.choice(AdventureGenerator.locations),
                "npc": random.choice(AdventureGenerator.NPCs),
                "description": "A challenge awaits..."
            }
            encounters.append(encounter)
        return encounters

# Example usage:

adventure = AdventureGenerator.generate_adventure()

print("Adventure Outline:")
print("Quest:", adventure["quest"])
print("Location:", adventure["location"])
print("NPC:", adventure["npc"])
print("Encounters:")
for i, encounter in enumerate(adventure["encounters"]):
    print(f"\nEncounter {i+1}:")
    print("Location:", encounter["location"])
    print("NPC:", encounter["npc"])
    print("Description:", encounter["description"])
