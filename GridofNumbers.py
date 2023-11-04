#python - Grid of Numbers

def generate_dice_grid(dice_expression, rows, columns):
    # Calculate the maximum value based on the dice expression
    dice_max = int(dice_expression.split("d")[-1]) + int(dice_expression.split("d")[0]) - 1

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