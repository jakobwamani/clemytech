/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
<<<<<<< HEAD
=======
import { useValidationContext } from '@woocommerce/base-context';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { useShallowEqual } from '@woocommerce/base-hooks';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withInstanceId } from '@woocommerce/base-hocs/with-instance-id';
<<<<<<< HEAD
import {
	ValidationInputError,
	useValidationContext,
} from '@woocommerce/base-context';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
<<<<<<< HEAD
import Select from './select';
=======
import { ValidationInputError } from '../validation';
import Select from './index';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import './style.scss';

const ValidatedSelect = ( {
	className,
	id,
	value,
	instanceId,
	required,
	errorId,
	errorMessage = __(
		'Please select a value.',
		'woocommerce'
	),
	...rest
} ) => {
	const selectId = id || 'select-' + instanceId;
	errorId = errorId || selectId;

	// Prevents re-renders when value is an object, e.g. {key: "NY", name: "New York"}
	const currentValue = useShallowEqual( value );

	const {
		getValidationError,
		setValidationErrors,
		clearValidationError,
	} = useValidationContext();

	useEffect( () => {
		if ( ! required || currentValue ) {
			clearValidationError( errorId );
		} else {
			setValidationErrors( {
				[ errorId ]: {
					message: errorMessage,
					hidden: true,
				},
			} );
		}
	}, [
		clearValidationError,
		currentValue,
		errorId,
		errorMessage,
		required,
		setValidationErrors,
	] );

	// Remove validation errors when unmounted.
	useEffect( () => {
		return () => {
			clearValidationError( errorId );
		};
	}, [ clearValidationError, errorId ] );

	const error = getValidationError( errorId ) || {};

	return (
		<Select
			id={ selectId }
			className={ classnames( className, {
				'has-error': error.message && ! error.hidden,
			} ) }
			feedback={ <ValidationInputError propertyName={ errorId } /> }
			value={ currentValue }
			{ ...rest }
		/>
	);
};

ValidatedSelect.propTypes = {
	className: PropTypes.string,
	errorId: PropTypes.string,
	errorMessage: PropTypes.string,
	id: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.shape( {
		key: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	} ),
};

export default withInstanceId( ValidatedSelect );
