
function sum(fromN, toN) { 
if (toN === fromN) return toN;
return toN + sum(fromN, toN - 1);
}

console.log(sum(3,7));
module.exports = sum;