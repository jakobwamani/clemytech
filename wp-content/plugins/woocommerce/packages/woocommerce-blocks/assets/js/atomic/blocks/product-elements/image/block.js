/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useState, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';
import { PLACEHOLDER_IMG_SRC } from '@woocommerce/settings';
=======
import { useState } from '@wordpress/element';
import classnames from 'classnames';
import { PLACEHOLDER_IMG_SRC } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { withProductDataContext } from '@woocommerce/shared-hocs';
<<<<<<< HEAD
import { useStoreEvents } from '@woocommerce/base-context/hooks';
=======
import { isEmpty } from 'lodash';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import ProductSaleBadge from './../sale-badge/block';
import './style.scss';

/**
 * Product Image Block Component.
 *
 * @param {Object} props                  Incoming props.
 * @param {string} [props.className]      CSS Class name for the component.
 * @param {string} [props.imageSizing]    Size of image to use.
 * @param {boolean} [props.productLink]   Whether or not to display a link to the product page.
 * @param {boolean} [props.showSaleBadge] Whether or not to display the on sale badge.
 * @param {string} [props.saleBadgeAlign] How should the sale badge be aligned if displayed.
 * @return {*} The component.
 */
<<<<<<< HEAD
export const Block = ( {
	className,
	imageSizing = 'full-size',
	productLink: showProductLink = true,
=======
const Block = ( {
	className,
	imageSizing = 'full-size',
	productLink = true,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	showSaleBadge,
	saleBadgeAlign = 'right',
} ) => {
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();
	const [ imageLoaded, setImageLoaded ] = useState( false );
<<<<<<< HEAD
	const { dispatchStoreEvent } = useStoreEvents();
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

	if ( ! product.id ) {
		return (
			<div
				className={ classnames(
					className,
					'wc-block-components-product-image',
					'wc-block-components-product-image--placeholder',
					{
						[ `${ parentClassName }__product-image` ]: parentClassName,
					}
				) }
			>
				<ImagePlaceholder />
			</div>
		);
	}
<<<<<<< HEAD
	const hasProductImages = !! product.images.length;
	const image = hasProductImages ? product.images[ 0 ] : null;
	const ParentComponent = showProductLink ? 'a' : Fragment;
	const anchorLabel = sprintf(
		/* translators: %s is referring to the product name */
		__( 'Link to %s', 'woocommerce' ),
		product.name
	);
	const anchorProps = {
		href: product.permalink,
		rel: 'nofollow',
		...( ! hasProductImages && { 'aria-label': anchorLabel } ),
		onClick: () => {
			dispatchStoreEvent( 'product-view-link', {
				product,
			} );
		},
	};
=======

	const image = ! isEmpty( product.images ) ? product.images[ 0 ] : null;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

	return (
		<div
			className={ classnames(
				className,
				'wc-block-components-product-image',
				{
					[ `${ parentClassName }__product-image` ]: parentClassName,
				}
			) }
		>
<<<<<<< HEAD
			<ParentComponent { ...( showProductLink && anchorProps ) }>
				{ !! showSaleBadge && (
					<ProductSaleBadge
						align={ saleBadgeAlign }
						product={ product }
					/>
				) }
				<Image
					fallbackAlt={ product.name }
					image={ image }
					onLoad={ () => setImageLoaded( true ) }
					loaded={ imageLoaded }
					showFullSize={ imageSizing !== 'cropped' }
				/>
			</ParentComponent>
=======
			{ productLink ? (
				<a href={ product.permalink } rel="nofollow">
					{ !! showSaleBadge && (
						<ProductSaleBadge
							align={ saleBadgeAlign }
							product={ product }
						/>
					) }
					<Image
						image={ image }
						onLoad={ () => setImageLoaded( true ) }
						loaded={ imageLoaded }
						showFullSize={ imageSizing !== 'cropped' }
					/>
				</a>
			) : (
				<>
					{ !! showSaleBadge && (
						<ProductSaleBadge
							align={ saleBadgeAlign }
							product={ product }
						/>
					) }
					<Image
						image={ image }
						onLoad={ () => setImageLoaded( true ) }
						loaded={ imageLoaded }
						showFullSize={ imageSizing !== 'cropped' }
					/>
				</>
			) }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		</div>
	);
};

const ImagePlaceholder = () => {
	return (
		<img src={ PLACEHOLDER_IMG_SRC } alt="" width={ 500 } height={ 500 } />
	);
};

<<<<<<< HEAD
const Image = ( { image, onLoad, loaded, showFullSize, fallbackAlt } ) => {
	const { thumbnail, src, srcset, sizes, alt } = image || {};
	const imageProps = {
		alt: alt || fallbackAlt,
		onLoad,
		hidden: ! loaded,
		src: thumbnail,
		...( showFullSize && { src, srcSet: srcset, sizes } ),
	};

	return (
		<>
			{ imageProps.src && (
				/* eslint-disable-next-line jsx-a11y/alt-text */
				<img data-testid="product-image" { ...imageProps } />
			) }
=======
const Image = ( { image, onLoad, loaded, showFullSize } ) => {
	const { thumbnail, src, srcset, sizes, alt } = image || {};

	let imageProps = {
		alt,
		onLoad,
		hidden: ! loaded,
		src: thumbnail,
	};
	if ( showFullSize ) {
		imageProps = {
			...imageProps,
			src,
			srcSet: srcset,
			sizes,
		};
	}

	return (
		<>
			{ /* eslint-disable-next-line jsx-a11y/alt-text */ }
			<img { ...imageProps } />
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			{ ! loaded && <ImagePlaceholder /> }
		</>
	);
};

Block.propTypes = {
	className: PropTypes.string,
<<<<<<< HEAD
	fallbackAlt: PropTypes.string,
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	productLink: PropTypes.bool,
	showSaleBadge: PropTypes.bool,
	saleBadgeAlign: PropTypes.string,
};

export default withProductDataContext( Block );
