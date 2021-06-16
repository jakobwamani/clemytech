/**
 * External dependencies
 */
import { range } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
<<<<<<< HEAD
import { ToolbarGroup } from '@wordpress/components';
=======
import { Toolbar } from '@wordpress/components';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import HeadingLevelIcon from './heading-level-icon';

/**
 * HeadingToolbar component.
 *
 * Allows the heading level to be chosen for a title block.
 */
class HeadingToolbar extends Component {
	createLevelControl( targetLevel, selectedLevel, onChange ) {
		const isActive = targetLevel === selectedLevel;
		return {
			icon: <HeadingLevelIcon level={ targetLevel } />,
<<<<<<< HEAD
			/* translators: %s: heading level e.g: "2", "3", "4" */
=======
			// translators: %s: heading level e.g: "2", "3", "4"
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			title: sprintf( __( 'Heading %d' ), targetLevel ),
			isActive,
			onClick: () => onChange( targetLevel ),
		};
	}

	render() {
		const {
			isCollapsed = true,
			minLevel,
			maxLevel,
			selectedLevel,
			onChange,
		} = this.props;

		return (
<<<<<<< HEAD
			<ToolbarGroup
=======
			<Toolbar
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				isCollapsed={ isCollapsed }
				icon={ <HeadingLevelIcon level={ selectedLevel } /> }
				controls={ range( minLevel, maxLevel ).map( ( index ) =>
					this.createLevelControl( index, selectedLevel, onChange )
				) }
			/>
		);
	}
}

export default HeadingToolbar;
