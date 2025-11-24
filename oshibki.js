const fnWithError = () => {
  throw new Error("some error");
};

fnWithError();
 
console.log("continue ...")

