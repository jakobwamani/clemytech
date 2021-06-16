/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getStripeServerData, loadStripe } from '../stripe-utils';
import { StripeCreditCard, getStripeCreditCardIcons } from './payment-method';
import { PAYMENT_METHOD_NAME } from './constants';

const stripePromise = loadStripe();

const StripeComponent = ( props ) => {
	const [ errorMessage, setErrorMessage ] = useState( '' );

	useEffect( () => {
		Promise.resolve( stripePromise ).then( ( { error } ) => {
			if ( error ) {
				setErrorMessage( error.message );
			}
		} );
	}, [ setErrorMessage ] );

	useEffect( () => {
		if ( errorMessage ) {
			throw new Error( errorMessage );
		}
	}, [ errorMessage ] );

	return <StripeCreditCard stripe={ stripePromise } { ...props } />;
};

const StripeLabel = ( props ) => {
	const { PaymentMethodLabel } = props.components;

<<<<<<< HEAD
	const labelText = getStripeServerData().title
		? getStripeServerData().title
		: __( 'Credit / Debit Card', 'woocommerce' );

	return <PaymentMethodLabel text={ labelText } />;
=======
	return (
		<PaymentMethodLabel
			text={ __( 'Credit / Debit Card', 'woocommerce' ) }
		/>
	);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

const cardIcons = getStripeCreditCardIcons();
const stripeCcPaymentMethod = {
	name: PAYMENT_METHOD_NAME,
	label: <StripeLabel />,
	content: <StripeComponent />,
	edit: <StripeComponent />,
	icons: cardIcons,
	canMakePayment: () => stripePromise,
	ariaLabel: __(
		'Stripe Credit Card payment method',
		'woocommerce'
	),
	supports: {
<<<<<<< HEAD
		showSavedCards: getStripeServerData().showSavedCards,
		showSaveOption: getStripeServerData().showSaveOption,
		features: getStripeServerData()?.supports ?? [],
=======
		savePaymentInfo: getStripeServerData().allowSavedCards,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	},
};

export default stripeCcPaymentMethod;
