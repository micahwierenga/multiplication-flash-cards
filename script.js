function generateRandomNumber() {
	let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return range[Math.floor( Math.random() * range.length )];
}

function createMultiplicationProblem( multiplicand, multiplier ) {
	let newMultiplicand = ( multiplicand !== null ) ? multiplicand : generateRandomNumber();
	let newMultiplier = ( multiplier !== null ) ? multiplier : generateRandomNumber();
	let product = newMultiplicand * newMultiplier;

	document.getElementById( 'multiplicand' ).append( newMultiplicand );
	document.getElementById( 'multiplier' ).append( newMultiplier );
	document.getElementById( 'productInput' ).setAttribute( 'data', product );
}

function clearNumberDivsAndInput() {
	document.getElementById( 'multiplicand' ).innerHTML = '';
	document.getElementById( 'multiplier' ).innerHTML = '';
	document.getElementById( 'productInput' ).value = '';
}

function colorAndFadeBackground( color ) {
	let green = ( color === '#00FF00' ) ? 255 : 0;
	let red = ( color === '#FF0000' ) ? 255 : 0;
	let opacity = 1;
	let target = document.getElementById( 'bodyBackground' );
	target.style.background = color;
	let fadeEffect = setInterval( function() {
		if( !target.style.backgroundColor ) {
			target.style.backgroundColor = "rgba( " + red + ", " + green + ", 0, " + opacity + " )";
		}
		if( opacity > 0 ) {
			target.style.backgroundColor = "rgba( " + red + ", " + green + ", 0, " + opacity + " )";
			opacity -= 0.1;
		} else {
			clearInterval( fadeEffect );
		}
	}, 50 );
}

function checkAnswer() {
	let submittedAnswer = document.getElementById( 'productInput' ).value;
	let correctAnswer = document.getElementById( 'productInput' ).getAttribute( 'data' );
	if( submittedAnswer === correctAnswer ) {
		// colorAndFadeBackground( '#00FF00' );
		// clearNumberDivsAndInput();
		// createMultiplicationProblem();
		handleAnswer( true );
	} else {
		

		// colorAndFadeBackground(  );
		// clearNumberDivsAndInput();
		// createMultiplicationProblem( existingMultiplicand, existingMultiplier );
		handleAnswer( false );
	}
	
}

function handleAnswer( isRight ) {
	let color = isRight ? '#00FF00' : '#FF0000';
	let existingMultiplicand = isRight ? null : document.getElementById( 'multiplicand' ).innerHTML;
	let existingMultiplier = isRight ? null : document.getElementById( 'multiplier' ).innerHTML;
	colorAndFadeBackground( color );
	clearNumberDivsAndInput();
	createMultiplicationProblem( existingMultiplicand, existingMultiplier );
}

createMultiplicationProblem( null, null );