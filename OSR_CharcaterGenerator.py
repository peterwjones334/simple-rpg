import random

def roll_stat():
    return sum(sorted(random.randint(1, 6) for _ in range(3))[1:])

def generate_stats():
    stats = {}
    stats['STR'] = roll_stat()
    stats['DEX'] = roll_stat()
    stats['CON'] = roll_stat()
    stats['INT'] = roll_stat()
    stats['WIS'] = roll_stat()
    stats['CHA'] = roll_stat()
    return stats

def generate_stats_for_class(character_class):
    class_stats = {
        'fighter': {'STR': 15, 'DEX': 12, 'CON': 13, 'INT': 9, 'WIS': 8, 'CHA': 10},
        'rogue': {'STR': 12, 'DEX': 15, 'CON': 11, 'INT': 10, 'WIS': 8, 'CHA': 13},
        'wizard': {'STR': 9, 'DEX': 12, 'CON': 10, 'INT': 15, 'WIS': 8, 'CHA': 11}
    }
    base_stats = class_stats.get(character_class.lower())
    if not base_stats:
        return None
    
    stats = generate_stats()
    for stat, value in base_stats.items():
        stats[stat] = max(value, stats[stat])
    
    return stats

# Example usage
character_class = 'fighter'
stats = generate_stats_for_class(character_class)
if stats:
    print(f"Stats for a {character_class}: {stats}")
else:
    print(f"Invalid character class: {character_class}")