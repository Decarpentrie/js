var solution = Math.floor(Math.random() * 4);

console.log(solution);

var response = prompt("quel est le bon chiffre");

console.log(response);

for (var response = 0; response < 3; response ++) {
	
	if (solution == response) {
	console.log ("gagner!");
	

	
	

} else if (solution < response) {
	console.log ("perdu");
	prompt("perdu trop petit");
	

}else if(solution > response) {
console.log ("perdu");
	prompt("perdu trop grand ");
	
}
	
}





























