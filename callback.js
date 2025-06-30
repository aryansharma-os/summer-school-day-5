function processNumber(num, callback){
    callback(num)
}

function number1(num){
    console.log(num)
}

processNumber(5,number1)