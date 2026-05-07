def step(grid):
    rows = len(grid)
    cols = len(grid[0])

    new_grid = []

    for i in range(rows):
        row = []
        for j in range(cols):
            me = grid[i][j]
            up = grid[i-1][j] if i > 0 else 0
            down = grid[i+1][j] if i < rows-1 else 0
            left = grid[i][j-1] if j > 0 else 0
            right = grid[i][j+1] if j < cols-1 else 0

            value = max(me, up, down, left, right)
            row.append(value)

        new_grid.append(row)

    return new_grid


grid = [
    [0,0,0,0,0],
    [0,1,0,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,0,0,0,0]
]

print(step(grid))

def sqrt_newton(a, n):
    x = 1

    for i in range(n):
        x = (x + a/x) / 2

    return x

print(sqrt_newton(9,5))

