/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import FormattedMonetaryAmount from '@woocommerce/base-components/formatted-monetary-amount';
import classNames from 'classnames';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { createInterpolateElement } from 'wordpress-element';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import './style.scss';

const PriceRange = ( {
<<<<<<< HEAD
=======
	className,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	currency,
	maxPrice,
	minPrice,
	priceClassName,
	priceStyle,
} ) => {
	return (
<<<<<<< HEAD
		<>
=======
		<span className={ className }>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			<FormattedMonetaryAmount
				className={ classNames(
					'wc-block-components-product-price__value',
					priceClassName
				) }
				currency={ currency }
				value={ minPrice }
				style={ priceStyle }
			/>
			&nbsp;&mdash;&nbsp;
			<FormattedMonetaryAmount
				className={ classNames(
					'wc-block-components-product-price__value',
					priceClassName
				) }
				currency={ currency }
				value={ maxPrice }
				style={ priceStyle }
			/>
<<<<<<< HEAD
		</>
=======
		</span>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	);
};

const SalePrice = ( {
<<<<<<< HEAD
=======
	className,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	currency,
	regularPriceClassName,
	regularPriceStyle,
	regularPrice,
	priceClassName,
	priceStyle,
	price,
} ) => {
	return (
<<<<<<< HEAD
		<>
=======
		<span className={ className }>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			<span className="screen-reader-text">
				{ __( 'Previous price:', 'woocommerce' ) }
			</span>
			<FormattedMonetaryAmount
				currency={ currency }
				renderText={ ( value ) => (
					<del
						className={ classNames(
							'wc-block-components-product-price__regular',
							regularPriceClassName
						) }
						style={ regularPriceStyle }
					>
						{ value }
					</del>
				) }
				value={ regularPrice }
			/>
			<span className="screen-reader-text">
				{ __( 'Discounted price:', 'woocommerce' ) }
			</span>
			<FormattedMonetaryAmount
				currency={ currency }
				renderText={ ( value ) => (
					<ins
						className={ classNames(
							'wc-block-components-product-price__value',
							'is-discounted',
							priceClassName
						) }
						style={ priceStyle }
					>
						{ value }
					</ins>
				) }
				value={ price }
			/>
<<<<<<< HEAD
		</>
=======
		</span>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	);
};

const ProductPrice = ( {
	align,
	className,
	currency,
<<<<<<< HEAD
	format = '<price/>',
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	maxPrice = null,
	minPrice = null,
	price = null,
	priceClassName,
	priceStyle,
	regularPrice,
	regularPriceClassName,
	regularPriceStyle,
} ) => {
	const wrapperClassName = classNames(
		className,
		'price',
		'wc-block-components-product-price',
		{
			[ `wc-block-components-product-price--align-${ align }` ]: align,
		}
	);

<<<<<<< HEAD
	if ( ! format.includes( '<price/>' ) ) {
		format = '<price/>';
		// eslint-disable-next-line no-console
		console.error( 'Price formats need to include the `<price/>` tag.' );
	}

	const isDiscounted = regularPrice && price !== regularPrice;
	let priceComponent = (
		<span
			className={ classNames(
				'wc-block-components-product-price__value',
				priceClassName
			) }
		/>
	);

	if ( isDiscounted ) {
		priceComponent = (
			<SalePrice
=======
	const isDiscounted = regularPrice && price !== regularPrice;

	if ( isDiscounted ) {
		return (
			<SalePrice
				className={ wrapperClassName }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				currency={ currency }
				price={ price }
				priceClassName={ priceClassName }
				priceStyle={ priceStyle }
				regularPrice={ regularPrice }
				regularPriceClassName={ regularPriceClassName }
				regularPriceStyle={ regularPriceStyle }
			/>
		);
<<<<<<< HEAD
	} else if ( minPrice !== null && maxPrice !== null ) {
		priceComponent = (
			<PriceRange
=======
	}

	if ( minPrice !== null && maxPrice !== null ) {
		return (
			<PriceRange
				className={ wrapperClassName }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				currency={ currency }
				maxPrice={ maxPrice }
				minPrice={ minPrice }
				priceClassName={ priceClassName }
				priceStyle={ priceStyle }
			/>
		);
<<<<<<< HEAD
	} else if ( price !== null ) {
		priceComponent = (
			<FormattedMonetaryAmount
				className={ classNames(
					'wc-block-components-product-price__value',
					priceClassName
				) }
				currency={ currency }
				value={ price }
				style={ priceStyle }
			/>
=======
	}

	if ( price !== null ) {
		return (
			<span className={ wrapperClassName }>
				<FormattedMonetaryAmount
					className={ classNames(
						'wc-block-components-product-price__value',
						priceClassName
					) }
					currency={ currency }
					value={ price }
					style={ priceStyle }
				/>
			</span>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		);
	}

	return (
		<span className={ wrapperClassName }>
<<<<<<< HEAD
			{ createInterpolateElement( format, {
				price: priceComponent,
			} ) }
=======
			<span
				className={ classNames(
					'wc-block-components-product-price__value',
					priceClassName
				) }
			/>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		</span>
	);
};

ProductPrice.propTypes = {
	align: PropTypes.oneOf( [ 'left', 'center', 'right' ] ),
	className: PropTypes.string,
	currency: PropTypes.object,
<<<<<<< HEAD
	format: PropTypes.string,
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	price: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	priceClassName: PropTypes.string,
	priceStyle: PropTypes.object,
	// Range price props
	maxPrice: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	minPrice: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	// On sale price props
	regularPrice: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	regularPriceClassName: PropTypes.string,
	regularPriceStyle: PropTypes.object,
};

export default ProductPrice;
