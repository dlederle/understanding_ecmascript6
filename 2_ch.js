const gao = "高";

console.log("Basic unicode operations:");
console.log(gao.length); // 1
console.log(/^.$/.test(gao)); // true
console.log(gao.charAt(0)); // 高
console.log(gao.charAt(1)); // ''
console.log(gao.charCodeAt(0)); // 39640
console.log(gao.charCodeAt(1)); // NaN
console.log(gao.codePointAt(0)); // 39640

// Snazzy!
console.log(String.fromCodePoint(134071)); // 𠮷

// skipping section on unicode normalization

const kanji = "𠮷";

console.log("Regex and unicode:");
console.log(kanji.length); // 2
console.log(/^.$/.test(kanji)); // false
console.log(/^.$/u.test(kanji)); // true

console.log("Substring Operations:");
console.log("ABCD".includes("ABC")); // true
console.log("ABCD".includes("abc")); // false
console.log("ABCD".endsWith("D")); // true
console.log("ABCD".startsWith("A")); // true

// Handy
console.log("x".repeat(3)); // xxx

console.log("Template Literals");

const message = `Hello World`;
console.log(typeof message); // String

const name = "Dylan",
  message2 = `Hello ${name}!`;

console.log(message2);

const count = 10,
  price = 0.25,
  message3 = passthru`${count} items cost $${(count * price).toFixed(2)}`;

//Passthru mimics the default template behavior
function passthru(literals, ...substitutions) {
  let result = "";

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  result += literals[literals.length - 1];
  return result;
}

console.log(message3);

const multiline1 = `Multiline\nString`,
  multiline2 = String.raw`Multiline\nString`;

console.log(multiline1);
console.log(multiline2);

/**
 * Summary:
 * ES6 provides a bunch of new string operations.
 * The unicode stuff is interesting, but not especially useful to me.
 * I had used template literals, but hadn't read about tags before.
 * I wish this chapter had a little bit more about how to use them to create DSLs.
 * I wonder if they would make it easier / possible to go through more of SICP...
 *
 */
