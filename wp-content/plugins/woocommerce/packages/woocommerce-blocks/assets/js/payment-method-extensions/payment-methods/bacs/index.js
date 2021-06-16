/**
 * External dependencies
 */
import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { __ } from '@wordpress/i18n';
import { getSetting } from '@woocommerce/settings';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Internal dependencies
 */
import { PAYMENT_METHOD_NAME } from './constants';

const settings = getSetting( 'bacs_data', {} );
const defaultLabel = __(
	'Direct bank transfer',
	'woocommerce'
);
const label = decodeEntities( settings.title ) || defaultLabel;

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

/**
 * Label component
 *
 * @param {*} props Props from payment API.
 */
const Label = ( props ) => {
	const { PaymentMethodLabel } = props.components;
	return <PaymentMethodLabel text={ label } />;
};

/**
 * Bank transfer (BACS) payment method config object.
 */
const bankTransferPaymentMethod = {
	name: PAYMENT_METHOD_NAME,
	label: <Label />,
	content: <Content />,
	edit: <Content />,
	canMakePayment: () => true,
	ariaLabel: label,
<<<<<<< HEAD
	supports: {
		features: settings?.supports ?? [],
	},
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

registerPaymentMethod( bankTransferPaymentMethod );
