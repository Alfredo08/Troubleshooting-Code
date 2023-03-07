// Logical error "Out of bounds / NaN"

let numbers = [ 1, 2, 3 ];
let sum = 0;

for( let i = 0; i <= numbers.length; i ++ ){
    sum += numbers[ i ];
}

console.log( sum );