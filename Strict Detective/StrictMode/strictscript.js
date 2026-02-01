// Strict mode example
'use strict';

// x = 10; // ❌ ReferenceError: x is not defined (must declare with let/const/var)
x = 10;
console.log(x);

function test() {
  // y = 20; // ❌ ReferenceError: y is not defined (must declare it)
  y = 20;
}

test();

// console.log(y); // ❌ ReferenceError: y is not defined (y is local to test)
console.log(y);

/*
OBSERVE (Strict):
a) What happens?
- If you try x = 10 or y = 20 without declaring, it throws ReferenceError.

b) Why?
- Strict mode prevents accidental global variables and forces safer coding.

c) Why modern developers prefer strict mode?
- It catches mistakes early (before they become big bugs) and also avoids weird JS silent behaviors.
*/
