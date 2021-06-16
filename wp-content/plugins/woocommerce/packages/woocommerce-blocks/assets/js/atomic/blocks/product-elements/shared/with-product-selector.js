/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import ProductControl from '@woocommerce/editor-components/product-control';
<<<<<<< HEAD
import { Placeholder, Button, ToolbarGroup } from '@wordpress/components';
=======
import { Placeholder, Button, Toolbar } from '@wordpress/components';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { BlockControls } from '@wordpress/block-editor';
import TextToolbarButton from '@woocommerce/editor-components/text-toolbar-button';
import { useProductDataContext } from '@woocommerce/shared-context';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * This HOC shows a product selection interface if context is not present in the editor.
 *
 * @param {Object} selectorArgs Options for the selector.
 *
 */
const withProductSelector = ( selectorArgs ) => ( OriginalComponent ) => {
	return ( props ) => {
		const productDataContext = useProductDataContext();
		const { attributes, setAttributes } = props;
		const { productId } = attributes;
		const [ isEditing, setIsEditing ] = useState( ! productId );

		if ( productDataContext.hasContext ) {
			return <OriginalComponent { ...props } />;
		}

		return (
			<>
				{ isEditing ? (
					<Placeholder
						icon={ selectorArgs.icon || '' }
						label={ selectorArgs.label || '' }
						className="wc-atomic-blocks-product"
					>
						{ !! selectorArgs.description && (
							<div>{ selectorArgs.description }</div>
						) }
						<div className="wc-atomic-blocks-product__selection">
							<ProductControl
								selected={ productId || 0 }
								showVariations
								onChange={ ( value = [] ) => {
									setAttributes( {
										productId: value[ 0 ]
											? value[ 0 ].id
											: 0,
									} );
								} }
							/>
							<Button
<<<<<<< HEAD
								isSecondary
=======
								isDefault
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
								disabled={ ! productId }
								onClick={ () => {
									setIsEditing( false );
								} }
							>
								{ __( 'Done', 'woocommerce' ) }
							</Button>
						</div>
					</Placeholder>
				) : (
					<>
						<BlockControls>
<<<<<<< HEAD
							<ToolbarGroup>
=======
							<Toolbar>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
								<TextToolbarButton
									onClick={ () => setIsEditing( true ) }
								>
									{ __(
										'Switch product…',
										'woocommerce'
									) }
								</TextToolbarButton>
<<<<<<< HEAD
							</ToolbarGroup>
=======
							</Toolbar>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						</BlockControls>
						<OriginalComponent { ...props } />
					</>
				) }
			</>
		);
	};
};

export default withProductSelector;
