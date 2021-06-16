/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { CHECKOUT_SHOW_LOGIN_REMINDER } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { useCheckoutContext } from '@woocommerce/base-context';

/**
 * Internal dependencies
 */
import { LOGIN_TO_CHECKOUT_URL } from '../utils';

const LoginPrompt = () => {
	const { customerId } = useCheckoutContext();

<<<<<<< HEAD
	if ( ! getSetting( 'checkoutShowLoginReminder', true ) || customerId ) {
=======
	if ( ! CHECKOUT_SHOW_LOGIN_REMINDER || customerId ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		return null;
	}

	return (
		<>
			{ __(
				'Already have an account? ',
				'woocommerce'
			) }
			<a href={ LOGIN_TO_CHECKOUT_URL }>
				{ __( 'Log in.', 'woocommerce' ) }
			</a>
		</>
	);
};

export default LoginPrompt;
