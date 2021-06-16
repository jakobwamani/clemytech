/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
<<<<<<< HEAD
import { ValidatedTextInput } from '@woocommerce/base-components/text-input';
import { useCheckoutContext } from '@woocommerce/base-context';
import { getSetting } from '@woocommerce/settings';
=======
import { DebouncedValidatedTextInput } from '@woocommerce/base-components/text-input';
import { useCheckoutContext } from '@woocommerce/base-context';
import {
	CHECKOUT_ALLOWS_GUEST,
	CHECKOUT_ALLOWS_SIGNUP,
} from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import CheckboxControl from '@woocommerce/base-components/checkbox-control';

/**
 * Internal dependencies
 */
import LoginPrompt from './login-prompt';
const ContactFieldsStep = ( {
	emailValue,
	onChangeEmail,
	allowCreateAccount,
} ) => {
	const {
		isProcessing: checkoutIsProcessing,
		customerId,
		shouldCreateAccount,
		setShouldCreateAccount,
	} = useCheckoutContext();

	const createAccountUI = ! customerId &&
		allowCreateAccount &&
<<<<<<< HEAD
		getSetting( 'checkoutAllowsGuest', false ) &&
		getSetting( 'checkoutAllowsSignup', false ) && (
=======
		CHECKOUT_ALLOWS_GUEST &&
		CHECKOUT_ALLOWS_SIGNUP && (
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			<CheckboxControl
				className="wc-block-checkout__create-account"
				label={ __(
					'Create an account?',
					'woocommerce'
				) }
				checked={ shouldCreateAccount }
				onChange={ ( value ) => setShouldCreateAccount( value ) }
			/>
		);
	return (
		<FormStep
			id="contact-fields"
			disabled={ checkoutIsProcessing }
			className="wc-block-checkout__contact-fields"
			title={ __(
				'Contact information',
				'woocommerce'
			) }
			description={ __(
				"We'll use this email to send you details and updates about your order.",
				'woocommerce'
			) }
			stepHeadingContent={ () => <LoginPrompt /> }
		>
<<<<<<< HEAD
			<ValidatedTextInput
=======
			<DebouncedValidatedTextInput
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				id="email"
				type="email"
				label={ __( 'Email address', 'woocommerce' ) }
				value={ emailValue }
				autoComplete="email"
				onChange={ onChangeEmail }
				required={ true }
			/>
			{ createAccountUI }
		</FormStep>
	);
};

export default ContactFieldsStep;
