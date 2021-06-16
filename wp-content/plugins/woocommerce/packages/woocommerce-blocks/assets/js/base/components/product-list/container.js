/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
<<<<<<< HEAD
import ProductList from './product-list';

const ProductListContainer = ( {
	attributes,
	hideOutOfStockItems = false,
} ) => {
=======
import ProductList from './index';

const ProductListContainer = ( { attributes } ) => {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const [ currentPage, setPage ] = useState( 1 );
	const [ currentSort, setSort ] = useState( attributes.orderby );
	useEffect( () => {
		// if default sort is changed in editor
		setSort( attributes.orderby );
	}, [ attributes.orderby ] );
	const onPageChange = ( newPage ) => {
		setPage( newPage );
	};
	const onSortChange = ( event ) => {
		const newSortValue = event.target.value;
		setSort( newSortValue );
		setPage( 1 );
	};

	return (
		<ProductList
			attributes={ attributes }
<<<<<<< HEAD
			hideOutOfStockItems={ hideOutOfStockItems }
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			currentPage={ currentPage }
			onPageChange={ onPageChange }
			onSortChange={ onSortChange }
			sortValue={ currentSort }
		/>
	);
};

ProductListContainer.propTypes = {
	attributes: PropTypes.object.isRequired,
<<<<<<< HEAD
	hideOutOfStockItems: PropTypes.bool,
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

export default ProductListContainer;
