/* let countSort = arr => {
    let hashTable = {}, max = 0, result = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1
        } else {
            hashTable[arr[i]] += 1
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        for (let j = 0; j <= max; j++) {
            if (j in hashTable) {
                result.push(j)
            }
        }
    }
    return result
}

如果j出现多次，该代码由bug
 */
let countSort = arr => {
    let hashTable = {}, max = 0, result = []
    for (let i = 0; i < arr.length; i++) { // 遍历数组
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1
        } else {
            hashTable[arr[i]] += 1
        }
        if (arr[i] > max) { max = arr[i] }
    }
    for (let j = 0; j <= max; j++) { // 遍历哈希表
        if (j in hashTable) {
            for (let k = 0; k < hashTable[j]; k++) {
                result.push(j)
            }
        }
    }
    return result
} 