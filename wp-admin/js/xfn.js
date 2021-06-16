/**
 * Generates the XHTML Friends Network 'rel' string from the inputs.
 *
 * @deprecated 3.5.0
 * @output wp-admin/js/xfn.js
 */
jQuery( document ).ready(function( $ ) {
	$( '#link_rel' ).prop( 'readonly', true );
<<<<<<< HEAD
	$( '#linkxfndiv input' ).on( 'click keyup', function() {
=======
	$( '#linkxfndiv input' ).bind( 'click keyup', function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		var isMe = $( '#me' ).is( ':checked' ), inputs = '';
		$( 'input.valinp' ).each( function() {
			if ( isMe ) {
				$( this ).prop( 'disabled', true ).parent().addClass( 'disabled' );
			} else {
				$( this ).removeAttr( 'disabled' ).parent().removeClass( 'disabled' );
				if ( $( this ).is( ':checked' ) && $( this ).val() !== '') {
					inputs += $( this ).val() + ' ';
				}
			}
		});
		$( '#link_rel' ).val( ( isMe ) ? 'me' : inputs.substr( 0,inputs.length - 1 ) );
	});
});
