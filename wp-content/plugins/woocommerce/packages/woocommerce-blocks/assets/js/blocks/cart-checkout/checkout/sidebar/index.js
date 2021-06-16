/**
 * External dependencies
 */
import {
	OrderSummary,
<<<<<<< HEAD
	TotalsCoupon,
	TotalsDiscount,
	TotalsFooterItem,
	TotalsShipping,
} from '@woocommerce/base-components/cart-checkout';
import {
	Subtotal,
	TotalsFees,
	TotalsTaxes,
	ExperimentalOrderMeta,
} from '@woocommerce/blocks-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useShippingDataContext } from '@woocommerce/base-context';
import {
	useStoreCartCoupons,
	useStoreCart,
} from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
=======
	SubtotalsItem,
	TotalsFeesItem,
	TotalsCouponCodeInput,
	TotalsDiscountItem,
	TotalsFooterItem,
	TotalsShippingItem,
	TotalsTaxesItem,
} from '@woocommerce/base-components/cart-checkout';
import { useShippingDataContext } from '@woocommerce/base-context';
import { getCurrencyFromPriceResponse } from '@woocommerce/base-utils';
import {
	COUPONS_ENABLED,
	DISPLAY_CART_PRICES_INCLUDING_TAX,
} from '@woocommerce/block-settings';
import { useStoreCartCoupons } from '@woocommerce/base-hooks';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

const CheckoutSidebar = ( {
	cartCoupons = [],
	cartItems = [],
<<<<<<< HEAD
	cartFees = [],
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	cartTotals = {},
} ) => {
	const {
		applyCoupon,
		removeCoupon,
		isApplyingCoupon,
		isRemovingCoupon,
	} = useStoreCartCoupons();

	const { needsShipping } = useShippingDataContext();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

<<<<<<< HEAD
	// Prepare props to pass to the ExperimentalOrderMeta slot fill.
	// We need to pluck out receiveCart.
	// eslint-disable-next-line no-unused-vars
	const { extensions, receiveCart, ...cart } = useStoreCart();
	const slotFillProps = {
		extensions,
		cart,
	};

	return (
		<>
			<OrderSummary cartItems={ cartItems } />
			<Subtotal currency={ totalsCurrency } values={ cartTotals } />
			<TotalsFees currency={ totalsCurrency } cartFees={ cartFees } />
			<TotalsDiscount
=======
	return (
		<>
			<OrderSummary cartItems={ cartItems } />
			<SubtotalsItem currency={ totalsCurrency } values={ cartTotals } />
			<TotalsFeesItem currency={ totalsCurrency } values={ cartTotals } />
			<TotalsDiscountItem
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				cartCoupons={ cartCoupons }
				currency={ totalsCurrency }
				isRemovingCoupon={ isRemovingCoupon }
				removeCoupon={ removeCoupon }
				values={ cartTotals }
			/>
			{ needsShipping && (
<<<<<<< HEAD
				<TotalsShipping
=======
				<TotalsShippingItem
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					showCalculator={ false }
					showRateSelector={ false }
					values={ cartTotals }
					currency={ totalsCurrency }
				/>
			) }
<<<<<<< HEAD
			{ ! getSetting( 'displayCartPricesIncludingTax', false ) && (
				<TotalsTaxes
=======
			{ ! DISPLAY_CART_PRICES_INCLUDING_TAX && (
				<TotalsTaxesItem
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					currency={ totalsCurrency }
					values={ cartTotals }
				/>
			) }
<<<<<<< HEAD
			{ getSetting( 'couponsEnabled', true ) && (
				<TotalsCoupon
=======
			{ COUPONS_ENABLED && (
				<TotalsCouponCodeInput
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					onSubmit={ applyCoupon }
					initialOpen={ false }
					isLoading={ isApplyingCoupon }
				/>
			) }
			<TotalsFooterItem
				currency={ totalsCurrency }
				values={ cartTotals }
			/>
<<<<<<< HEAD
			<ExperimentalOrderMeta.Slot { ...slotFillProps } />
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		</>
	);
};

export default CheckoutSidebar;
