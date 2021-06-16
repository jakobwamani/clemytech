/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { ALLOWED_COUNTRIES } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import CountryInput from './country-input.js';

const BillingCountryInput = ( props ) => {
<<<<<<< HEAD
	return (
		<CountryInput
			countries={ getSetting( 'allowedCountries', {} ) }
			{ ...props }
		/>
	);
=======
	return <CountryInput countries={ ALLOWED_COUNTRIES } { ...props } />;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

BillingCountryInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
};

export default BillingCountryInput;
