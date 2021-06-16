<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Schemas;

/**
 * ErrorSchema class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 * @since 2.5.0
 */
class ErrorSchema extends AbstractSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'error';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'error';

	/**
	 * Product schema properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		return [
			'code'    => [
				'description' => __( 'Error code', 'woocommerce' ),
				'type'        => 'string',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'message' => [
				'description' => __( 'Error message', 'woocommerce' ),
				'type'        => 'string',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
		];
	}

	/**
<<<<<<< HEAD
	 * Convert a WP_Error into an object suitable for the response.
=======
	 * Convert a WooCommerce product into an object suitable for the response.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	 *
	 * @param \WP_Error $error Error object.
	 * @return array
	 */
	public function get_item_response( \WP_Error $error ) {
		return [
			'code'    => $this->prepare_html_response( $error->get_error_code() ),
			'message' => $this->prepare_html_response( $error->get_error_message() ),
		];
	}

}
