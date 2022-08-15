//利用数组找到最小的数

//两数之间找到最小的数
let minOf2 = (numbers) => {
    if (numbers[0] < numbers[1]) {
        return numbers[0]
    } else {
        return numbers[1]
    }
}

/* 代码优化
let minOf2 = numbers => {
    numbers[0] < numbers[1] ? numbers[0] : numbers[1]
}
*/
/* 代码再优化
let minOf2 = ([a, b]) => {
    a < b ? a : b
}
*/

//调用方式
minOf2([1, 2])
minOf2.call(null, [1, 2])

//三数之间找到最小的数

let minOf3 = ([a, b, c]) => {
    return minOf2(a.minOf2(b, c))
}

//或者
/* let minOf3 = ([a, b, c]) => {
    return minOf2(minOf2(a, b), c)
} */

//同理找到四数之间最小的数

let minOf4 = ([a, b, c, d]) => {
    minOf2(a, minOf3(b, c, d))
}


//任意长度数组求最小值
let min = (numbers) => {
    if (numbers.length > 2) {
        return min(
            [numbers[0], min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null, numbers)
    }
}