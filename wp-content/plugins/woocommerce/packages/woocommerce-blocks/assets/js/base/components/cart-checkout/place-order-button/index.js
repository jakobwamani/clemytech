/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
<<<<<<< HEAD
import { useCheckoutSubmit } from '@woocommerce/base-context/hooks';
=======
import { useCheckoutSubmit } from '@woocommerce/base-hooks';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { Icon, done } from '@woocommerce/icons';
import Button from '@woocommerce/base-components/button';

const PlaceOrderButton = () => {
	const {
		submitButtonText,
		onSubmit,
		isCalculating,
		waitingForProcessing,
		waitingForRedirect,
	} = useCheckoutSubmit();

	return (
		<Button
			className="wc-block-components-checkout-place-order-button"
			onClick={ onSubmit }
			disabled={
				isCalculating || waitingForProcessing || waitingForRedirect
			}
			showSpinner={ waitingForProcessing }
		>
			{ waitingForRedirect ? (
				<Icon
					srcElement={ done }
					alt={ __( 'Done', 'woocommerce' ) }
				/>
			) : (
				submitButtonText
			) }
		</Button>
	);
};

export default PlaceOrderButton;
