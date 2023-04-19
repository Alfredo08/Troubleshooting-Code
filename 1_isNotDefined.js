// Scope and "is not defined" errors

for( var i = 1; i <= 10; i ++ ){
    console.log( i );
}

console.log( [i] );

let message = "Hello world";
let subMessage = message.substring( 6 );

console.log( subMessage );