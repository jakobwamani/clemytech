/**
 * External dependencies
 */
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { DEFAULT_COLUMNS, DEFAULT_ROWS } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

export const sharedAttributeBlockTypes = [
	'woocommerce/product-best-sellers',
	'woocommerce/product-category',
	'woocommerce/product-new',
	'woocommerce/product-on-sale',
	'woocommerce/product-top-rated',
];

export default {
	/**
	 * Number of columns.
	 */
	columns: {
		type: 'number',
<<<<<<< HEAD
		default: getSetting( 'default_columns', 3 ),
=======
		default: DEFAULT_COLUMNS,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	},

	/**
	 * Number of rows.
	 */
	rows: {
		type: 'number',
<<<<<<< HEAD
		default: getSetting( 'default_rows', 3 ),
=======
		default: DEFAULT_ROWS,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	},

	/**
	 * How to align cart buttons.
	 */
	alignButtons: {
		type: 'boolean',
		default: false,
	},

	/**
	 * Product category, used to display only products in the given categories.
	 */
	categories: {
		type: 'array',
		default: [],
	},

	/**
	 * Product category operator, used to restrict to products in all or any selected categories.
	 */
	catOperator: {
		type: 'string',
		default: 'any',
	},

	/**
	 * Content visibility setting
	 */
	contentVisibility: {
		type: 'object',
		default: {
			title: true,
			price: true,
			rating: true,
			button: true,
		},
	},

	/**
	 * Are we previewing?
	 */
	isPreview: {
		type: 'boolean',
		default: false,
	},
};
