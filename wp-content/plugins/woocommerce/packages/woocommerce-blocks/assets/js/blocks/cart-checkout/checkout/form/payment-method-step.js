/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
import {
	useCheckoutContext,
	StoreNoticesProvider,
} from '@woocommerce/base-context';
import {
<<<<<<< HEAD
	useStoreCart,
	useEmitResponse,
	usePaymentMethods,
} from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import { PaymentMethods } from '../../payment-methods';
=======
	useEmitResponse,
	usePaymentMethods,
	useStoreCart,
} from '@woocommerce/base-hooks';
import { PaymentMethods } from '@woocommerce/base-components/payment-methods';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

const PaymentMethodStep = () => {
	const { isProcessing: checkoutIsProcessing } = useCheckoutContext();
	const { cartNeedsPayment } = useStoreCart();
	const { paymentMethods } = usePaymentMethods();
	const { noticeContexts } = useEmitResponse();

	if ( ! cartNeedsPayment ) {
		return null;
	}

	return (
		<FormStep
			id="payment-method"
			disabled={ checkoutIsProcessing }
			className="wc-block-checkout__payment-method"
			title={ __( 'Payment method', 'woocommerce' ) }
			description={
				Object.keys( paymentMethods ).length > 1
					? __(
							'Select a payment method below.',
							'woocommerce'
					  )
					: ''
			}
		>
			<StoreNoticesProvider context={ noticeContexts.PAYMENTS }>
				<PaymentMethods />
			</StoreNoticesProvider>
		</FormStep>
	);
};

export default PaymentMethodStep;
