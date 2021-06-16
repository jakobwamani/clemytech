/**
 * External dependencies
 */
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { DEFAULT_COLUMNS, DEFAULT_ROWS } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import { DEFAULT_PRODUCT_LIST_LAYOUT } from './base-utils';

export const defaults = {
<<<<<<< HEAD
	columns: getSetting( 'default_columns', 3 ),
	rows: getSetting( 'default_rows', 3 ),
=======
	columns: DEFAULT_COLUMNS,
	rows: DEFAULT_ROWS,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	alignButtons: false,
	contentVisibility: {
		orderBy: true,
	},
	orderby: 'date',
	layoutConfig: DEFAULT_PRODUCT_LIST_LAYOUT,
	isPreview: false,
};

export const attributes = {
	/**
	 * Number of columns.
	 */
	columns: {
		type: 'number',
	},
	/**
	 * Number of rows.
	 */
	rows: {
		type: 'number',
	},
	/**
	 * How to align cart buttons.
	 */
	alignButtons: {
		type: 'boolean',
	},
	/**
	 * Content visibility setting
	 */
	contentVisibility: {
		type: 'object',
	},
	/**
	 * Order to use for the products listing.
	 */
	orderby: {
		type: 'string',
	},
	/**
	 * Layout config.
	 */
	layoutConfig: {
		type: 'array',
	},
	/**
	 * Are we previewing?
	 */
	isPreview: {
		type: 'boolean',
		default: false,
	},
};
