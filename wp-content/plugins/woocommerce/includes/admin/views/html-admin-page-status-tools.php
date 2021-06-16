<?php
/**
 * Admin View: Page - Status Tools
<<<<<<< HEAD
 *
 * @package WooCommerce
 */

use Automattic\WooCommerce\Utilities\ArrayUtil;

=======
 */

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<form method="post" action="options.php">
	<?php settings_fields( 'woocommerce_status_settings_fields' ); ?>
	<table class="wc_status_table wc_status_table--tools widefat" cellspacing="0">
		<tbody class="tools">
<<<<<<< HEAD
			<?php foreach ( $tools as $action_name => $tool ) : ?>
				<tr class="<?php echo sanitize_html_class( $action_name ); ?>">
=======
			<?php foreach ( $tools as $action => $tool ) : ?>
				<tr class="<?php echo sanitize_html_class( $action ); ?>">
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					<th>
						<strong class="name"><?php echo esc_html( $tool['name'] ); ?></strong>
						<p class="description"><?php echo wp_kses_post( $tool['desc'] ); ?></p>
					</th>
					<td class="run-tool">
<<<<<<< HEAD
						<a <?php echo ArrayUtil::is_truthy( $tool, 'disabled' ) ? 'disabled' : ''; ?> href="<?php echo esc_url( wp_nonce_url( admin_url( 'admin.php?page=wc-status&tab=tools&action=' . $action_name ), 'debug_action' ) ); ?>" class="button button-large <?php echo esc_attr( $action_name ); ?>"><?php echo esc_html( $tool['button'] ); ?></a>
=======
						<a href="<?php echo wp_nonce_url( admin_url( 'admin.php?page=wc-status&tab=tools&action=' . $action ), 'debug_action' ); ?>" class="button button-large <?php echo esc_attr( $action ); ?>"><?php echo esc_html( $tool['button'] ); ?></a>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					</td>
				</tr>
			<?php endforeach; ?>
		</tbody>
	</table>
</form>
