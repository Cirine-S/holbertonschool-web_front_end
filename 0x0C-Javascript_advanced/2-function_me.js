function welcomeMessage (fullName) {
	return function X () {
		alert("Welcome" + fullName)
	}	
}

guillaume()

let guillaume = welcomeMessage("Guillaume")
let alex = welcomeMessage("Alex")
let fred = welcomeMessage("Fred")

