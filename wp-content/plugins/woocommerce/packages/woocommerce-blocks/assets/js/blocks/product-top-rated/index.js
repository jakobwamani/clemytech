/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { Icon, thumbUp } from '@woocommerce/icons';
import { without } from 'lodash';

/**
 * Internal dependencies
 */
import Block from './block';
<<<<<<< HEAD
=======
import { deprecatedConvertToShortcode } from '../../utils/deprecations';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import sharedAttributes, {
	sharedAttributeBlockTypes,
} from '../../utils/shared-attributes';

const blockTypeName = 'woocommerce/product-top-rated';

registerBlockType( blockTypeName, {
	title: __( 'Top Rated Products', 'woocommerce' ),
	icon: {
		src: <Icon srcElement={ thumbUp } />,
		foreground: '#96588a',
	},
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woocommerce' ) ],
	description: __(
		'Display a grid of your top rated products.',
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
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: without( sharedAttributeBlockTypes, blockTypeName ),
				transform: ( attributes ) =>
					createBlock( 'woocommerce/product-top-rated', attributes ),
			},
		],
	},

<<<<<<< HEAD
=======
	deprecated: [
		{
			// Deprecate shortcode save method in favor of dynamic rendering.
			attributes: sharedAttributes,
			save: deprecatedConvertToShortcode( blockTypeName ),
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
