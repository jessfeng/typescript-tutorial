// type alias
type Combinable = number | string;
// literal type
type ConversionDescriptor = 'as-num' | 'as-str'


// union type
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && input2 === 'number' || resultConversion === 'as-num') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-num');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-str');
console.log(combinedNames);

