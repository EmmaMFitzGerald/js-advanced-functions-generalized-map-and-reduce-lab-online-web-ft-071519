// Add your functions here
function map(array, func){
    let empty = []
    for (let i = 0; i  < array.length; i++){
    let el = array[i]
    empty.push(func(el))
    }
    return empty;
}

function reduce(array, func, startingPoint=0){
    let empty = []
    for (let i=0;  i < array.length; i++){
    let el = array[i]
    empty.push(func(el))
    }
    return empty;
}