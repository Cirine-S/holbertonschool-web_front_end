function divideBy(firstNumber) {

	return function A (secondNumber) {
		return secondNumber / firstNumber
	}
}

function addBy(firstNumber) {

	return function B(secondNumber) {
		return firstNumber + secondNumber
	}
}

addBy100 = addBy(100)
addBy1000 = addBy(1000)
divideBy10 = divideBy(10)
divideBy100 = divideBy(100)