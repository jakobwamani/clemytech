/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import Button from '@woocommerce/base-components/button';
import { Icon, done as doneIcon } from '@woocommerce/icons';
import { useState, useEffect } from '@wordpress/element';
import { useAddToCartFormContext } from '@woocommerce/base-context';
<<<<<<< HEAD
import {
	useStoreEvents,
	useStoreAddToCart,
} from '@woocommerce/base-context/hooks';
import { useInnerBlockLayoutContext } from '@woocommerce/shared-context';
=======
import { useStoreAddToCart } from '@woocommerce/base-hooks';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Add to Cart Form Button Component.
 */
const AddToCartButton = () => {
	const {
		showFormElements,
		productIsPurchasable,
		productHasOptions,
		product,
		productType,
		isDisabled,
		isProcessing,
		eventRegistration,
		hasError,
		dispatchActions,
	} = useAddToCartFormContext();
<<<<<<< HEAD
	const { parentName } = useInnerBlockLayoutContext();
	const { dispatchStoreEvent } = useStoreEvents();
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const { cartQuantity } = useStoreAddToCart( product.id || 0 );
	const [ addedToCart, setAddedToCart ] = useState( false );
	const addToCartButtonData = product.add_to_cart || {
		url: '',
		text: '',
	};

	// Subscribe to emitter for after processing.
	useEffect( () => {
		const onSuccess = () => {
			if ( ! hasError ) {
				setAddedToCart( true );
			}
			return true;
		};
		const unsubscribeProcessing = eventRegistration.onAddToCartAfterProcessingWithSuccess(
			onSuccess,
			0
		);
		return () => {
			unsubscribeProcessing();
		};
	}, [ eventRegistration, hasError ] );

	/**
	 * We can show a real button if we are:
	 *
	 *  	a) Showing a full add to cart form.
	 * 		b) The product doesn't have options and can therefore be added directly to the cart.
	 * 		c) The product is purchasable.
	 *
	 * Otherwise we show a link instead.
	 */
	const showButton =
		( showFormElements ||
			( ! productHasOptions && productType === 'simple' ) ) &&
		productIsPurchasable;

	return showButton ? (
		<ButtonComponent
			className="wc-block-components-product-add-to-cart-button"
			quantityInCart={ cartQuantity }
			isDisabled={ isDisabled }
			isProcessing={ isProcessing }
			isDone={ addedToCart }
<<<<<<< HEAD
			onClick={ () => {
				dispatchActions.submitForm();
				dispatchStoreEvent( 'cart-add-item', {
					product,
					listName: parentName,
				} );
			} }
=======
			onClick={ () => dispatchActions.submitForm() }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		/>
	) : (
		<LinkComponent
			className="wc-block-components-product-add-to-cart-button"
			href={ addToCartButtonData.url }
			text={
				addToCartButtonData.text ||
				__( 'View Product', 'woocommerce' )
			}
<<<<<<< HEAD
			onClick={ () => {
				dispatchStoreEvent( 'product-view-link', {
					product,
					listName: parentName,
				} );
			} }
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		/>
	);
};

/**
 * Button component for non-purchasable products.
 *
 * @param {Object} props           Incoming props.
 * @param {string} props.className Css classnames.
 * @param {string} props.href      Link for button.
 * @param {string} props.text      Text content for button.
<<<<<<< HEAD
 * @param {function():any} props.onClick Callback to execute when button is clicked.
 */
const LinkComponent = ( { className, href, text, onClick } ) => {
	return (
		<Button
			className={ className }
			href={ href }
			onClick={ onClick }
			rel="nofollow"
		>
=======
 */
const LinkComponent = ( { className, href, text } ) => {
	return (
		<Button className={ className } href={ href } rel="nofollow">
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			{ text }
		</Button>
	);
};

/**
 * Button for purchasable products.
 *
 * @param {Object} props                 Incoming props for component
 * @param {string} props.className       Incoming css class name.
 * @param {number} props.quantityInCart  Quantity of item in cart.
 * @param {boolean} props.isProcessing   Whether processing action is occurring.
 * @param {boolean} props.isDisabled     Whether the button is disabled or not.
 * @param {boolean} props.isDone         Whether processing is done.
 * @param {function():any} props.onClick Callback to execute when button is clicked.
 */
const ButtonComponent = ( {
	className,
	quantityInCart,
	isProcessing,
	isDisabled,
	isDone,
	onClick,
} ) => {
	return (
		<Button
			className={ className }
			disabled={ isDisabled }
			showSpinner={ isProcessing }
			onClick={ onClick }
		>
			{ isDone && quantityInCart > 0
				? sprintf(
<<<<<<< HEAD
						/* translators: %s number of products in cart. */
=======
						// translators: %s number of products in cart.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						_n(
							'%d in cart',
							'%d in cart',
							quantityInCart,
							'woocommerce'
						),
						quantityInCart
				  )
				: __( 'Add to cart', 'woocommerce' ) }
			{ !! isDone && (
				<Icon
					srcElement={ doneIcon }
					alt={ __( 'Done', 'woocommerce' ) }
				/>
			) }
		</Button>
	);
};

export default AddToCartButton;
