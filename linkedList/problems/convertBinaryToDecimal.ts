const convertBinaryToDecimal = (binaries: number[]): number => {
    let result = 0
    for(let i = 0; i < binaries.length; i++) {
        result = result * 2 + binaries[i]
    }
    return result
}

console.log(convertBinaryToDecimal([1,0,1,0,1,0]))