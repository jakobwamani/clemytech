/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { SHIPPING_COUNTRIES } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import CountryInput from './country-input.js';

const ShippingCountryInput = ( props ) => {
<<<<<<< HEAD
	return (
		<CountryInput
			countries={ getSetting( 'shippingCountries', {} ) }
			{ ...props }
		/>
	);
=======
	return <CountryInput countries={ SHIPPING_COUNTRIES } { ...props } />;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

ShippingCountryInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
};

export default ShippingCountryInput;
