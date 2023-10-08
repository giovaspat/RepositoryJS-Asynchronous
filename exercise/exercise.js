function repeatHello (call) {
setInterval(() => {
    call();
}, 1000);

}

repeatHello(() => {             //qui usiamo una funzione callback anonima che viene accettata come argomento dalla function repeatHello,
    console.log("Hello")        //per cui a questo console.log sarà applicato il setInterval della function repeatHello
} )


