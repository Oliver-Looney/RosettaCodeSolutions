export function DoorsFunc(numDoors: number) {
    let result: number[] = [];

    function getNumOfDivisors(input: number) {
        let sum = 0;
        for (let i = 1; i < Math.sqrt(input); i++) {
            if (input % i === 0) {
                sum += 2;
            }
        }
        if (input % Math.sqrt(input) === 0) {
            sum++;
        }
        return sum;
    }

    for (let i = 1; i <= numDoors; i++) {
        if (getNumOfDivisors(i) % 2 === 1) {
            result.push(i);
        }
    }

    return result;
}
