/* exported wcSetClipboard, wcClearClipboard */

/**
 * Simple text copy functions using native browser clipboard capabilities.
 * @since 3.2.0
 */

/**
 * Set the user's clipboard contents.
 *
 * @param string data: Text to copy to clipboard.
 * @param object $el: jQuery element to trigger copy events on. (Default: document)
 */
function wcSetClipboard( data, $el ) {
	if ( 'undefined' === typeof $el ) {
		$el = jQuery( document );
	}
	var $temp_input = jQuery( '<textarea style="opacity:0">' );
	jQuery( 'body' ).append( $temp_input );
<<<<<<< HEAD
	$temp_input.val( data ).trigger( 'select' );
=======
	$temp_input.val( data ).select();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

	$el.trigger( 'beforecopy' );
	try {
		document.execCommand( 'copy' );
		$el.trigger( 'aftercopy' );
	} catch ( err ) {
		$el.trigger( 'aftercopyfailure' );
	}

	$temp_input.remove();
}

/**
 * Clear the user's clipboard.
 */
function wcClearClipboard() {
	wcSetClipboard( '' );
}
