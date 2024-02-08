localStorage.setItem("message", "I just stored this in the local storage")

localStorage.clear()

sessionStorage.setItem("message", "Hello")

sessionStorage.clear()

function doSomethingWithData(someData){
	console.log("I just do something with some data " + someData)
}

// doSomethingWithData("some sweet string")

function doSomethingReturnsAString(){
	return "this is easy "
}

let result = doSomethingReturnsAString() + doSomethingReturnsAString()

console.log(result)


function doSomethingThatReturnsSomething(someData){
	return "this is easy" + someData
}

let result2 = doSomethingThatReturnsSomething(" ikke sant?")

console.log(result2)