

function getNumbersAndSumOfDivisors(maxNum: number) {
    let result = new Map<number,number>();
    for(let i=6;i<=maxNum;i++){
        result.set(i,sumDivisorsOfNum(i));
    }
    return result;
}

function AmicablePairsFunc(maxNum:number){
    let myNumbers = getNumbersAndSumOfDivisors(maxNum);
}

export {AmicablePairsFunc}
