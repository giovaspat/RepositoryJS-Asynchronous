let ourCondition = new Promise ((resolve, reject) => {
const number = 15;
if (number > 10) {
    resolve(number)
}else {
    reject(number)
}

});

ourCondition
    .then((value) => console.log(`${value} is bigger than 10` ))
    .catch((error) => console.log( `${error} is smaller than 10`))