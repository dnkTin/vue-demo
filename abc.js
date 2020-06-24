const a = [
    {
        b1: 'b1 ne',
        c1: 'c1 ne',
        d1: 'd1 ne',
        e1: 'e1 ne',
    },
    {
        b1: 'b2 ne',
        c1: 'c2 ne',
        d1: 'd2 ne',
        e1: 'e2 ne',
    },
    {
        b1: 'b3 ne',
        c1: 'c3 ne',
        d1: 'd3 ne',
        e1: 'e3 ne',
    }
    ,
    {
        b1: 'b4 ne',
        c1: 'c4 ne',
        d1: 'd4 ne',
        e1: 'e4 ne',
    }
];
function doi(index1, index2) {
    let keysOfA = Object.keys(a[0]);
    let temp = keysOfA[index1];
    keysOfA[index1] = keysOfA[index2];
    keysOfA[index2] = temp;
    let newOrder = [];
    for (let i = 0; i < a.length; i++) {
        let obj = {};
        for (let idx = 0; idx < keysOfA.length; idx++) {
            obj[keysOfA[idx]] = a[i][keysOfA[idx]];
        }
        newOrder.push(obj);
    }
    console.log(newOrder);
}
doi(1, 3)