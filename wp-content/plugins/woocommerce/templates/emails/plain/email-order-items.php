<?php
/**
 * Email Order Items (plain)
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/plain/email-order-items.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates\Emails\Plain
<<<<<<< HEAD
 * @version     5.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
=======
 * @version     3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
}

foreach ( $items as $item_id => $item ) :
	if ( apply_filters( 'woocommerce_order_item_visible', true, $item ) ) {
		$product       = $item->get_product();
		$sku           = '';
		$purchase_note = '';

		if ( is_object( $product ) ) {
			$sku           = $product->get_sku();
			$purchase_note = $product->get_purchase_note();
		}

<<<<<<< HEAD
		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		echo wp_kses_post( apply_filters( 'woocommerce_order_item_name', $item->get_name(), $item, false ) );
=======
		echo apply_filters( 'woocommerce_order_item_name', $item->get_name(), $item, false );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		if ( $show_sku && $sku ) {
			echo ' (#' . $sku . ')';
		}
		echo ' X ' . apply_filters( 'woocommerce_email_order_item_quantity', $item->get_quantity(), $item );
		echo ' = ' . $order->get_formatted_line_subtotal( $item ) . "\n";
<<<<<<< HEAD
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped

		// allow other plugins to add additional product information here.
		do_action( 'woocommerce_order_item_meta_start', $item_id, $item, $order, $plain_text );
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
=======

		// allow other plugins to add additional product information here
		do_action( 'woocommerce_order_item_meta_start', $item_id, $item, $order, $plain_text );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		echo strip_tags(
			wc_display_item_meta(
				$item,
				array(
					'before'    => "\n- ",
					'separator' => "\n- ",
					'after'     => '',
					'echo'      => false,
					'autop'     => false,
				)
			)
		);

<<<<<<< HEAD
		// allow other plugins to add additional product information here.
		do_action( 'woocommerce_order_item_meta_end', $item_id, $item, $order, $plain_text );
	}
	// Note.
=======
		// allow other plugins to add additional product information here
		do_action( 'woocommerce_order_item_meta_end', $item_id, $item, $order, $plain_text );
	}
	// Note
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	if ( $show_purchase_note && $purchase_note ) {
		echo "\n" . do_shortcode( wp_kses_post( $purchase_note ) );
	}
	echo "\n\n";
endforeach;
