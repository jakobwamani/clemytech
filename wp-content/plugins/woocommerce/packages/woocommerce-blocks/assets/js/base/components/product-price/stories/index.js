/**
 * External dependencies
 */
import { number, select } from '@storybook/addon-knobs';
<<<<<<< HEAD
import { currencyKnob } from '@woocommerce/knobs';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import ProductPrice from '../';

export default {
	title: 'WooCommerce Blocks/@base-components/ProductPrice',
	component: ProductPrice,
};

<<<<<<< HEAD
export const standard = () => {
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
=======
const getKnobs = () => {
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currencies = [
		{
			label: 'USD',
			code: 'USD',
			symbol: '$',
			thousandSeparator: ',',
			decimalSeparator: '.',
			minorUnit: 2,
			prefix: '$',
			suffix: '',
		},
		{
			label: 'EUR',
			code: 'EUR',
			symbol: '€',
			thousandSeparator: '.',
			decimalSeparator: ',',
			minorUnit: 2,
			prefix: '',
			suffix: '€',
		},
	];
	const currency = select( 'Currency', currencies, currencies[ 0 ] );

	return { align, currency };
};

export const standard = () => {
	const { align, currency } = getKnobs();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const price = number( 'Price', 4000 );

	return (
		<ProductPrice align={ align } currency={ currency } price={ price } />
	);
};

export const sale = () => {
<<<<<<< HEAD
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
=======
	const { align, currency } = getKnobs();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const price = number( 'Price', 3000 );
	const regularPrice = number( 'Regular price', 4000 );

	return (
		<ProductPrice
			align={ align }
			currency={ currency }
			price={ price }
			regularPrice={ regularPrice }
		/>
	);
};

export const range = () => {
<<<<<<< HEAD
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
=======
	const { align, currency } = getKnobs();
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const minPrice = number( 'Min price', 3000 );
	const maxPrice = number( 'Max price', 5000 );

	return (
		<ProductPrice
			align={ align }
			currency={ currency }
			minPrice={ minPrice }
			maxPrice={ maxPrice }
		/>
	);
};
