/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { RemovableChip } from '@woocommerce/base-components/chip';

const DropdownSelectorSelectedChip = ( { onRemoveItem, option } ) => {
	return (
		<RemovableChip
			className="wc-block-dropdown-selector__selected-chip wc-block-components-dropdown-selector__selected-chip"
			removeOnAnyClick={ true }
			onRemove={ () => {
				onRemoveItem( option.value );
			} }
			ariaLabel={ sprintf(
<<<<<<< HEAD
				/* translators: %s is referring to the filter option being removed. */
=======
				/* Translators: %s is referring to the filter option being removed. */
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				__( 'Remove %s filter', 'woocommerce' ),
				option.name
			) }
			text={ option.label }
			radius="large"
		/>
	);
};

export default DropdownSelectorSelectedChip;
