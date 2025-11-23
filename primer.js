/*
boolean(value)-> false false
          0
           ' '
            undefined
               null

let b = 10;
b && console.log("выполнено");

let c;
c && console.log("выполнено");
*/

/*
const button = {
  width: 200,
  text: "buy",
};
const redButton = {
  ...button,
  color: "red",
};
console.table(redButton);
*/

const buttonInfo = {
  text: "Buy",
};
const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};
const button = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(button);
