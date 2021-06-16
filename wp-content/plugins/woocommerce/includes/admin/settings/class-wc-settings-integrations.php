<?php
/**
 * WooCommerce Integration Settings
 *
<<<<<<< HEAD
 * @package  WooCommerce\Admin
 * @version  2.1.0
=======
 * @author      WooThemes
 * @category    Admin
 * @package     WooCommerce\Admin
 * @version     2.1.0
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
 */

use Automattic\Jetpack\Constants;

<<<<<<< HEAD
defined( 'ABSPATH' ) || exit;
=======
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

if ( ! class_exists( 'WC_Settings_Integrations', false ) ) :

	/**
	 * WC_Settings_Integrations.
	 */
	class WC_Settings_Integrations extends WC_Settings_Page {

		/**
		 * Constructor.
		 */
		public function __construct() {
			$this->id    = 'integration';
			$this->label = __( 'Integration', 'woocommerce' );

			if ( isset( WC()->integrations ) && WC()->integrations->get_integrations() ) {
				parent::__construct();
			}
		}

		/**
		 * Get sections.
		 *
		 * @return array
		 */
		public function get_sections() {
			global $current_section;

			$sections = array();

			if ( ! Constants::is_defined( 'WC_INSTALLING' ) ) {
				$integrations = WC()->integrations->get_integrations();

				if ( ! $current_section && ! empty( $integrations ) ) {
					$current_section = current( $integrations )->id;
				}

<<<<<<< HEAD
				if ( count( $integrations ) > 1 ) {
=======
				if ( sizeof( $integrations ) > 1 ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					foreach ( $integrations as $integration ) {
						$title                                      = empty( $integration->method_title ) ? ucfirst( $integration->id ) : $integration->method_title;
						$sections[ strtolower( $integration->id ) ] = esc_html( $title );
					}
				}
			}

			return apply_filters( 'woocommerce_get_sections_' . $this->id, $sections );
		}

		/**
		 * Output the settings.
		 */
		public function output() {
			global $current_section;

			$integrations = WC()->integrations->get_integrations();

			if ( isset( $integrations[ $current_section ] ) ) {
				$integrations[ $current_section ]->admin_options();
			}
		}
	}

endif;

return new WC_Settings_Integrations();
