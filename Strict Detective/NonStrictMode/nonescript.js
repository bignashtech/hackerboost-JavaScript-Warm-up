// Non-strict mode example

x = 10;
console.log(x);

function test() {
  y = 20; // In non-strict mode, this creates a GLOBAL variable by mistake
}
test();
console.log(y);

/*
a) What happens in non-strict mode?
- It works and prints:
  10
  20

b) Why it worked?
- JS silently creates global variables when you forget to write "let/const/var" before declaring a variable.

  So x and y become global variables without you intending it which is accessible from anywhere in the code.
*/
