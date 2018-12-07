$(function(){
	let divTableCellBackgroundColor = '#5BA4C4';
	$( '.divTableCell' ).css( 'background-color', divTableCellBackgroundColor );
	function generateRandomNumber() {
		let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		return range[Math.floor( Math.random() * range.length )];
	}

	function createMultiplicationProblem( multiplicand, multiplier ) {
		$( '#productInput' ).html( '' );
		let newMultiplicand = ( multiplicand !== null ) ? multiplicand : generateRandomNumber();
		let newMultiplier = ( multiplier !== null ) ? multiplier : generateRandomNumber();
		let product = newMultiplicand * newMultiplier;

		$( '#multiplicand' ).html( newMultiplicand );
		$( '#multiplier' ).html( newMultiplier );
		$( '#productInput' ).attr( 'data', product );
	}

	$( '#productInput' ).on( 'keyup', function() {
		let answerLength = $( '#productInput' ).val().length;
		let productLength = $( '#productInput' ).attr( 'data' ).length;
		if( answerLength == productLength ) {
			checkAnswer();
		}
	})

	$( '.divTableCell' ).click( function() {
		// if( this.attr( 'data' ) != 'delete' ) {
		// 	$( '#productInput' ).append( this.attr( 'data' ) );
		// }
		if( !$( this ).hasClass( 'ignore' ) ) {
			$( '#productInput' ).append( $( this ).html() );
		}
		if( $( '#productInput' ).html().length == $( '#productInput' ).attr( 'data' ).length ) {
			checkAnswer()
		}
	})

	function checkAnswer() {
		let submittedAnswer = $( '#productInput' ).html();
		let correctAnswer = $( '#productInput' ).attr( 'data' );
		if( submittedAnswer === correctAnswer ) {
			handleAnswer( true );
		} else {
			handleAnswer( false );
		}
	}

	function handleAnswer( isRight ) {
		let color = isRight ? 'green' : 'red';
		colorAndFadeBackground( color, isRight );
	}

	function setUpNextProblem( isRight ) {
		let existingMultiplicand = isRight ? null : $( '#multiplicand' ).html();
		let existingMultiplier = isRight ? null : $( '#multiplier' ).html();
		clearNumberDivsAndInput();
		createMultiplicationProblem( existingMultiplicand, existingMultiplier );
	}


	function colorAndFadeBackground( color, isRight ) {
		let target = $( '#bodyBackground' );
		let green = ( color === 'green' ) ? 100 : 0;
		let red = ( color === 'red' ) ? 100 : 0;
		let opacity = 1;
		let createNewProblem = false;
		target.css( 'background', color );
		let fadeEffect = setInterval( function() {
			if( !target.css( 'background-color' ) ) {
				let backgroundColor = "rgba( " + red + ", " + green + ", 0, " + opacity + " )";
				target.css( 'background-color', backgroundColor );
			}
			if( opacity > 0 ) {
				let backgroundColor = "rgba( " + red + ", " + green + ", 0, " + opacity + " )";
				target.css( 'background-color', backgroundColor );
				opacity -= 0.1;
			} else {
				clearInterval( fadeEffect );
				setUpNextProblem( isRight );
			}
		}, 50 );
	}

	

	function clearNumberDivsAndInput() {
		$( '#multiplicand' ).html( '' );
		$( '#multiplier' ).html( '' );
	}
	createMultiplicationProblem( null, null );

});