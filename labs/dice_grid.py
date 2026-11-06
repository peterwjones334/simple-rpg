# Demo only. Prints a numbered grid derived from a dice expression.
# A layout sketch, not an SRPG check or a probability table.

#python - Grid of Numbers

import re

def generate_dice_grid(dice_expression, rows, columns):
    # Span of the grid: sides + count - 1, as this sketch always did.
    # A trailing +N / -N is ignored so an expression like "4d6 + 2" still runs.
    parts = dice_expression.lower().split("d")
    count = int(re.search(r"\d+", parts[0]).group())
    sides = int(re.search(r"\d+", parts[-1]).group())
    dice_max = sides + count - 1

    # Create the grid of numbers
    grid = []
    for i in range(rows):
        row = []
        for j in range(columns):
            value = i * columns + j + 1
            if value <= dice_max:
                row.append(value)
            else:
                row.append(None)
        grid.append(row)

    return grid

def print_dice_grid(grid):
    max_value_length = len(str(grid[-1][-1])) + 2
    for row in grid:
        for value in row:
            if value is None:
                print(" " * max_value_length, end=" ")
            else:
                print(f"{value:>{max_value_length}}", end=" ")
        print()

# Example usage
dice_expression = "4d6 + 2"
rows = 6
columns = 8

grid = generate_dice_grid(dice_expression, rows, columns)
print_dice_grid(grid)