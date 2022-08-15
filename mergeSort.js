let mergeSort = arr => {
    let n = arr.length
    if (n === 1) {
        return arr
    }
    let left = arr.slice(0, Math.floor(n / 2))
    let right = arr.slice(Math.floor(n / 2))
    return merge(mergeSort(left), mergeSort(right))
}

let merge = (a, b) => {
    if (a.length === 0) {
        return b
    }
    if (b.length === 0) {
        return a
    }
    if (a[0] > b[0]) {
        return [b[0]].concat(merge(a, b.slice(1)))

    } else {
        return [a[0]].concat(merge(a.slice(1), b))
    }
}