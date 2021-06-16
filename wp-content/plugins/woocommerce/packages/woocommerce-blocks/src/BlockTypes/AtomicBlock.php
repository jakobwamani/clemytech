<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * AtomicBlock class.
 *
 * @internal
 */
class AtomicBlock extends AbstractBlock {
	/**
	 * Inject attributes and block name.
	 *
<<<<<<< HEAD
	 * @param array  $attributes Block attributes.
	 * @param string $content    Block content.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content ) {
		return $this->inject_html_data_attributes( $content, $attributes );
	}

	/**
	 * Get the editor script data for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 * @return null
	 */
	protected function get_block_type_editor_script( $key = null ) {
		return null;
	}

	/**
	 * Get the editor style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_type_editor_style() {
		return null;
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 * @return null
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_type_style() {
		return null;
=======
	 * @param array|\WP_Block $attributes Block attributes, or an instance of a WP_Block. Defaults to an empty array.
	 * @param string          $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = [], $content = '' ) {
		$block_attributes = is_a( $attributes, '\WP_Block' ) ? $attributes->attributes : $attributes;
		return $this->inject_html_data_attributes( $content, $block_attributes );
	}

	/**
	 * Registers the block type with WordPress.
	 */
	public function register_block_type() {
		register_block_type(
			$this->namespace . '/' . $this->block_name,
			array(
				'render_callback' => array( $this, 'render' ),
				'supports'        => [],
			)
		);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	/**
	 * Converts block attributes to HTML data attributes.
	 *
	 * @param array $attributes Key value pairs of attributes.
	 * @return string Rendered HTML attributes.
	 */
	protected function get_html_data_attributes( array $attributes ) {
		$data = parent::get_html_data_attributes( $attributes );
		return trim( $data . ' data-block-name="' . esc_attr( $this->namespace . '/' . $this->block_name ) . '"' );
	}
}
