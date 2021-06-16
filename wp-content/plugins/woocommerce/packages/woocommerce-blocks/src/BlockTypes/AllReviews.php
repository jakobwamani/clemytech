<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\Assets;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * AllReviews class.
 */
class AllReviews extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'all-reviews';

	/**
<<<<<<< HEAD
	 * Get the frontend script handle for this block type.
	 *
	 * @see $this->register_block_type()
	 * @param string $key Data to get, or default to everything.
	 * @return array|string
	 */
	protected function get_block_type_script( $key = null ) {
		$script = [
			'handle'       => 'wc-reviews-frontend',
			'path'         => $this->asset_api->get_block_asset_build_path( 'reviews-frontend' ),
			'dependencies' => [],
		];
		return $key ? $script[ $key ] : $script;
=======
	 * Registers the block type with WordPress.
	 */
	public function register_block_type() {
		register_block_type(
			$this->namespace . '/' . $this->block_name,
			array(
				'render_callback' => array( $this, 'render' ),
				'editor_script'   => 'wc-' . $this->block_name,
				'editor_style'    => 'wc-block-editor',
				'style'           => 'wc-block-style',
				'script'          => 'wc-' . $this->block_name . '-frontend',
				'supports'        => [],
			)
		);
	}

	/**
	 * Register/enqueue scripts used for this block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 */
	protected function enqueue_scripts( array $attributes = [] ) {
		Assets::register_block_script( 'reviews-frontend' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
