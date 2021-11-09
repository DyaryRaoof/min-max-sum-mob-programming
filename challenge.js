function miniMaxSum(arr) { 
    arr.sort((a , b) => a - b);
    let minSum = arr.slice(1, 5).reduce((a,b) => a+b);
    let maxSum = arr.slice(0, 4).reduce((a,b) => a+b);
        console.log(`${maxSum} ${minSum}`);
}

// Expected output 10 14
miniMaxSum([1, 2, 3, 4, 5]);