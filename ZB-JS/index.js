// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    const sorted = input.sort((a,b) => a - b) 
    const length = sorted.length
    if (length % 2 == 0) {
        const middleVal= (length/2);
        const firstVal = sorted[middleVal-1];
        const secondVal = sorted[middleVal] 
        return (firstVal + secondVal) / 2;
    } else {
        const middleVal= (length-1)/2;
        return sorted[middleVal]
    }
}

console.log(result(input));

// to run the app open the terminal to ZB-JS then run node index.js