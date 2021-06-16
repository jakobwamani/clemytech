/* global woocommerce_settings_params, wp */
( function( $, params, wp ) {
	$( function() {
		// Sell Countries
<<<<<<< HEAD
		$( 'select#woocommerce_allowed_countries' ).on( 'change', function() {
=======
		$( 'select#woocommerce_allowed_countries' ).change( function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			if ( 'specific' === $( this ).val() ) {
				$( this ).closest('tr').next( 'tr' ).hide();
				$( this ).closest('tr').next().next( 'tr' ).show();
			} else if ( 'all_except' === $( this ).val() ) {
				$( this ).closest('tr').next( 'tr' ).show();
				$( this ).closest('tr').next().next( 'tr' ).hide();
			} else {
				$( this ).closest('tr').next( 'tr' ).hide();
				$( this ).closest('tr').next().next( 'tr' ).hide();
			}
<<<<<<< HEAD
		}).trigger( 'change' );

		// Ship Countries
		$( 'select#woocommerce_ship_to_countries' ).on( 'change', function() {
=======
		}).change();

		// Ship Countries
		$( 'select#woocommerce_ship_to_countries' ).change( function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			if ( 'specific' === $( this ).val() ) {
				$( this ).closest('tr').next( 'tr' ).show();
			} else {
				$( this ).closest('tr').next( 'tr' ).hide();
			}
<<<<<<< HEAD
		}).trigger( 'change' );

		// Stock management
		$( 'input#woocommerce_manage_stock' ).on( 'change', function() {
=======
		}).change();

		// Stock management
		$( 'input#woocommerce_manage_stock' ).change( function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			if ( $( this ).is(':checked') ) {
				$( this ).closest('tbody').find( '.manage_stock_field' ).closest( 'tr' ).show();
			} else {
				$( this ).closest('tbody').find( '.manage_stock_field' ).closest( 'tr' ).hide();
			}
<<<<<<< HEAD
		}).trigger( 'change' );
=======
		}).change();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

		// Color picker
		$( '.colorpick' )

			.iris({
				change: function( event, ui ) {
					$( this ).parent().find( '.colorpickpreview' ).css({ backgroundColor: ui.color.toString() });
				},
				hide: true,
				border: true
			})

			.on( 'click focus', function( event ) {
				event.stopPropagation();
				$( '.iris-picker' ).hide();
				$( this ).closest( 'td' ).find( '.iris-picker' ).show();
<<<<<<< HEAD
				$( this ).data( 'originalValue', $( this ).val() );
=======
				$( this ).data( 'original-value', $( this ).val() );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			})

			.on( 'change', function() {
				if ( $( this ).is( '.iris-error' ) ) {
<<<<<<< HEAD
					var original_value = $( this ).data( 'originalValue' );

					if ( original_value.match( /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/ ) ) {
						$( this ).val( $( this ).data( 'originalValue' ) ).trigger( 'change' );
					} else {
						$( this ).val( '' ).trigger( 'change' );
=======
					var original_value = $( this ).data( 'original-value' );

					if ( original_value.match( /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/ ) ) {
						$( this ).val( $( this ).data( 'original-value' ) ).change();
					} else {
						$( this ).val( '' ).change();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					}
				}
			});

		$( 'body' ).on( 'click', function() {
			$( '.iris-picker' ).hide();
		});

		// Edit prompt
		$( function() {
			var changed = false;

<<<<<<< HEAD
			$( 'input, textarea, select, checkbox' ).on( 'change', function() {
=======
			$( 'input, textarea, select, checkbox' ).change( function() {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				if ( ! changed ) {
					window.onbeforeunload = function() {
						return params.i18n_nav_warning;
					};
					changed = true;
				}
			});

			$( '.submit :input' ).on( 'click', function() {
				window.onbeforeunload = '';
			});
		});

		// Sorting
		$( 'table.wc_gateways tbody, table.wc_shipping tbody' ).sortable({
			items: 'tr',
			cursor: 'move',
			axis: 'y',
			handle: 'td.sort',
			scrollSensitivity: 40,
			helper: function( event, ui ) {
				ui.children().each( function() {
					$( this ).width( $( this ).width() );
				});
				ui.css( 'left', '0' );
				return ui;
			},
			start: function( event, ui ) {
				ui.item.css( 'background-color', '#f6f6f6' );
			},
			stop: function( event, ui ) {
				ui.item.removeAttr( 'style' );
				ui.item.trigger( 'updateMoveButtons' );
			}
		});

		// Select all/none
		$( '.woocommerce' ).on( 'click', '.select_all', function() {
<<<<<<< HEAD
			$( this ).closest( 'td' ).find( 'select option' ).prop( 'selected', true );
=======
			$( this ).closest( 'td' ).find( 'select option' ).attr( 'selected', 'selected' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			$( this ).closest( 'td' ).find( 'select' ).trigger( 'change' );
			return false;
		});

		$( '.woocommerce' ).on( 'click', '.select_none', function() {
<<<<<<< HEAD
			$( this ).closest( 'td' ).find( 'select option' ).prop( 'selected', false );
=======
			$( this ).closest( 'td' ).find( 'select option' ).removeAttr( 'selected' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			$( this ).closest( 'td' ).find( 'select' ).trigger( 'change' );
			return false;
		});

		// Re-order buttons.
		$( '.wc-item-reorder-nav').find( '.wc-move-up, .wc-move-down' ).on( 'click', function() {
			var moveBtn = $( this ),
				$row    = moveBtn.closest( 'tr' );

<<<<<<< HEAD
			moveBtn.trigger( 'focus' );
=======
			moveBtn.focus();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

			var isMoveUp = moveBtn.is( '.wc-move-up' ),
				isMoveDown = moveBtn.is( '.wc-move-down' );

			if ( isMoveUp ) {
				var $previewRow = $row.prev( 'tr' );

				if ( $previewRow && $previewRow.length ) {
					$previewRow.before( $row );
					wp.a11y.speak( params.i18n_moved_up );
				}
			} else if ( isMoveDown ) {
				var $nextRow = $row.next( 'tr' );

				if ( $nextRow && $nextRow.length ) {
					$nextRow.after( $row );
					wp.a11y.speak( params.i18n_moved_down );
				}
			}

<<<<<<< HEAD
			moveBtn.trigger( 'focus' ); // Re-focus after the container was moved.
=======
			moveBtn.focus(); // Re-focus after the container was moved.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			moveBtn.closest( 'table' ).trigger( 'updateMoveButtons' );
		} );

		$( '.wc-item-reorder-nav').closest( 'table' ).on( 'updateMoveButtons', function() {
			var table    = $( this ),
				lastRow  = $( this ).find( 'tbody tr:last' ),
				firstRow = $( this ).find( 'tbody tr:first' );

			table.find( '.wc-item-reorder-nav .wc-move-disabled' ).removeClass( 'wc-move-disabled' )
				.attr( { 'tabindex': '0', 'aria-hidden': 'false' } );
			firstRow.find( '.wc-item-reorder-nav .wc-move-up' ).addClass( 'wc-move-disabled' )
				.attr( { 'tabindex': '-1', 'aria-hidden': 'true' } );
			lastRow.find( '.wc-item-reorder-nav .wc-move-down' ).addClass( 'wc-move-disabled' )
				.attr( { 'tabindex': '-1', 'aria-hidden': 'true' } );
		} );

		$( '.wc-item-reorder-nav').closest( 'table' ).trigger( 'updateMoveButtons' );


		$( '.submit button' ).on( 'click', function() {
			if (
				$( 'select#woocommerce_allowed_countries' ).val() === 'specific' &&
				! $( '[name="woocommerce_specific_allowed_countries[]"]' ).val()
			) {
				if ( window.confirm( woocommerce_settings_params.i18n_no_specific_countries_selected ) ) {
					return true;
				}
				return false;
			}
		} );

	});
})( jQuery, woocommerce_settings_params, wp );
