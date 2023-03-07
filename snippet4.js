// Logical error "Circular reference"

let student1 = {
    firstName : "Alex"
};

let student2 = {
    firstName : "Martha"
}

student1.pair = student2;
student2.pair = student1;

console.log( student1 );