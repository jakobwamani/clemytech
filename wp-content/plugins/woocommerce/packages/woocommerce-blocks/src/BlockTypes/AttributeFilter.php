<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Blocks\Assets;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * AttributeFilter class.
 */
class AttributeFilter extends AbstractBlock {
<<<<<<< HEAD
=======

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'attribute-filter';

	/**
<<<<<<< HEAD
	 * Extra data passed through from server to client for block.
	 *
	 * @param array $attributes  Any attributes that currently are available from the block.
	 *                           Note, this will be empty in the editor context when the block is
	 *                           not in the post content on editor load.
	 */
	protected function enqueue_data( array $attributes = [] ) {
		parent::enqueue_data( $attributes );
		$this->asset_data_registry->add( 'attributes', array_values( wc_get_attribute_taxonomies() ), true );
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
		Assets::register_block_script( $this->block_name . '-frontend' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
