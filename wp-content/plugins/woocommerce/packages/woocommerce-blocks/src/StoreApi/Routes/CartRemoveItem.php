<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * CartRemoveItem class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
class CartRemoveItem extends AbstractCartRoute {
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/remove-item';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
				'args'                => [
					'key' => [
						'description' => __( 'Unique identifier (key) for the cart item.', 'woocommerce' ),
						'type'        => 'string',
					],
				],
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
	 * Handle the request and return a valid response for this endpoint.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		$cart      = $this->cart_controller->get_cart_instance();
		$cart_item = $this->cart_controller->get_cart_item( $request['key'] );
=======
		$controller = new CartController();
		$cart       = $controller->get_cart_instance();
		$cart_item  = $controller->get_cart_item( $request['key'] );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

		if ( empty( $cart_item ) ) {
			throw new RouteException( 'woocommerce_rest_cart_invalid_key', __( 'Cart item no longer exists or is invalid.', 'woocommerce' ), 409 );
		}

		$cart->remove_cart_item( $request['key'] );
		$this->maybe_release_stock();

		return rest_ensure_response( $this->schema->get_item_response( $cart ) );
	}
}
