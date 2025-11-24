const myFunction = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3); // 9
console.log(myFunction(5, 3));

setTimeout(() => {
  console.log("Отложенное сообщение");
}, 1000);
