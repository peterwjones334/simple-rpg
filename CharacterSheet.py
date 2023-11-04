#python - character sheet

def generate_character_sheet(character):
    sheet = f"# Character Sheet: {character['name']}\n\n"
    sheet += f"**Race:** {character['race']}\n\n"
    sheet += f"**Class:** {character['class']}\n\n"
    sheet += f"**Level:** {character['level']}\n\n"
    sheet += f"**Attributes:**\n\n"
    for attr, value in character['attributes'].items():
        sheet += f"- {attr.capitalize()}: {value}\n"
    sheet += "\n"
    sheet += f"**Skills:**\n\n"
    for skill, rank in character['skills'].items():
        sheet += f"- {skill.capitalize()}: {rank}\n"
    sheet += "\n"
    sheet += f"**Inventory:**\n\n"
    for item in character['inventory']:
        sheet += f"- {item}\n"
    return sheet

# Example character data
character_data = {
    "name": "Gandalf",
    "race": "Human",
    "class": "Wizard",
    "level": 10,
    "attributes": {
        "strength": 12,
        "dexterity": 10,
        "constitution": 14,
        "intelligence": 18,
        "wisdom": 16,
        "charisma": 14
    },
    "skills": {
        "arcana": 8,
        "history": 6,
        "persuasion": 4
    },
    "inventory": ["Staff", "Spellbook", "Potion of Healing"]
}

# Generate character sheet
character_sheet = generate_character_sheet(character_data)

# Print or save the character sheet
print(character_sheet)