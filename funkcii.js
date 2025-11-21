let num1 = 5;
let num2 = 8;
/* let c;
 c = num1 + num2; console.log(c);
 num1 = 8;
 num2 = 12;
 c = num1 + num2;
 console.log(c);
 */
function sum(num1, num2) {
  const c = num1 + num2;
  console.log(c);
}
sum(num1, num2); //13
num1 = 8;
num2 = 12;
sum(num1, num2); //20

function myfn(g, h) {
  let c;
  g = g + 1;
  c = g + h;
  return c;
}
console.log(myfn(1, 1));
/*
const personOne = {
  name: "Bob",
  age: 21,
};
function increasePersonAge(person) {
  person.age += 1;
  return person;
}
increasePersonAge(personOne);
console.log(personOne.age);
*/
const personOne = {
  name: "Bob",
  age: 21,
};

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, personOne);
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age); // объект "personOne" не изменился name "Bob" age =21
console.log(updatedPersonOne.age); //22
