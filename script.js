function generateRandomNumber() {
	let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return range[Math.floor( Math.random() * range.length )];
}

function createMultiplicationProblem() {
	let multiplicand = generateRandomNumber();
	let multiplier = generateRandomNumber();
	let product = multiplicand * multiplier;

	document.getElementById( 'multiplicand' ).append( multiplicand );
	document.getElementById( 'multiplier' ).append( multiplier );
	document.getElementById( 'productInput' ).setAttribute( 'data', product );
}

function checkAnswer() {
	let submittedAnswer = document.getElementById( 'productInput' ).value;
	let correctAnswer = document.getElementById( 'productInput' ).getAttribute( 'data' );
	if( submittedAnswer === correctAnswer ) {
		console.log( 'Well done' );
	} else {
		console.log( 'Try again' );
	}
}

createMultiplicationProblem();