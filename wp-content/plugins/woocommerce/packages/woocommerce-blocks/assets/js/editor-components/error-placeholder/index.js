/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
<<<<<<< HEAD
=======
import { Fragment } from '@wordpress/element';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import PropTypes from 'prop-types';
import { Icon, notice } from '@woocommerce/icons';
import classNames from 'classnames';
import { Button, Placeholder, Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import ErrorMessage from './error-message.js';
import './editor.scss';

const ErrorPlaceholder = ( { className, error, isLoading, onRetry } ) => (
	<Placeholder
		icon={ <Icon srcElement={ notice } /> }
		label={ __(
			'Sorry, an error occurred',
			'woocommerce'
		) }
		className={ classNames( 'wc-block-api-error', className ) }
	>
		<ErrorMessage error={ error } />
		{ onRetry && (
<<<<<<< HEAD
			<>
				{ isLoading ? (
					<Spinner />
				) : (
					<Button isSecondary onClick={ onRetry }>
						{ __( 'Retry', 'woocommerce' ) }
					</Button>
				) }
			</>
=======
			<Fragment>
				{ isLoading ? (
					<Spinner />
				) : (
					<Button isDefault onClick={ onRetry }>
						{ __( 'Retry', 'woocommerce' ) }
					</Button>
				) }
			</Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		) }
	</Placeholder>
);

ErrorPlaceholder.propTypes = {
	/**
	 * Classname to add to placeholder in addition to the defaults.
	 */
	className: PropTypes.string,
	/**
	 * The error object.
	 */
	error: PropTypes.shape( {
		/**
		 * Human-readable error message to display.
		 */
		message: PropTypes.node,
		/**
		 * Context in which the error was triggered. That will determine how the error is displayed to the user.
		 */
		type: PropTypes.oneOf( [ 'api', 'general' ] ),
	} ),
	/**
	 * Whether there is a request running, so the 'Retry' button is hidden and
	 * a spinner is shown instead.
	 */
	isLoading: PropTypes.bool,
	/**
	 * Callback to retry an action.
	 */
	onRetry: PropTypes.func,
};

export default ErrorPlaceholder;
