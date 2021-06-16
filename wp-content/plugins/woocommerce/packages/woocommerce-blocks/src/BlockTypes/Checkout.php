<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Assets;
use Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * Checkout class.
 *
 * @internal
 */
class Checkout extends AbstractBlock {
<<<<<<< HEAD
=======

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'checkout';

	/**
<<<<<<< HEAD
	 * Get the editor script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 * @return array|string;
	 */
	protected function get_block_type_editor_script( $key = null ) {
		$script = [
			'handle'       => 'wc-' . $this->block_name . '-block',
			'path'         => $this->asset_api->get_block_asset_build_path( $this->block_name ),
			'dependencies' => [ 'wc-vendors', 'wc-blocks' ],
		];
		return $key ? $script[ $key ] : $script;
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @see $this->register_block_type()
	 * @param string $key Data to get, or default to everything.
	 * @return array|string
	 */
	protected function get_block_type_script( $key = null ) {
		$script = [
			'handle'       => 'wc-' . $this->block_name . '-block-frontend',
			'path'         => $this->asset_api->get_block_asset_build_path( $this->block_name . '-frontend' ),
			'dependencies' => [],
		];
		return $key ? $script[ $key ] : $script;
	}

	/**
	 * Enqueue frontend assets for this block, just in time for rendering.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 */
	protected function enqueue_assets( array $attributes ) {
		do_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_before' );
		parent::enqueue_assets( $attributes );
		do_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_after' );
=======
	 * Registers the block type with WordPress.
	 */
	public function register_block_type() {
		register_block_type(
			$this->namespace . '/' . $this->block_name,
			array(
				'render_callback' => array( $this, 'render' ),
				'editor_script'   => 'wc-' . $this->block_name . '-block',
				'editor_style'    => 'wc-block-editor',
				'style'           => 'wc-block-style',
				'script'          => 'wc-' . $this->block_name . '-block-frontend',
				'supports'        => [],
			)
		);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Append frontend scripts when rendering the block.
	 *
<<<<<<< HEAD
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content ) {
=======
	 * @param array|\WP_Block $attributes Block attributes, or an instance of a WP_Block. Defaults to an empty array.
	 * @param string          $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		if ( $this->is_checkout_endpoint() ) {
			// Note: Currently the block only takes care of the main checkout form -- if an endpoint is set, refer to the
			// legacy shortcode instead and do not render block.
			return '[woocommerce_checkout]';
		}
<<<<<<< HEAD

		// Deregister core checkout scripts and styles.
		wp_dequeue_script( 'wc-checkout' );
		wp_dequeue_script( 'wc-password-strength-meter' );
		wp_dequeue_script( 'selectWoo' );
		wp_dequeue_style( 'select2' );

		return $this->inject_html_data_attributes( $content . $this->get_skeleton(), $attributes );
=======
		$block_attributes = is_a( $attributes, '\WP_Block' ) ? $attributes->attributes : $attributes;

		do_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_before' );
		$this->enqueue_assets( $block_attributes );
		do_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_after' );

		// Deregister core checkout scripts and styles.
		wp_deregister_script( 'wc-checkout' );
		wp_deregister_script( 'wc-password-strength-meter' );
		wp_deregister_script( 'selectWoo' );
		wp_deregister_style( 'select2' );

		return $this->inject_html_data_attributes( $content . $this->get_skeleton(), $block_attributes );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Check if we're viewing a checkout page endpoint, rather than the main checkout page itself.
	 *
	 * @return boolean
	 */
	protected function is_checkout_endpoint() {
		return is_wc_endpoint_url( 'order-pay' ) || is_wc_endpoint_url( 'order-received' );
	}

	/**
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = [] ) {
<<<<<<< HEAD
		parent::enqueue_data( $attributes );

		$this->asset_data_registry->add(
			'allowedCountries',
			function() {
				return $this->deep_sort_with_accents( WC()->countries->get_allowed_countries() );
			},
			true
		);
		$this->asset_data_registry->add(
			'allowedStates',
			function() {
				return $this->deep_sort_with_accents( WC()->countries->get_allowed_country_states() );
			},
			true
		);
		$this->asset_data_registry->add(
			'shippingCountries',
			function() {
				return $this->deep_sort_with_accents( WC()->countries->get_shipping_countries() );
			},
			true
		);
		$this->asset_data_registry->add(
			'shippingStates',
			function() {
				return $this->deep_sort_with_accents( WC()->countries->get_shipping_country_states() );
			},
			true
		);
		$this->asset_data_registry->add(
			'countryLocale',
			function() {
				// Merge country and state data to work around https://github.com/woocommerce/woocommerce/issues/28944.
				$country_locale = wc()->countries->get_country_locale();
				$states         = wc()->countries->get_states();

				foreach ( $states as $country => $states ) {
					if ( empty( $states ) ) {
						$country_locale[ $country ]['state']['required'] = false;
						$country_locale[ $country ]['state']['hidden']   = true;
					}
				}
				return $country_locale;
			},
			true
		);
		$this->asset_data_registry->add( 'baseLocation', wc_get_base_location(), true );
		$this->asset_data_registry->add(
			'checkoutAllowsGuest',
			false === filter_var(
				WC()->checkout()->is_registration_required(),
				FILTER_VALIDATE_BOOLEAN
			),
			true
		);
		$this->asset_data_registry->add(
			'checkoutAllowsSignup',
			filter_var(
				WC()->checkout()->is_registration_enabled(),
				FILTER_VALIDATE_BOOLEAN
			),
			true
		);
		$this->asset_data_registry->add( 'checkoutShowLoginReminder', filter_var( get_option( 'woocommerce_enable_checkout_login_reminder' ), FILTER_VALIDATE_BOOLEAN ), true );
		$this->asset_data_registry->add( 'displayCartPricesIncludingTax', 'incl' === get_option( 'woocommerce_tax_display_cart' ), true );
		$this->asset_data_registry->add( 'displayItemizedTaxes', 'itemized' === get_option( 'woocommerce_tax_total_display' ), true );
		$this->asset_data_registry->add( 'taxesEnabled', wc_tax_enabled(), true );
		$this->asset_data_registry->add( 'couponsEnabled', wc_coupons_enabled(), true );
		$this->asset_data_registry->add( 'shippingEnabled', wc_shipping_enabled(), true );
		$this->asset_data_registry->add( 'hasDarkEditorStyleSupport', current_theme_supports( 'dark-editor-style' ), true );
		$this->asset_data_registry->register_page_id( isset( $attributes['cartPageId'] ) ? $attributes['cartPageId'] : 0 );

		// Hydrate the following data depending on admin or frontend context.
		if ( is_admin() && function_exists( 'get_current_screen' ) ) {
			$screen = get_current_screen();

			if ( $screen && $screen->is_block_editor() && ! $this->asset_data_registry->exists( 'shippingMethodsExist' ) ) {
				$methods_exist = wc_get_shipping_method_count( false, true ) > 0;
				$this->asset_data_registry->add( 'shippingMethodsExist', $methods_exist );
=======
		$data_registry = Package::container()->get(
			AssetDataRegistry::class
		);

		if ( ! $data_registry->exists( 'allowedCountries' ) ) {
			$data_registry->add( 'allowedCountries', $this->deep_sort_with_accents( WC()->countries->get_allowed_countries() ) );
		}

		if ( ! $data_registry->exists( 'allowedStates' ) ) {
			$data_registry->add( 'allowedStates', $this->deep_sort_with_accents( WC()->countries->get_allowed_country_states() ) );
		}

		if ( ! $data_registry->exists( 'shippingCountries' ) ) {
			$data_registry->add( 'shippingCountries', $this->deep_sort_with_accents( WC()->countries->get_shipping_countries() ) );
		}

		if ( ! $data_registry->exists( 'shippingStates' ) ) {
			$data_registry->add( 'shippingStates', $this->deep_sort_with_accents( WC()->countries->get_shipping_country_states() ) );
		}

		$permalink = ! empty( $attributes['cartPageId'] ) ? get_permalink( $attributes['cartPageId'] ) : false;

		if ( $permalink && ! $data_registry->exists( 'page-' . $attributes['cartPageId'] ) ) {
			$data_registry->add( 'page-' . $attributes['cartPageId'], $permalink );
		}

		// Hydrate the following data depending on admin or frontend context.
		if ( is_admin() ) {
			$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : false;

			if ( $screen && $screen->is_block_editor() && ! $data_registry->exists( 'shippingMethodsExist' ) ) {
				$methods_exist = wc_get_shipping_method_count( false, true ) > 0;
				$data_registry->add( 'shippingMethodsExist', $methods_exist );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			}
		}

		if ( ! is_admin() && ! WC()->is_rest_api_request() ) {
<<<<<<< HEAD
			$this->hydrate_from_api();
			$this->hydrate_customer_payment_methods();
=======
			$this->hydrate_from_api( $data_registry );
			$this->hydrate_customer_payment_methods( $data_registry );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		}

		do_action( 'woocommerce_blocks_checkout_enqueue_data' );
	}

	/**
	 * Removes accents from an array of values, sorts by the values, then returns the original array values sorted.
	 *
	 * @param array $array Array of values to sort.
	 * @return array Sorted array.
	 */
	protected function deep_sort_with_accents( $array ) {
		if ( ! is_array( $array ) || empty( $array ) ) {
			return $array;
		}

		if ( is_array( reset( $array ) ) ) {
			return array_map( [ $this, 'deep_sort_with_accents' ], $array );
		}

		$array_without_accents = array_map( 'remove_accents', array_map( 'wc_strtolower', array_map( 'html_entity_decode', $array ) ) );
		asort( $array_without_accents );
		return array_replace( $array_without_accents, $array );
	}

	/**
<<<<<<< HEAD
	 * Get customer payment methods for use in checkout.
	 */
	protected function hydrate_customer_payment_methods() {
		if ( ! is_user_logged_in() || $this->asset_data_registry->exists( 'customerPaymentMethods' ) ) {
			return;
		}
		add_filter( 'woocommerce_payment_methods_list_item', [ $this, 'include_token_id_with_payment_methods' ], 10, 2 );
		$this->asset_data_registry->add(
=======
	 * Register/enqueue scripts used for this block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_scripts( array $attributes = [] ) {
		Assets::register_block_script( $this->block_name . '-frontend', $this->block_name . '-block-frontend' );
	}

	/**
	 * Get customer payment methods for use in checkout.
	 *
	 * @param AssetDataRegistry $data_registry Data registry instance.
	 */
	protected function hydrate_customer_payment_methods( AssetDataRegistry $data_registry ) {
		if ( ! is_user_logged_in() || $data_registry->exists( 'customerPaymentMethods' ) ) {
			return;
		}
		add_filter( 'woocommerce_payment_methods_list_item', [ $this, 'include_token_id_with_payment_methods' ], 10, 2 );
		$data_registry->add(
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			'customerPaymentMethods',
			wc_get_customer_saved_methods_list( get_current_user_id() )
		);
		remove_filter( 'woocommerce_payment_methods_list_item', [ $this, 'include_token_id_with_payment_methods' ], 10, 2 );
	}

	/**
	 * Hydrate the checkout block with data from the API.
<<<<<<< HEAD
	 */
	protected function hydrate_from_api() {
=======
	 *
	 * @param AssetDataRegistry $data_registry Data registry instance.
	 */
	protected function hydrate_from_api( AssetDataRegistry $data_registry ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		// Print existing notices now, otherwise they are caught by the Cart
		// Controller and converted to exceptions.
		wc_print_notices();

<<<<<<< HEAD
		add_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );
		$this->asset_data_registry->hydrate_api_request( '/wc/store/cart' );
		$this->asset_data_registry->hydrate_api_request( '/wc/store/checkout' );
		remove_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );
=======
		if ( ! $data_registry->exists( 'cartData' ) ) {
			$data_registry->add( 'cartData', WC()->api->get_endpoint_data( '/wc/store/cart' ) );
		}
		if ( ! $data_registry->exists( 'checkoutData' ) ) {
			add_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );
			$data_registry->add( 'checkoutData', WC()->api->get_endpoint_data( '/wc/store/checkout' ) );
			remove_filter( 'woocommerce_store_api_disable_nonce_check', '__return_true' );
		}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Render skeleton markup for the checkout block.
	 */
	protected function get_skeleton() {
		return '
			<div class="wc-block-skeleton wc-block-components-sidebar-layout wc-block-checkout wc-block-checkout--is-loading wc-block-checkout--skeleton hidden" aria-hidden="true">
				<div class="wc-block-components-main wc-block-checkout__main">
					<div class="wc-block-components-express-payment wc-block-components-express-payment--checkout"></div>
					<div class="wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout"><span></span></div>
					<form class="wc-block-checkout__form">
						<fieldset class="wc-block-checkout__contact-fields wc-block-components-checkout-step">
							<div class="wc-block-components-checkout-step__heading">
								<div class="wc-block-components-checkout-step__title"></div>
							</div>
							<div class="wc-block-components-checkout-step__container">
								<div class="wc-block-components-checkout-step__content">
									<span></span>
								</div>
							</div>
						</fieldset>
						<fieldset class="wc-block-checkout__contact-fields wc-block-components-checkout-step">
							<div class="wc-block-components-checkout-step__heading">
								<div class="wc-block-components-checkout-step__title"></div>
							</div>
							<div class="wc-block-components-checkout-step__container">
								<div class="wc-block-components-checkout-step__content">
									<span></span>
								</div>
							</div>
						</fieldset>
						<fieldset class="wc-block-checkout__contact-fields wc-block-components-checkout-step">
							<div class="wc-block-components-checkout-step__heading">
								<div class="wc-block-components-checkout-step__title"></div>
							</div>
							<div class="wc-block-components-checkout-step__container">
								<div class="wc-block-components-checkout-step__content">
									<span></span>
								</div>
							</div>
						</fieldset>
						<fieldset class="wc-block-checkout__contact-fields wc-block-components-checkout-step">
							<div class="wc-block-components-checkout-step__heading">
								<div class="wc-block-components-checkout-step__title"></div>
							</div>
							<div class="wc-block-components-checkout-step__container">
								<div class="wc-block-components-checkout-step__content">
									<span></span>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="wc-block-components-sidebar wc-block-checkout__sidebar">
					<div class="components-card"></div>
				</div>
				<div class="wc-block-components-main wc-block-checkout__main-totals">
					<div class="wc-block-checkout__actions">
						<button class="components-button button wc-block-button wc-block-components-checkout-place-order-button">&nbsp;</button>
					</div>
				</div>
			</div>
		' . $this->get_skeleton_inline_script();
	}

	/**
	 * Callback for woocommerce_payment_methods_list_item filter to add token id
	 * to the generated list.
	 *
	 * @param array     $list_item The current list item for the saved payment method.
	 * @param \WC_Token $token     The token for the current list item.
	 *
	 * @return array The list item with the token id added.
	 */
	public static function include_token_id_with_payment_methods( $list_item, $token ) {
		$list_item['tokenId'] = $token->get_id();
		$brand                = ! empty( $list_item['method']['brand'] ) ?
			strtolower( $list_item['method']['brand'] ) :
			'';
		// phpcs:ignore WordPress.WP.I18n.TextDomainMismatch -- need to match on translated value from core.
		if ( ! empty( $brand ) && esc_html__( 'Credit card', 'woocommerce' ) !== $brand ) {
			$list_item['method']['brand'] = wc_get_credit_card_type_label( $brand );
		}
		return $list_item;
	}
}
