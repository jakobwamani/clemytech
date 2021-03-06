<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * Cart class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 */
class Cart extends AbstractCartRoute {
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart';
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
			'schema' => [ $this->schema, 'get_public_item_schema' ],
		];
	}

	/**
	 * Handle the request and return a valid response for this endpoint.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_response( \WP_REST_Request $request ) {
<<<<<<< HEAD
		return rest_ensure_response( $this->schema->get_item_response( $this->cart_controller->get_cart_instance() ) );
=======
		$controller = new CartController();
		$cart       = $controller->get_cart_instance();

		return rest_ensure_response( $this->schema->get_item_response( $cart ) );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
