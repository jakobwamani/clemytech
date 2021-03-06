<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * CartCouponsByCode class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
<<<<<<< HEAD
class CartCouponsByCode extends AbstractCartRoute {
=======
class CartCouponsByCode extends AbstractRoute {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/coupons/(?P<code>[\w-]+)';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
<<<<<<< HEAD
			'args'        => [
=======
			'args'   => [
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				'code' => [
					'description' => __( 'Unique identifier for the coupon within the cart.', 'woocommerce' ),
					'type'        => 'string',
				],
			],
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
				'args'                => [
					'context' => $this->get_context_param( [ 'default' => 'view' ] ),
				],
			],
			[
				'methods'             => \WP_REST_Server::DELETABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
			],
<<<<<<< HEAD
			'schema'      => [ $this->schema, 'get_public_item_schema' ],
			'allow_batch' => [ 'v1' => true ],
=======
			'schema' => [ $this->schema, 'get_public_item_schema' ],
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		];
	}

	/**
	 * Get a single cart coupon.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		if ( ! $this->cart_controller->has_coupon( $request['code'] ) ) {
=======
		$controller = new CartController();

		if ( ! $controller->has_coupon( $request['code'] ) ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			throw new RouteException( 'woocommerce_rest_cart_coupon_invalid_code', __( 'Coupon does not exist in the cart.', 'woocommerce' ), 404 );
		}

		return $this->prepare_item_for_response( $request['code'], $request );
	}

	/**
	 * Delete a single cart coupon.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_delete_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		if ( ! $this->cart_controller->has_coupon( $request['code'] ) ) {
			throw new RouteException( 'woocommerce_rest_cart_coupon_invalid_code', __( 'Coupon does not exist in the cart.', 'woocommerce' ), 404 );
		}

		$cart = $this->cart_controller->get_cart_instance();

=======
		$controller = new CartController();

		if ( ! $controller->has_coupon( $request['code'] ) ) {
			throw new RouteException( 'woocommerce_rest_cart_coupon_invalid_code', __( 'Coupon does not exist in the cart.', 'woocommerce' ), 404 );
		}

		$cart = $controller->get_cart_instance();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$cart->remove_coupon( $request['code'] );
		$cart->calculate_totals();

		return new \WP_REST_Response( null, 204 );
	}
}
