
//长度为2数组排序
let sort2 = ([a, b]) => {
    if (a < b) {
        return [a, b]
    } else {
        return [b, a]
    }
}

/*  代码优化 
let sort2 = ([a, b]) => {
    a < b ? [a, b] : [b, a]
} */

//长度为3数组排序
let sort3 = (numbers) => {
    let index3 = minIndex(numbers)
    let min = numbers[index3]
    numbers.splice(index3, 1)
    return [min].concat(sort2(numbers))
}

//任意长度数组排序
let min = (numbers) => {
    if (numbers.length > 2) {
        return min(
            [numbers[0], min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null, numbers)
    }
}
let minIndex = (numbers) => {
    return numbers.indexOf(min(numbers))
}
let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)// 获得数组里最小值的下标
        let min = numbers[index]  //获得上一行的值，即最小值
        numbers.splice(index, 1)//删除一个下标为index的值 
        return [min].concat(sort(numbers))//返回[min]+sort（numbers）
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
}

