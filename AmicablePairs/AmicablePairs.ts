function sumDivisorsOfNum(input: number) {
    let result = 1;
    for (let i = 2; i < Math.sqrt(input); i++) {
        if (input % i === 0) {
            result += i + input / i;
        }
    }
    if (input % Math.sqrt(input) === 0) {
        result += Math.sqrt(input);
    }
    return result;
}

function getNumbersAndSumOfDivisors(maxNum: number) {
    let result = new Map<number, number>();
    for (let i = 2; i <= maxNum; i++) {
        result.set(i, sumDivisorsOfNum(i));
    }
    return result;
}

function AmicablePairsFunc(maxNum: number) {
    const myNumbers = getNumbersAndSumOfDivisors(maxNum);
    let result = [];
    for(let n=2;n<=maxNum;n++){
        const m = myNumbers.get(n);
        if(n!==m && myNumbers.get(m)===n){
            result.push([n,m]);
        }
    }
    return result;
}

export {AmicablePairsFunc}
