const bubbleSort = (input: number[]) => {
    console.time('time taken by bubble sort to sort 300 integar')
    let large = null
    let count = 0

    while(count < input.length) {
        large = input[0]
        for(let j = 0; j < input.length; j++) {
            if(input[j+1] !== undefined) {
                if(large < input[j+1]) {
                    large = input[j+1]
                } else {
                    let current = input[j]
                    let next = input[j+1]
                    input.splice(j, 1, next)
                    input.splice(j + 1, 1, current)
                    large = current
                }
            }
        }
        count++
    } 

    console.timeEnd('time taken by bubble sort to sort 300 integar')
    return input
}

console.dir(bubbleSort([155, 163, 193, 68, 54, 74, 181, 3, 170, 68, 143, 42, 145, 178, 49, 176, 161, 50, 111, 81, 115, 170, 84, 109, 187, 197, 199, 59, 88, 27, 156, 37, 142, 36, 71, 171, 50, 48, 121, 106, 158, 71, 142, 58, 159, 51, 178, 11, 70, 87, 121, 112, 107, 52, 196, 198, 57, 69, 122, 10, 115, 71, 13, 30, 112, 14, 11, 85, 70, 184, 37, 119, 136, 23, 170, 70, 97, 50, 190, 147, 55, 146, 13, 42, 166, 144, 132, 92, 131, 116, 137, 64, 28, 106, 83, 111, 65, 109, 10, 111, 142, 19, 54, 172, 62, 97, 191, 14, 150, 42, 22, 191, 80, 55, 164, 117, 81, 166, 161, 112, 157, 100, 26, 184, 187, 13, 135, 6, 184, 103, 7, 88, 29, 6, 191, 181, 103, 126, 101, 197, 138, 22, 132, 72, 38, 85, 167, 15, 154, 46, 37, 174, 141, 189, 38, 132, 36, 158, 104, 3, 140, 157, 148, 122, 46, 170, 95, 193, 169, 149, 145, 152, 121, 34, 6, 11, 180, 25, 58, 40, 86, 197, 171, 106, 193, 95, 90, 33, 125, 123, 177, 146, 172, 61, 46, 88, 4, 121, 11, 29, 61, 144, 0, 184, 86, 92, 71, 81, 180, 91, 35, 50, 150, 30, 14, 92, 6, 58, 78, 137, 152, 165, 41, 54, 154, 142, 18, 47, 1, 153, 164, 45, 83, 34, 5, 92, 139, 171, 152, 65, 6, 78, 133, 185, 45, 131, 192, 20, 136, 125, 36, 183, 139, 101, 61, 179, 98, 114, 170, 150, 21, 153, 143, 123, 157, 59, 137, 145, 48, 197, 64, 144, 116, 17, 92, 90, 128, 195, 82, 51, 195, 0, 178, 7, 0, 19, 185, 43, 86, 43, 79, 101, 149, 105, 65, 85, 172, 111, 101, 48]), {maxArrayLength: null})