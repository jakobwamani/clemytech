<?php
namespace Automattic\WooCommerce\Blocks\StoreApi;

use Routes\AbstractRoute;
<<<<<<< HEAD
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\OrderController;
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * RoutesController class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
class RoutesController {

	/**
	 * Stores schemas.
	 *
	 * @var SchemaController
	 */
	protected $schemas;

	/**
	 * Stores routes.
	 *
	 * @var AbstractRoute[]
	 */
	protected $routes = [];

	/**
	 * Constructor.
	 *
	 * @param SchemaController $schemas Schema controller class passed to each route.
	 */
	public function __construct( SchemaController $schemas ) {
		$this->schemas = $schemas;
		$this->initialize();
	}

	/**
	 * Get a route class instance.
	 *
	 * @throws Exception If the schema does not exist.
	 *
	 * @param string $name Name of schema.
	 * @return AbstractRoute
	 */
	public function get( $name ) {
		if ( ! isset( $this->routes[ $name ] ) ) {
			throw new Exception( $name . ' route does not exist' );
		}
		return $this->routes[ $name ];
	}

	/**
	 * Register defined list of routes with WordPress.
	 */
	public function register_routes() {
		foreach ( $this->routes as $route ) {
			register_rest_route(
				$route->get_namespace(),
				$route->get_path(),
				$route->get_args()
			);
		}
	}

	/**
	 * Load route class instances.
	 */
	protected function initialize() {
<<<<<<< HEAD
		global $wp_version;

		$cart_controller  = new CartController();
		$order_controller = new OrderController();

		$this->routes = [
			'cart'                      => new Routes\Cart( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-add-item'             => new Routes\CartAddItem( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-apply-coupon'         => new Routes\CartApplyCoupon( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-coupons'              => new Routes\CartCoupons( $this->schemas->get( 'cart' ), $this->schemas->get( 'cart-coupon' ), $cart_controller ),
			'cart-coupons-by-code'      => new Routes\CartCouponsByCode( $this->schemas->get( 'cart' ), $this->schemas->get( 'cart-coupon' ), $cart_controller ),
			'cart-items'                => new Routes\CartItems( $this->schemas->get( 'cart' ), $this->schemas->get( 'cart-item' ), $cart_controller ),
			'cart-items-by-key'         => new Routes\CartItemsByKey( $this->schemas->get( 'cart' ), $this->schemas->get( 'cart-item' ), $cart_controller ),
			'cart-remove-coupon'        => new Routes\CartRemoveCoupon( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-remove-item'          => new Routes\CartRemoveItem( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-select-shipping-rate' => new Routes\CartSelectShippingRate( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-update-item'          => new Routes\CartUpdateItem( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'cart-update-customer'      => new Routes\CartUpdateCustomer( $this->schemas->get( 'cart' ), null, $cart_controller ),
			'checkout'                  => new Routes\Checkout( $this->schemas->get( 'cart' ), $this->schemas->get( 'checkout' ), $cart_controller, $order_controller ),
=======
		$this->routes = [
			'cart'                      => new Routes\Cart( $this->schemas->get( 'cart' ) ),
			'cart-add-item'             => new Routes\CartAddItem( $this->schemas->get( 'cart' ) ),
			'cart-apply-coupon'         => new Routes\CartApplyCoupon( $this->schemas->get( 'cart' ) ),
			'cart-coupons'              => new Routes\CartCoupons( $this->schemas->get( 'cart-coupon' ) ),
			'cart-coupons-by-code'      => new Routes\CartCouponsByCode( $this->schemas->get( 'cart-coupon' ) ),
			'cart-items'                => new Routes\CartItems( $this->schemas->get( 'cart-item' ) ),
			'cart-items-by-key'         => new Routes\CartItemsByKey( $this->schemas->get( 'cart-item' ) ),
			'cart-remove-coupon'        => new Routes\CartRemoveCoupon( $this->schemas->get( 'cart' ) ),
			'cart-remove-item'          => new Routes\CartRemoveItem( $this->schemas->get( 'cart' ) ),
			'cart-select-shipping-rate' => new Routes\CartSelectShippingRate( $this->schemas->get( 'cart' ) ),
			'cart-update-item'          => new Routes\CartUpdateItem( $this->schemas->get( 'cart' ) ),
			'cart-update-customer'      => new Routes\CartUpdateCustomer( $this->schemas->get( 'cart' ), $this->schemas->get( 'shipping-address' ), $this->schemas->get( 'billing-address' ) ),
			'checkout'                  => new Routes\Checkout( $this->schemas->get( 'checkout' ) ),
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			'product-attributes'        => new Routes\ProductAttributes( $this->schemas->get( 'product-attribute' ) ),
			'product-attributes-by-id'  => new Routes\ProductAttributesById( $this->schemas->get( 'product-attribute' ) ),
			'product-attribute-terms'   => new Routes\ProductAttributeTerms( $this->schemas->get( 'term' ) ),
			'product-categories'        => new Routes\ProductCategories( $this->schemas->get( 'product-category' ) ),
			'product-categories-by-id'  => new Routes\ProductCategoriesById( $this->schemas->get( 'product-category' ) ),
			'product-collection-data'   => new Routes\ProductCollectionData( $this->schemas->get( 'product-collection-data' ) ),
			'product-reviews'           => new Routes\ProductReviews( $this->schemas->get( 'product-review' ) ),
			'product-tags'              => new Routes\ProductTags( $this->schemas->get( 'term' ) ),
			'products'                  => new Routes\Products( $this->schemas->get( 'product' ) ),
			'products-by-id'            => new Routes\ProductsById( $this->schemas->get( 'product' ) ),
		];
<<<<<<< HEAD

		// Batching requires WP 5.6.
		if ( version_compare( $wp_version, '5.6', '>=' ) ) {
			$this->routes['batch'] = new Routes\Batch();
		}
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
