// var hoisting example
function getValue(condition) {
  if (condition) {
    var value = "blue";
    return value;
  } else {
    // value exists here, but is undefined
    return null
  }
  // value exists here, but is undefined
}

function getValue2(condition) {
  if (condition) {
    let value = "blue";
    return value;
  } else {
    // value doesn't exist here
    return null
  }
    // value doesn't exist here
}
/* Summary:
 *  Default to const. Immutable code prevents bugs. Use let if you know the
 *  variable will need to change value.
 *  Not clear from this chapter if there are reasonable uses of var still?
 */
