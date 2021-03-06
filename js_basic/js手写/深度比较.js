function deepCompare(a, b) {
    if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') return a === b
    const propsA = Object.getOwnPropertyDescriptors(a)
    const propsB = Object.getOwnPropertyDescriptors(b)
    if (Object.keys(propsA).length !== Object.keys(propsB).length) return false
    return Object.keys(propsA).every((key) => deepCompare(a[key], b[key]))
}

console.log(deepCompare({
    a: 1,
    b: 1,
    c: {
        a : 1
    }
}, {
    a: 1,
    b: 1,
    c: {
        a : 1,
        c: 3
    }
}))