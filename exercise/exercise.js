function printAsyncName (call, name) {
    setTimeout(() => {
        console.log(call())
    },1000);

    setTimeout(() => {
        console.log(name)
    }, 2000);
}

printAsyncName (() => "Hello", "Luca")
