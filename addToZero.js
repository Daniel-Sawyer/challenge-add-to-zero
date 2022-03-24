// Starting array
let array = [28, 43, -12, 4, 4, 0, 13]

// Write your solution below:
let result = 'false'
for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array.length; x++){
        if( i !== x){
        if(array[i] + array[x] === 0){
            result = 'true'
    }      
    }
}
}
console.log(result)