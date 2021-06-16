/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { Fragment, useMemo, useState } from '@wordpress/element';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Component used to show a list of checkboxes in a group.
 *
 * @param {Object} props Incoming props for the component.
 * @param {string} props.className CSS class used.
 * @param {function(string):any} props.onChange Function called when inputs change.
 * @param {Array} props.options Options for list.
 * @param {Array} props.checked Which items are checked.
 * @param {boolean} props.isLoading If loading or not.
 * @param {boolean} props.isDisabled If inputs are disabled or not.
 * @param {number} props.limit Whether to limit the number of inputs showing.
 */
const CheckboxList = ( {
	className,
	onChange = () => {},
	options = [],
	checked = [],
	isLoading = false,
	isDisabled = false,
	limit = 10,
} ) => {
	const [ showExpanded, setShowExpanded ] = useState( false );

	const placeholder = useMemo( () => {
		return [ ...Array( 5 ) ].map( ( x, i ) => (
			<li
				key={ i }
				style={ {
					/* stylelint-disable */
					width: Math.floor( Math.random() * 75 ) + 25 + '%',
				} }
			/>
		) );
	}, [] );

	const renderedShowMore = useMemo( () => {
		const optionCount = options.length;
		const remainingOptionsCount = optionCount - limit;
		return (
			! showExpanded && (
				<li key="show-more" className="show-more">
					<button
						onClick={ () => {
							setShowExpanded( true );
						} }
						aria-expanded={ false }
						aria-label={ sprintf(
<<<<<<< HEAD
							/* translators: %s is referring the remaining count of options */
=======
							/* Translators: %s is referring the remaining count of options */
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
							_n(
								'Show %s more option',
								'Show %s more options',
								remainingOptionsCount,
								'woocommerce'
							),
							remainingOptionsCount
						) }
					>
						{ sprintf(
<<<<<<< HEAD
							/* translators: %s number of options to reveal. */
=======
							// translators: %s number of options to reveal.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
							_n(
								'Show %s more',
								'Show %s more',
								remainingOptionsCount,
								'woocommerce'
							),
							remainingOptionsCount
						) }
					</button>
				</li>
			)
		);
	}, [ options, limit, showExpanded ] );

	const renderedShowLess = useMemo( () => {
		return (
			showExpanded && (
				<li key="show-less" className="show-less">
					<button
						onClick={ () => {
							setShowExpanded( false );
						} }
						aria-expanded={ true }
						aria-label={ __(
							'Show less options',
							'woocommerce'
						) }
					>
						{ __( 'Show less', 'woocommerce' ) }
					</button>
				</li>
			)
		);
	}, [ showExpanded ] );

	const renderedOptions = useMemo( () => {
		// Truncate options if > the limit + 5.
		const optionCount = options.length;
		const shouldTruncateOptions = optionCount > limit + 5;
		return (
<<<<<<< HEAD
			<>
=======
			<Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				{ options.map( ( option, index ) => (
					<Fragment key={ option.value }>
						<li
							{ ...( shouldTruncateOptions &&
								! showExpanded &&
								index >= limit && { hidden: true } ) }
						>
							<input
								type="checkbox"
								id={ option.value }
								value={ option.value }
								onChange={ ( event ) => {
									onChange( event.target.value );
								} }
								checked={ checked.includes( option.value ) }
								disabled={ isDisabled }
							/>
							<label htmlFor={ option.value }>
								{ option.label }
							</label>
						</li>
						{ shouldTruncateOptions &&
							index === limit - 1 &&
							renderedShowMore }
					</Fragment>
				) ) }
				{ shouldTruncateOptions && renderedShowLess }
<<<<<<< HEAD
			</>
=======
			</Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		);
	}, [
		options,
		onChange,
		checked,
		showExpanded,
		limit,
		renderedShowLess,
		renderedShowMore,
		isDisabled,
	] );

	const classes = classNames(
		'wc-block-checkbox-list',
		'wc-block-components-checkbox-list',
		{
			'is-loading': isLoading,
		},
		className
	);

	return (
		<ul className={ classes }>
			{ isLoading ? placeholder : renderedOptions }
		</ul>
	);
};

CheckboxList.propTypes = {
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(
		PropTypes.shape( {
			label: PropTypes.node.isRequired,
			value: PropTypes.string.isRequired,
		} )
	),
	checked: PropTypes.array,
	className: PropTypes.string,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool,
	limit: PropTypes.number,
};

export default CheckboxList;
