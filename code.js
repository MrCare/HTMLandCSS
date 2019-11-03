var word = "bottles";
var count = 99;

alert("fuck")
while (count > 0){
	console.log(count + " " + word + " of beer on the wall,");
	console.log(count + " " + word + " of beer,");
	console.log("Take one down, pass it around,");
	count -= 1;
	if (count > 0){
		console.log(count + " " + word + "of beer on the wall.");
	}
	else{
		console.log("No nore " + word + " of beer on the wall.");
	}
}