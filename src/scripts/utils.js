const cells = ['30', '20', '51', '01', '62', '63', '03', '64', '54', '44', '34', '24', '14']

export const heavyWeightSpaceshipCell = (x, y) => {
    const coor = `${x}${y}`
    return cells.includes(coor)
}
