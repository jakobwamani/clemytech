/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
<<<<<<< HEAD
import ServerSideRender from '@wordpress/server-side-render';
=======
import { ServerSideRender } from '@wordpress/editor';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import {
	Button,
	Disabled,
	PanelBody,
	Placeholder,
<<<<<<< HEAD
	ToolbarGroup,
	withSpokenMessages,
} from '@wordpress/components';
import { Component } from '@wordpress/element';
=======
	Toolbar,
	withSpokenMessages,
} from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { Icon, tags } from '@woocommerce/icons';
import PropTypes from 'prop-types';
import GridContentControl from '@woocommerce/editor-components/grid-content-control';
import GridLayoutControl from '@woocommerce/editor-components/grid-layout-control';
import ProductAttributeTermControl from '@woocommerce/editor-components/product-attribute-term-control';
import ProductOrderbyControl from '@woocommerce/editor-components/product-orderby-control';
import { gridBlockPreview } from '@woocommerce/resource-previews';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Component to handle edit mode of "Products by Attribute".
 */
class ProductsByAttributeBlock extends Component {
	getInspectorControls() {
		const { setAttributes } = this.props;
		const {
			attributes,
			attrOperator,
			columns,
			contentVisibility,
			orderby,
			rows,
			alignButtons,
		} = this.props.attributes;

		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Layout', 'woocommerce' ) }
					initialOpen
				>
					<GridLayoutControl
						columns={ columns }
						rows={ rows }
						alignButtons={ alignButtons }
						setAttributes={ setAttributes }
<<<<<<< HEAD
						minColumns={ getSetting( 'min_columns', 1 ) }
						maxColumns={ getSetting( 'max_columns', 6 ) }
						minRows={ getSetting( 'min_rows', 1 ) }
						maxRows={ getSetting( 'max_rows', 6 ) }
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Content', 'woocommerce' ) }
					initialOpen
				>
					<GridContentControl
						settings={ contentVisibility }
						onChange={ ( value ) =>
							setAttributes( { contentVisibility: value } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __(
						'Filter by Product Attribute',
						'woocommerce'
					) }
					initialOpen={ false }
				>
					<ProductAttributeTermControl
						selected={ attributes }
						onChange={ ( value = [] ) => {
							/* eslint-disable camelcase */
							const result = value.map(
								( { id, attr_slug } ) => ( {
									id,
									attr_slug,
								} )
							);
							/* eslint-enable camelcase */
							setAttributes( { attributes: result } );
						} }
						operator={ attrOperator }
						onOperatorChange={ ( value = 'any' ) =>
							setAttributes( { attrOperator: value } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Order By', 'woocommerce' ) }
					initialOpen={ false }
				>
					<ProductOrderbyControl
						setAttributes={ setAttributes }
						value={ orderby }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}

	renderEditMode() {
		const { debouncedSpeak, setAttributes } = this.props;
		const blockAttributes = this.props.attributes;
		const onDone = () => {
			setAttributes( { editMode: false } );
			debouncedSpeak(
				__(
					'Showing Products by Attribute block preview.',
					'woocommerce'
				)
			);
		};

		return (
			<Placeholder
				icon={ <Icon srcElement={ tags } /> }
				label={ __(
					'Products by Attribute',
					'woocommerce'
				) }
				className="wc-block-products-grid wc-block-products-by-attribute"
			>
				{ __(
					'Display a grid of products from your selected attributes.',
					'woocommerce'
				) }
				<div className="wc-block-products-by-attribute__selection">
					<ProductAttributeTermControl
						selected={ blockAttributes.attributes }
						onChange={ ( value = [] ) => {
							/* eslint-disable camelcase */
							const result = value.map(
								( { id, attr_slug } ) => ( {
									id,
									attr_slug,
								} )
							);
							/* eslint-enable camelcase */
							setAttributes( { attributes: result } );
						} }
						operator={ blockAttributes.attrOperator }
						onOperatorChange={ ( value = 'any' ) =>
							setAttributes( { attrOperator: value } )
						}
					/>
					<Button isPrimary onClick={ onDone }>
						{ __( 'Done', 'woocommerce' ) }
					</Button>
				</div>
			</Placeholder>
		);
	}

	render() {
		const { attributes, name, setAttributes } = this.props;
		const { editMode } = attributes;

		if ( attributes.isPreview ) {
			return gridBlockPreview;
		}

		return (
<<<<<<< HEAD
			<>
				<BlockControls>
					<ToolbarGroup
=======
			<Fragment>
				<BlockControls>
					<Toolbar
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						controls={ [
							{
								icon: 'edit',
								title: __( 'Edit' ),
								onClick: () =>
									setAttributes( { editMode: ! editMode } ),
								isActive: editMode,
							},
						] }
					/>
				</BlockControls>
				{ this.getInspectorControls() }
				{ editMode ? (
					this.renderEditMode()
				) : (
					<Disabled>
						<ServerSideRender
							block={ name }
							attributes={ attributes }
						/>
					</Disabled>
				) }
<<<<<<< HEAD
			</>
=======
			</Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		);
	}
}

ProductsByAttributeBlock.propTypes = {
	/**
	 * The attributes for this block
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * The register block name.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes
	 */
	setAttributes: PropTypes.func.isRequired,
	// from withSpokenMessages
	debouncedSpeak: PropTypes.func.isRequired,
};

export default withSpokenMessages( ProductsByAttributeBlock );
