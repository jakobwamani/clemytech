<?php
namespace Automattic\WooCommerce\Blocks;

<<<<<<< HEAD
use Automattic\WooCommerce\Blocks\BlockTypes\AtomicBlock;
use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Assets\AssetDataRegistry;
use Automattic\WooCommerce\Blocks\Assets\Api as AssetApi;
use Automattic\WooCommerce\Blocks\Integrations\IntegrationRegistry;

/**
 * Library class.
 *
 * @deprecated 5.0.0 This class will be removed in a future release. This has been replaced by BlockTypesController.
=======
use Automattic\WooCommerce\Blocks\Package;

/**
 * Library class.
 * Initializes blocks in WordPress.
 *
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
 * @internal
 */
class Library {

	/**
	 * Initialize block library features.
<<<<<<< HEAD
	 *
	 * @deprecated 5.0.0
	 */
	public static function init() {
		_deprecated_function( 'Library::init', '5.0.0' );
=======
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_blocks' ) );
		add_action( 'init', array( __CLASS__, 'define_tables' ) );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Register custom tables within $wpdb object.
<<<<<<< HEAD
	 *
	 * @deprecated 5.0.0
	 */
	public static function define_tables() {
		_deprecated_function( 'Library::define_tables', '5.0.0' );
=======
	 */
	public static function define_tables() {
		global $wpdb;

		// List of tables without prefixes.
		$tables = array(
			'wc_reserved_stock' => 'wc_reserved_stock',
		);

		foreach ( $tables as $name => $table ) {
			$wpdb->$name    = $wpdb->prefix . $table;
			$wpdb->tables[] = $table;
		}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Register blocks, hooking up assets and render functions as needed.
<<<<<<< HEAD
	 *
	 * @deprecated 5.0.0
	 */
	public static function register_blocks() {
		_deprecated_function( 'Library::register_blocks', '5.0.0' );
=======
	 */
	public static function register_blocks() {
		global $wp_version;
		$blocks = [
			'AllReviews',
			'FeaturedCategory',
			'FeaturedProduct',
			'HandpickedProducts',
			'ProductBestSellers',
			'ProductCategories',
			'ProductCategory',
			'ProductNew',
			'ProductOnSale',
			'ProductsByAttribute',
			'ProductTopRated',
			'ReviewsByProduct',
			'ReviewsByCategory',
			'ProductSearch',
			'ProductTag',
		];
		// Note: as a part of refactoring dynamic block registration, this will be moved
		// to block level config.
		if ( version_compare( $wp_version, '5.3', '>=' ) ) {
			$blocks[] = 'AllProducts';
			$blocks[] = 'PriceFilter';
			$blocks[] = 'AttributeFilter';
			$blocks[] = 'ActiveFilters';

			if ( Package::feature()->is_feature_plugin_build() ) {
				$blocks[] = 'Checkout';
				$blocks[] = 'Cart';
			}
		}
		if ( Package::feature()->is_experimental_build() ) {
			$blocks[] = 'SingleProduct';
		}
		foreach ( $blocks as $class ) {
			$class    = __NAMESPACE__ . '\\BlockTypes\\' . $class;
			$instance = new $class();
			$instance->register_block_type();
		}
		self::register_atomic_blocks();
	}

	/**
	 * Register atomic blocks on the PHP side.
	 */
	protected static function register_atomic_blocks() {
		$atomic_blocks = [
			'product-title',
			'product-button',
			'product-image',
			'product-price',
			'product-rating',
			'product-sale-badge',
			'product-summary',
			'product-sku',
			'product-category-list',
			'product-tag-list',
			'product-stock-indicator',
			'product-add-to-cart',
		];
		foreach ( $atomic_blocks as $atomic_block ) {
			$instance = new \Automattic\WooCommerce\Blocks\BlockTypes\AtomicBlock( $atomic_block );
			$instance->register_block_type();
		}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
