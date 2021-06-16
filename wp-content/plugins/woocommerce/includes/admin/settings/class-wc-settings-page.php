<?php
/**
 * WooCommerce Settings Page/Tab
 *
<<<<<<< HEAD
=======
 * @author      WooThemes
 * @category    Admin
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
 * @package     WooCommerce\Admin
 * @version     2.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
<<<<<<< HEAD
	exit; // Exit if accessed directly.
=======
	exit; // Exit if accessed directly
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
}

if ( ! class_exists( 'WC_Settings_Page', false ) ) :

	/**
	 * WC_Settings_Page.
	 */
	abstract class WC_Settings_Page {

		/**
		 * Setting page id.
		 *
		 * @var string
		 */
		protected $id = '';

		/**
		 * Setting page label.
		 *
		 * @var string
		 */
		protected $label = '';

		/**
		 * Constructor.
		 */
		public function __construct() {
			add_filter( 'woocommerce_settings_tabs_array', array( $this, 'add_settings_page' ), 20 );
			add_action( 'woocommerce_sections_' . $this->id, array( $this, 'output_sections' ) );
			add_action( 'woocommerce_settings_' . $this->id, array( $this, 'output' ) );
			add_action( 'woocommerce_settings_save_' . $this->id, array( $this, 'save' ) );
		}

		/**
		 * Get settings page ID.
		 *
		 * @since 3.0.0
		 * @return string
		 */
		public function get_id() {
			return $this->id;
		}

		/**
		 * Get settings page label.
		 *
		 * @since 3.0.0
		 * @return string
		 */
		public function get_label() {
			return $this->label;
		}

		/**
		 * Add this page to settings.
		 *
<<<<<<< HEAD
		 * @param array $pages The pages array to add this page to.
=======
		 * @param array $pages
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		 *
		 * @return mixed
		 */
		public function add_settings_page( $pages ) {
			$pages[ $this->id ] = $this->label;

			return $pages;
		}

		/**
		 * Get settings array.
		 *
		 * @return array
		 */
		public function get_settings() {
			return apply_filters( 'woocommerce_get_settings_' . $this->id, array() );
		}

		/**
		 * Get sections.
		 *
		 * @return array
		 */
		public function get_sections() {
			return apply_filters( 'woocommerce_get_sections_' . $this->id, array() );
		}

		/**
		 * Output sections.
		 */
		public function output_sections() {
			global $current_section;

			$sections = $this->get_sections();

<<<<<<< HEAD
			if ( empty( $sections ) || 1 === count( $sections ) ) {
=======
			if ( empty( $sections ) || 1 === sizeof( $sections ) ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				return;
			}

			echo '<ul class="subsubsub">';

			$array_keys = array_keys( $sections );

			foreach ( $sections as $id => $label ) {
<<<<<<< HEAD
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '<li><a href="' . admin_url( 'admin.php?page=wc-settings&tab=' . $this->id . '&section=' . sanitize_title( $id ) ) . '" class="' . ( $current_section === $id ? 'current' : '' ) . '">' . esc_html( $label ) . '</a> ' . ( end( $array_keys ) === $id ? '' : '|' ) . ' </li>';
=======
				echo '<li><a href="' . admin_url( 'admin.php?page=wc-settings&tab=' . $this->id . '&section=' . sanitize_title( $id ) ) . '" class="' . ( $current_section == $id ? 'current' : '' ) . '">' . $label . '</a> ' . ( end( $array_keys ) == $id ? '' : '|' ) . ' </li>';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			}

			echo '</ul><br class="clear" />';
		}

		/**
		 * Output the settings.
		 */
		public function output() {
			$settings = $this->get_settings();

			WC_Admin_Settings::output_fields( $settings );
		}

		/**
		 * Save settings.
		 */
		public function save() {
			global $current_section;

			$settings = $this->get_settings();
			WC_Admin_Settings::save_fields( $settings );

			if ( $current_section ) {
				do_action( 'woocommerce_update_options_' . $this->id . '_' . $current_section );
			}
		}
	}

endif;
