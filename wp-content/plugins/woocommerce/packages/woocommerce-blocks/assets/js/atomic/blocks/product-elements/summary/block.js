/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Summary from '@woocommerce/base-components/summary';
<<<<<<< HEAD
import { blocksConfig } from '@woocommerce/block-settings';
=======
import { getSetting } from '@woocommerce/settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { withProductDataContext } from '@woocommerce/shared-hocs';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Product Summary Block Component.
 *
 * @param {Object} props             Incoming props.
 * @param {string} [props.className] CSS Class name for the component.
 * @return {*} The component.
 */
const Block = ( { className } ) => {
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();

	if ( ! product ) {
		return (
			<div
				className={ classnames(
					className,
					`wc-block-components-product-summary`,
					{
						[ `${ parentClassName }__product-summary` ]: parentClassName,
					}
				) }
			/>
		);
	}

	const source = product.short_description
		? product.short_description
		: product.description;

	if ( ! source ) {
		return null;
	}

<<<<<<< HEAD
=======
	const countType = getSetting( 'wordCountType', 'words' );

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	return (
		<Summary
			className={ classnames(
				className,
				`wc-block-components-product-summary`,
				{
					[ `${ parentClassName }__product-summary` ]: parentClassName,
				}
			) }
			source={ source }
			maxLength={ 150 }
<<<<<<< HEAD
			countType={ blocksConfig.wordCountType || 'words' }
=======
			countType={ countType }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		/>
	);
};

Block.propTypes = {
	className: PropTypes.string,
};

export default withProductDataContext( Block );
