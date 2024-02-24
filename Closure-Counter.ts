const x = (x) => () => x++

const a = x(1)

console.log(a())
console.log(a())
console.log(a())
console.log(a())

