const loginPro = new Promise ((resolve, reject) => {
    const isLogged = true;
    if (isLogged == true ) {
        let number =  Math.random() 
        resolve(number)
    } else {
        reject("Error ONE")
    }

});

loginPro 
    .then ((result) => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
            if (result > 0.5) {
                resolve (`{name : John ; age : 24}`)
            } else {
                reject ("Error TWO")
            }
            }, 3000)
        })
    })


     .then ((fulfilledResult) => {
    console.log(fulfilledResult);
  })
    .catch ((rejectedResult) => {
    console.error(rejectedResult)
    })

    

