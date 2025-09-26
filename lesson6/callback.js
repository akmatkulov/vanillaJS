function firstFunc() {
    console.log("Hey I am callback function")
}

function funcWithCallback(callbackFunction) {
    callbackFunction()
}

funcWithCallback(firstFunc)