const gao = '高';

console.log('Basic unicode operations:');
console.log(gao.length);        // 1
console.log(/^.$/.test(gao));   // true
console.log(gao.charAt(0));     // 高
console.log(gao.charAt(1));     // ''
console.log(gao.charCodeAt(0)); // 39640
console.log(gao.charCodeAt(1)); // NaN
console.log(gao.codePointAt(0));// 39640

// Snazzy!
console.log(String.fromCodePoint(134071)); // 𠮷

// skipping section on unicode normalization

const kanji = '𠮷';

console.log('Regex and unicode:');
console.log(kanji.length);        // 2
console.log(/^.$/.test(kanji));   // false
console.log(/^.$/u.test(kanji));  // true


console.log('Substring Operations:');
console.log('ABCD'.includes('ABC')); // true
console.log('ABCD'.includes('abc')); // false
console.log('ABCD'.endsWith('D'));   // true
console.log('ABCD'.startsWith('A')); // true

// Handy
console.log("x".repeat(3));          // xxx


console.log('Template Literals');
