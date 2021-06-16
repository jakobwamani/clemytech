jQuery( function( $ ) {

	// woocommerce_params is required to continue, ensure the object exists
	if ( typeof woocommerce_params === 'undefined' ) {
		return false;
	}

	$( '#add_payment_method' )

	/* Payment option selection */

	.on( 'click init_add_payment_method', '.payment_methods input.input-radio', function() {
		if ( $( '.payment_methods input.input-radio' ).length > 1 ) {
			var target_payment_box = $( 'div.payment_box.' + $( this ).attr( 'ID' ) );
			if ( $( this ).is( ':checked' ) && ! target_payment_box.is( ':visible' ) ) {
				$( 'div.payment_box' ).filter( ':visible' ).slideUp( 250 );
				if ( $( this ).is( ':checked' ) ) {
					$( 'div.payment_box.' + $( this ).attr( 'ID' ) ).slideDown( 250 );
				}
			}
		} else {
			$( 'div.payment_box' ).show();
		}
	})

	// Trigger initial click
<<<<<<< HEAD
	.find( 'input[name=payment_method]:checked' ).trigger( 'click' );

	$( '#add_payment_method' ).on( 'submit', function() {
=======
	.find( 'input[name=payment_method]:checked' ).click();

	$( '#add_payment_method' ).submit( function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$( '#add_payment_method' ).block({ message: null, overlayCSS: { background: '#fff', opacity: 0.6 } });
	});

	$( document.body ).trigger( 'init_add_payment_method' );

});
