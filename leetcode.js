
var merge = function(a, b) { 
    let c = []
    for (let i = 0; i < a.length && i < b.length; i++) {
        let x = Math.min(a[i], b[i])
        if (x === a[i]) {
            if (a[i] < c.at(c.length) ) {
                c.splice(c.length-1, 0, a[i])
                console.log(c)
            }
        } else {
            if (b[i] < c.at(c.length))
        }

    }
}

console.log(merge([1, 2, 6, 54, 55], [3, 5, 55]))
