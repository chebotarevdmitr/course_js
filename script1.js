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
