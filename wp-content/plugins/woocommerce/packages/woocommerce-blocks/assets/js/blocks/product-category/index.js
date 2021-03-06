/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { without } from 'lodash';
import { Icon, folder } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import './editor.scss';
import Block from './block';
<<<<<<< HEAD
=======
import { deprecatedConvertToShortcode } from '../../utils/deprecations';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import sharedAttributes, {
	sharedAttributeBlockTypes,
} from '../../utils/shared-attributes';

/**
 * Register and run the "Products by Category" block.
 */
registerBlockType( 'woocommerce/product-category', {
	title: __( 'Products by Category', 'woocommerce' ),
	icon: {
		src: <Icon srcElement={ folder } />,
		foreground: '#96588a',
	},
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woocommerce' ) ],
	description: __(
		'Display a grid of products from your selected categories.',
		'woocommerce'
	),
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	example: {
		attributes: {
			isPreview: true,
		},
	},
	attributes: {
		...sharedAttributes,

		/**
		 * Toggle for edit mode in the block preview.
		 */
		editMode: {
			type: 'boolean',
			default: true,
		},

		/**
		 * How to order the products: 'date', 'popularity', 'price_asc', 'price_desc' 'rating', 'title'.
		 */
		orderby: {
			type: 'string',
			default: 'date',
		},
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: without(
					sharedAttributeBlockTypes,
					'woocommerce/product-category'
				),
				transform: ( attributes ) =>
					createBlock( 'woocommerce/product-category', {
						...attributes,
						editMode: false,
					} ),
			},
		],
	},

<<<<<<< HEAD
=======
	deprecated: [
		{
			// Deprecate shortcode save method in favor of dynamic rendering.
			attributes: {
				...sharedAttributes,
				editMode: {
					type: 'boolean',
					default: true,
				},
				orderby: {
					type: 'string',
					default: 'date',
				},
			},
			save: deprecatedConvertToShortcode(
				'woocommerce/product-category'
			),
		},
	],

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	/**
	 * Renders and manages the block.
	 *
	 * @param {Object} props Props to pass to block.
	 */
	edit( props ) {
		return <Block { ...props } />;
	},

	save() {
		return null;
	},
} );
