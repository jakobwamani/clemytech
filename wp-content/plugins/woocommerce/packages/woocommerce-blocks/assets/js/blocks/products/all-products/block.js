/**
 * External dependencies
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { ProductListContainer } from '@woocommerce/base-components/product-list';
import { InnerBlockLayoutContextProvider } from '@woocommerce/shared-context';
import { gridBlockPreview } from '@woocommerce/resource-previews';
import { getSetting } from '@woocommerce/settings';
=======
import ProductListContainer from '@woocommerce/base-components/product-list/container';
import { InnerBlockLayoutContextProvider } from '@woocommerce/shared-context';
import { gridBlockPreview } from '@woocommerce/resource-previews';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * The All Products Block.
 */
class Block extends Component {
	static propTypes = {
		/**
		 * The attributes for this block.
		 */
		attributes: PropTypes.object.isRequired,
	};

	render() {
		const { attributes, urlParameterSuffix } = this.props;

		if ( attributes.isPreview ) {
			return gridBlockPreview;
		}

<<<<<<< HEAD
		const hideOutOfStockItems = getSetting( 'hideOutOfStockItems', false );

=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		/**
		 * Todo classes
		 *
		 * wp-block-{$this->block_name},
		 * wc-block-{$this->block_name},
		 */
		return (
			<InnerBlockLayoutContextProvider
				parentName="woocommerce/all-products"
				parentClassName="wc-block-grid"
			>
				<ProductListContainer
					attributes={ attributes }
					urlParameterSuffix={ urlParameterSuffix }
<<<<<<< HEAD
					hideOutOfStockItems={ hideOutOfStockItems }
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				/>
			</InnerBlockLayoutContextProvider>
		);
	}
}

export default Block;
