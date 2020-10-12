console.log('code');

/*
Types:
- number (1, 5.3, -10)
- string ('Hi', "Hi", `Hi`)
- boolean (true, false) --> no truthy/falsy values
- object ({age: 30}; {})
- array ([1, 2, 3])
- tuple ([1,2]) --> fixed-length array (ts special!)
- enum (enum{NEW, OLD})
- any type (*) --> avoid!!
- unknown --> like any, but better
- never --> usually for errors
*/

function add(a: number, b: number, show: boolean, phrase: string) {
  const res = a + b;
  if (show) {
    console.log(phrase + res);
  }
  else {
    return res;
  }
}

const a = 5;
const b = 2.3;

add(a, b, true, "The result is ");