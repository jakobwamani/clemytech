/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { ALLOWED_STATES } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import StateInput from './state-input.js';

const BillingStateInput = ( props ) => {
<<<<<<< HEAD
	return (
		<StateInput states={ getSetting( 'allowedStates', {} ) } { ...props } />
	);
=======
	return <StateInput states={ ALLOWED_STATES } { ...props } />;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
};

BillingStateInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
};

export default BillingStateInput;
