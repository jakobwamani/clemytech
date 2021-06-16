/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { getSetting } from '@woocommerce/settings';
import { CART_STORE_KEY } from '@woocommerce/block-data';
<<<<<<< HEAD
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { LAST_CART_UPDATE_TIMESTAMP_KEY } from '../data/cart/constants';
=======
import { useSelect } from '@wordpress/data';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Hydrate Cart API data.
 *
 * Makes cart data available without an API request to wc/store/cart/.
 */
const useStoreCartApiHydration = () => {
<<<<<<< HEAD
	const preloadedApiRequests = useRef(
		getSetting( 'preloadedApiRequests', {} )
	);
	const { setIsCartDataStale } = useDispatch( CART_STORE_KEY );

	useSelect( ( select, registry ) => {
		const cartData = preloadedApiRequests.current[ '/wc/store/cart' ]?.body;

		if ( ! cartData ) {
			return;
		}

		const { isResolving, hasFinishedResolution, isCartDataStale } = select(
			CART_STORE_KEY
		);

		/**
		 * This should only execute once. When the code further down the file executes
		 * then the condition directly below this comment should never evaluate to true
		 * on subsequent executions. Because of this localStorage.getItem won't be
		 * called multiple times.
		 */
		if (
			! isCartDataStale() &&
			! isResolving( 'getCartData' ) &&
			! hasFinishedResolution( 'getCartData', [] )
		) {
			const lastCartUpdateRaw = window.localStorage.getItem(
				LAST_CART_UPDATE_TIMESTAMP_KEY
			);

			if ( lastCartUpdateRaw ) {
				const lastCartUpdate = parseFloat( lastCartUpdateRaw );
				const cartGeneratedTimestamp = parseFloat(
					cartData.generated_timestamp
				);

				const needsUpdateFromAPI =
					! isNaN( cartGeneratedTimestamp ) &&
					! isNaN( lastCartUpdate ) &&
					lastCartUpdate > cartGeneratedTimestamp;

				if ( needsUpdateFromAPI ) {
					setIsCartDataStale();
				}
			}
		}
=======
	const cartData = useRef( getSetting( 'cartData' ) );

	useSelect( ( select, registry ) => {
		if ( ! cartData.current ) {
			return;
		}

		const { isResolving, hasFinishedResolution } = select( CART_STORE_KEY );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		const {
			receiveCart,
			receiveError,
			startResolution,
			finishResolution,
		} = registry.dispatch( CART_STORE_KEY );

		if (
<<<<<<< HEAD
			! isCartDataStale() &&
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			! isResolving( 'getCartData', [] ) &&
			! hasFinishedResolution( 'getCartData', [] )
		) {
			startResolution( 'getCartData', [] );
<<<<<<< HEAD
			if ( cartData?.code?.includes( 'error' ) ) {
				receiveError( cartData );
			} else {
				receiveCart( cartData );
=======
			if ( cartData.current?.code?.includes( 'error' ) ) {
				receiveError( cartData.current );
			} else {
				receiveCart( cartData.current );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			}
			finishResolution( 'getCartData', [] );
		}
	}, [] );
};

/**
 * HOC that calls the useStoreCartApiHydration hook.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withStoreCartApiHydration = ( OriginalComponent ) => {
	return ( props ) => {
		useStoreCartApiHydration();
		return <OriginalComponent { ...props } />;
	};
};

export default withStoreCartApiHydration;
