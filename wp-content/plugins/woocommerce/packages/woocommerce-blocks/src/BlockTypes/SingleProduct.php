<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\Assets;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * SingleProduct class.
 */
class SingleProduct extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'single-product';

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
				'style'           => [ 'wc-block-style', 'wc-block-vendors-style' ],
				'script'          => 'wc-' . $this->block_name . '-frontend',
				'supports'        => [],
			)
		);
	}

	/**
	 * Register/enqueue scripts used for this block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_scripts( array $attributes = [] ) {
		Assets::register_block_script( $this->block_name . '-frontend', $this->block_name . '-frontend' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Render the block on the frontend.
	 *
<<<<<<< HEAD
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content ) {
		return $this->inject_html_data_attributes( $content, $attributes );
=======
	 * @param array  $attributes Block attributes. Default empty array.
	 * @param string $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {
		$block_attributes = is_a( $attributes, '\WP_Block' ) ? $attributes->attributes : $attributes;

		$this->enqueue_assets( $block_attributes );

		return $this->inject_html_data_attributes( $content, $block_attributes );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
