/**
 * External dependencies
 */
<<<<<<< HEAD
import { useEffect } from '@wordpress/element';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { withProduct } from '@woocommerce/block-hocs';
import {
	InnerBlockLayoutContextProvider,
	ProductDataContextProvider,
} from '@woocommerce/shared-context';
import { StoreNoticesProvider } from '@woocommerce/base-context';
<<<<<<< HEAD
import { useStoreEvents } from '@woocommerce/base-context/hooks';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import { BLOCK_NAME } from './constants';

/** @typedef {import('react')} React */

/**
 * The Single Product Block.
 *
 * @param {Object} props Incoming props for the component.
 * @param {boolean} props.isLoading
 * @param {Object} props.product
 * @param {React.ReactChildren} props.children
 */
const Block = ( { isLoading, product, children } ) => {
<<<<<<< HEAD
	const { dispatchStoreEvent } = useStoreEvents();
	const className = 'wc-block-single-product wc-block-layout';
	const noticeContext = `woocommerce/single-product/${ product?.id || 0 }`;

	useEffect( () => {
		dispatchStoreEvent( 'product-render', {
			product,
			listName: BLOCK_NAME,
		} );
	}, [ product, dispatchStoreEvent ] );

=======
	const className = 'wc-block-single-product wc-block-layout';
	const noticeContext = `woocommerce/single-product/${ product?.id || 0 }`;

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	return (
		<InnerBlockLayoutContextProvider
			parentName={ BLOCK_NAME }
			parentClassName={ className }
		>
			<ProductDataContextProvider
				product={ product }
				isLoading={ isLoading }
			>
				<StoreNoticesProvider context={ noticeContext }>
					<div className={ className }>{ children }</div>
				</StoreNoticesProvider>
			</ProductDataContextProvider>
		</InnerBlockLayoutContextProvider>
	);
};

export default withProduct( Block );
