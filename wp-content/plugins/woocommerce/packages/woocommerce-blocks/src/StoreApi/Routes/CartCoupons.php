<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * CartCoupons class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
<<<<<<< HEAD
class CartCoupons extends AbstractCartRoute {
=======
class CartCoupons extends AbstractRoute {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/coupons';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
				'args'                => [
					'context' => $this->get_context_param( [ 'default' => 'view' ] ),
				],
			],
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
				'args'                => $this->schema->get_endpoint_args_for_item_schema( \WP_REST_Server::CREATABLE ),
			],
			[
				'methods'             => \WP_REST_Server::DELETABLE,
				'permission_callback' => '__return_true',
				'callback'            => [ $this, 'get_response' ],
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
	 * Get a collection of cart coupons.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		$cart_coupons = $this->cart_controller->get_cart_coupons();
=======
		$controller   = new CartController();
		$cart_coupons = $controller->get_cart_coupons();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$items        = [];

		foreach ( $cart_coupons as $coupon_code ) {
			$response = rest_ensure_response( $this->schema->get_item_response( $coupon_code ) );
			$response->add_links( $this->prepare_links( $coupon_code, $request ) );

			$response = $this->prepare_response_for_collection( $response );
			$items[]  = $response;
		}

		$response = rest_ensure_response( $items );

		return $response;
	}

	/**
	 * Add a coupon to the cart and return the result.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {
		if ( ! wc_coupons_enabled() ) {
			throw new RouteException( 'woocommerce_rest_cart_coupon_disabled', __( 'Coupons are disabled.', 'woocommerce' ), 404 );
		}

<<<<<<< HEAD
		try {
			$this->cart_controller->apply_coupon( $request['code'] );
=======
		$controller = new CartController();

		try {
			$controller->apply_coupon( $request['code'] );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		} catch ( \WC_REST_Exception $e ) {
			throw new RouteException( $e->getErrorCode(), $e->getMessage(), $e->getCode() );
		}

		$response = $this->prepare_item_for_response( $request['code'], $request );
		$response->set_status( 201 );

		return $response;
	}

	/**
	 * Deletes all coupons in the cart.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_delete_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		$cart = $this->cart_controller->get_cart_instance();

=======
		$controller = new CartController();
		$cart       = $controller->get_cart_instance();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$cart->remove_coupons();
		$cart->calculate_totals();

		return new \WP_REST_Response( [], 200 );
	}

	/**
	 * Prepare links for the request.
	 *
	 * @param string           $coupon_code Coupon code.
	 * @param \WP_REST_Request $request Request object.
	 * @return array
	 */
	protected function prepare_links( $coupon_code, $request ) {
		$base  = $this->get_namespace() . $this->get_path();
		$links = array(
			'self'       => array(
				'href' => rest_url( trailingslashit( $base ) . $coupon_code ),
			),
			'collection' => array(
				'href' => rest_url( $base ),
			),
		);
		return $links;
	}
}