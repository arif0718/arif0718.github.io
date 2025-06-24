//closure
// A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing.
function main() {
    let b=1;
    function sub(){
        return b++;
    }
    return sub;
}

const closure = main();
console.log(closure()); // 1
console.log(closure()); // 2