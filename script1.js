const myCity = {
  city: "Sevastopol",
  cityGreeting: function () {
    console.log("Greeting !!");
  },
  cityGreeting2() {
    console.log("Greeting 2 !!!");
  },
};
console.log(myCity.city);
myCity.cityGreeting();
myCity.cityGreeting2();
/*
JSON.parse()      //конвертация JSON в объект 
JSON.stringify() //конвертация объекта в JSON
*/
const a = 10;
let b = a;
b = 30;
console.log(a); //10
console.log(b); //30
//копирование ссылочного типа
const person = {
  name: "Joe",
  age: 21,
};

person.age = 22;
person.isAdult = true;
console.log(person.age);
console.log(person.isAdult);

const person2 = person;
person2.age = 26;
person2.isAdult = false;

console.log(person.age);
console.log(person.isAdult);
