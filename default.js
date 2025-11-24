function multByFactor(value, multiplier = 1) {
  //значение параметра по умолчанию multiplier = 1
  return value * multiplier;
}

console.log(multByFactor(10, 2)); //20
console.log(multByFactor(5)); //5
console.log(Date());

const newPost =(post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: "Dima",
}

console.log(newPost(firstPost));