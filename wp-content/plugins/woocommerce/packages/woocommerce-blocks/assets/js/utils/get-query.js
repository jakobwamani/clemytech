/**
 * External dependencies
 */
import { min } from 'lodash';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { DEFAULT_COLUMNS, DEFAULT_ROWS } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

export default function getQuery( blockAttributes, name ) {
	const {
		attributes,
		attrOperator,
		categories,
		catOperator,
		tags,
		tagOperator,
		orderby,
		products,
	} = blockAttributes;
<<<<<<< HEAD
	const columns =
		blockAttributes.columns || getSetting( 'default_columns', 3 );
	const rows = blockAttributes.rows || getSetting( 'default_rows', 3 );
=======
	const columns = blockAttributes.columns || DEFAULT_COLUMNS;
	const rows = blockAttributes.rows || DEFAULT_ROWS;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const apiMax = Math.floor( 100 / columns ) * columns; // Prevent uneven final row.

	const query = {
		status: 'publish',
		per_page: min( [ rows * columns, apiMax ] ),
		catalog_visibility: 'visible',
	};

	if ( categories && categories.length ) {
		query.category = categories.join( ',' );
		if ( catOperator && catOperator === 'all' ) {
			query.category_operator = 'and';
		}
	}

	if ( tags && tags.length > 0 ) {
		query.tag = tags.join( ',' );
		if ( tagOperator && tagOperator === 'all' ) {
			query.tag_operator = 'and';
		}
	}

	if ( orderby ) {
		if ( orderby === 'price_desc' ) {
			query.orderby = 'price';
			query.order = 'desc';
		} else if ( orderby === 'price_asc' ) {
			query.orderby = 'price';
			query.order = 'asc';
		} else if ( orderby === 'title' ) {
			query.orderby = 'title';
			query.order = 'asc';
		} else if ( orderby === 'menu_order' ) {
			query.orderby = 'menu_order';
			query.order = 'asc';
		} else {
			query.orderby = orderby;
		}
	}

	if ( attributes && attributes.length > 0 ) {
		query.attribute_term = attributes.map( ( { id } ) => id ).join( ',' );
		query.attribute = attributes[ 0 ].attr_slug;

		if ( attrOperator ) {
			query.attribute_operator = attrOperator === 'all' ? 'and' : 'in';
		}
	}

	// Toggle query parameters depending on block type.
	switch ( name ) {
		case 'woocommerce/product-best-sellers':
			query.orderby = 'popularity';
			break;
		case 'woocommerce/product-top-rated':
			query.orderby = 'rating';
			break;
		case 'woocommerce/product-on-sale':
			query.on_sale = 1;
			break;
		case 'woocommerce/product-new':
			query.orderby = 'date';
			break;
		case 'woocommerce/handpicked-products':
			query.include = products;
			query.per_page = products.length;
			break;
	}

	return query;
}
