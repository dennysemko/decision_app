var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Bob";
nameLet = "Gina";
console.log("nameLet", nameLet);

const nameConst = "Carl";
console.log("nameConst", nameConst);

/*var, let and const are function-scoped.

function getPetName() {
    var petName = "haha";
    return petName;
}

console.log(petName);
*/

/* let and cost are block-level-scoped.
in if and for statements
define let before block and u can reassign through block.
can't define in block and access outside of block.
*/