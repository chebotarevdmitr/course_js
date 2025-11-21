const person = {
  name: "Bob",
  age: 25,
};

const person2 = Object.assign({}, person);
person2.age = 26;
console.log(person2.age);
console.log(person.age);

const person3 = {
  name: "Bob",
  age: 25,
};

const person4 = { ...person };
console.log(person4);
person4.name = "Alece";
console.log(person);
console.log(person4);

const licho={

} 

console.log(person2.age);
console.log(person.age);
