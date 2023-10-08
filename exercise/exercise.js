function repeatHello (call) {
let id = setInterval(() => {
    call();
}, 1000);

setTimeout(() => {
    clearInterval(id)
}, 5000);
}

repeatHello(() => {         
    console.log("Hello")
} )
