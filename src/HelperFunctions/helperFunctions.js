export const runFib = (input, y, z) => {
    if (input === 0) {
        return [];
    } else if (input === 1) {
        return [1];
    }
    const fibSeq = [1, 1]
    for (let i = 3; i <= input; i++) {
        if (fibSeq[i - 1 - y] === undefined || fibSeq[i - 1 - z] === undefined) {
            fibSeq.push(1);
            continue;
        } else {
            fibSeq.push(fibSeq[i - 1 - y] + fibSeq[i - 1 - z])
        }
    }
    return fibSeq;
}

export const runFizzBuzz = (rules, input) => {
    const values = [];
    for (let i = 1; i <= input; i++) {
        let string = '';
        for (const rule of rules) {
            if (i % rule.divisor === 0) string += rule.output;
        }
        if (string === '') values.push(i);
        else values.push(string);
    }
    return values;
}

export const runFizzBuzzList = (rules, list) => {
    const values = [];
    for (let i = 0; i < list.length; i++) {
        let string = '';
        for (const rule of rules) {
            if (list[i] % rule.divisor === 0) string += rule.output;
        }
        if (string === '') values.push(list[i]);
        else values.push(string);
    }
    return values; 
}