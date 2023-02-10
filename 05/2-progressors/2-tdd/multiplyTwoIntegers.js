export const multiplyTwoIntegers = (x, y) => {
    if (typeof x !="number" || typeof y != "number") {
        return "Inputs must be a number."
    }
    if (!Number.isInteger(x+y)) {
        return "Integers only."
    }
    return x*y
}
