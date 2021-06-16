/**
 * External dependencies
 */
import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { __ } from '@wordpress/i18n';
import { getSetting, WC_ASSET_URL } from '@woocommerce/settings';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import { PAYMENT_METHOD_NAME } from './constants';

const settings = getSetting( 'paypal_data', {} );

/**
 * @typedef {import('@woocommerce/type-defs/registered-payment-method-props').RegisteredPaymentMethodProps} RegisteredPaymentMethodProps
 */

/**
 * Content component
 */
const Content = () => {
<<<<<<< HEAD
	return decodeEntities( settings.description || '' );
=======
	return <div>{ decodeEntities( settings.description || '' ) }</div>;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

const paypalPaymentMethod = {
	name: PAYMENT_METHOD_NAME,
	label: (
		<img
			src={ `${ WC_ASSET_URL }/images/paypal.png` }
			alt={ decodeEntities(
				settings.title || __( 'PayPal', 'woocommerce' )
			) }
		/>
	),
	placeOrderButtonLabel: __(
		'Proceed to PayPal',
		'woocommerce'
	),
	content: <Content />,
	edit: <Content />,
	canMakePayment: () => true,
	ariaLabel: decodeEntities(
		settings.title ||
			__( 'Payment via PayPal', 'woocommerce' )
	),
<<<<<<< HEAD
	supports: {
		features: settings.supports ?? [],
	},
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

registerPaymentMethod( paypalPaymentMethod );
