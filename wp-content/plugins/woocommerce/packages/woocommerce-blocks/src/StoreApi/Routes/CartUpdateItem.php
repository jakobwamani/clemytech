<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * CartUpdateItem class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
class CartUpdateItem extends AbstractCartRoute {
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/update-item';
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
					'key'      => [
						'description' => __( 'Unique identifier (key) for the cart item to update.', 'woocommerce' ),
						'type'        => 'string',
					],
					'quantity' => [
						'description' => __( 'New quantity of the item in the cart.', 'woocommerce' ),
						'type'        => 'integer',
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
		$cart = $this->cart_controller->get_cart_instance();

		if ( isset( $request['quantity'] ) ) {
			$this->cart_controller->set_cart_item_quantity( $request['key'], $request['quantity'] );
=======
		$controller = new CartController();
		$cart       = $controller->get_cart_instance();

		if ( isset( $request['quantity'] ) ) {
			$controller->set_cart_item_quantity( $request['key'], $request['quantity'] );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		}

		return rest_ensure_response( $this->schema->get_item_response( $cart ) );
	}
}
