/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classNames from 'classnames';

const DropdownSelectorMenu = ( {
	checked,
	getItemProps,
	getMenuProps,
	highlightedIndex,
	options,
} ) => {
	return (
		<ul
			{ ...getMenuProps( {
				className:
					'wc-block-dropdown-selector__list wc-block-components-dropdown-selector__list',
			} ) }
		>
			{ options.map( ( option, index ) => {
				const selected = checked.includes( option.value );
				return (
					// eslint-disable-next-line react/jsx-key
					<li
						{ ...getItemProps( {
							key: option.value,
							className: classNames(
								'wc-block-dropdown-selector__list-item',
								'wc-block-components-dropdown-selector__list-item',
								{
									'is-selected': selected,
									'is-highlighted':
										highlightedIndex === index,
								}
							),
							index,
							item: option.value,
							'aria-label': selected
								? sprintf(
<<<<<<< HEAD
										/* translators: %s is referring to the filter option being removed. */
=======
										/* Translators: %s is referring to the filter option being removed. */
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
										__(
											'Remove %s filter',
											'woocommerce'
										),
										option.name
								  )
								: null,
						} ) }
					>
						{ option.label }
					</li>
				);
			} ) }
		</ul>
	);
};

export default DropdownSelectorMenu;
