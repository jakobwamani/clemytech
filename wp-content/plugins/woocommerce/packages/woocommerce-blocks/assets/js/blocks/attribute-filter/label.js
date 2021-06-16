/**
 * External dependencies
 */
import { _n, sprintf } from '@wordpress/i18n';
<<<<<<< HEAD
=======
import { Fragment } from '@wordpress/element';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import Label from '@woocommerce/base-components/label';

/**
 * The label for an attribute term filter.
 *
 * @param {Object} props Incoming props for the component.
 * @param {string} props.name The name for the label.
 * @param {number} props.count The count of products this attribute is attached to.
 */
const AttributeFilterLabel = ( { name, count } ) => {
	return (
<<<<<<< HEAD
		<>
=======
		<Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			{ name }
			{ Number.isFinite( count ) && (
				<Label
					label={ count }
					screenReaderLabel={ sprintf(
<<<<<<< HEAD
						/* translators: %s number of products. */
=======
						// translators: %s number of products.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						_n(
							'%s product',
							'%s products',
							count,
							'woocommerce'
						),
						count
					) }
					wrapperElement="span"
					wrapperProps={ {
						className: 'wc-block-attribute-filter-list-count',
					} }
				/>
			) }
<<<<<<< HEAD
		</>
=======
		</Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	);
};

export default AttributeFilterLabel;
