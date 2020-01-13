setTimeout(() => {
    console.log('1');
}, 0);

setImmediate(() => {
    console.log('6');
})

setTimeout(() => {
    console.log('2');
}, 0);

process.nextTick(() => {
    setImmediate(() => {
        console.log('8');
    })
});


    setTimeout(() => {
        console.log('9');
    }, 0)

setImmediate(() => {
    console.log('7');
})

setTimeout(() => {
    console.log('3');
}, 0);

setTimeout(() => {
    console.log('4');
}, 0);


setImmediate(() => {
    console.log('5');
})


