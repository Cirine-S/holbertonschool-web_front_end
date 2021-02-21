function changeMode(size, weight, transform, background, color) {
	return function () {
	  document.body.style.fontSize = size
	  document.body.style.fontWeight = weight
	  document.body.style.textTransform = transform
	  document.body.style.backgroundColor = background
	  document.body.style.color = color
	};
  }
  
function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkmode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
	let p = document.createElement("p");
	p.innerHTML = "Welcome Holberton!";
	document.body.appendChild(p);
  
	let spookyButton = document.createElement("button");
	spookyButton.innerHTML = "Spooky";
	spookyButton.onclick = function() {
	  spooky();
	};
	document.body.appendChild(spookyButton);
  
	let darkButton = document.createElement("button");
	darkButton.innerHTML = "Dark mode";
	darkButton.onclick = function() {
	  darkmode();
	};
	document.body.appendChild(darkButton);
  
	let screamButton = document.createElement("button");
	screamButton.innerHTML = "Scream mode";
	screamButton.onclick = function() {
	  screamMode();
	};
	document.body.appendChild(screamButton);
}
  
main();