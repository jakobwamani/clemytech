/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
<<<<<<< HEAD
import { ToolbarGroup } from '@wordpress/components';
=======
import { Toolbar } from '@wordpress/components';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Adds controls to the editor toolbar.
 *
 * @param {Object} props Incoming props for the component.
 * @param {boolean} props.isEditing
 * @param {function(boolean):any} props.setIsEditing
 */
const EditorBlockControls = ( { isEditing, setIsEditing } ) => {
	return (
		<BlockControls>
<<<<<<< HEAD
			<ToolbarGroup
=======
			<Toolbar
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				controls={ [
					{
						icon: 'edit',
						title: __( 'Edit', 'woocommerce' ),
						onClick: () => setIsEditing( ! isEditing ),
						isActive: isEditing,
					},
				] }
			/>
		</BlockControls>
	);
};

export default EditorBlockControls;
