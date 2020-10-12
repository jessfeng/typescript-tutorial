// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string];
// } = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// assigns names to numbers (maps values) --> group of constants
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin'); // exception

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}