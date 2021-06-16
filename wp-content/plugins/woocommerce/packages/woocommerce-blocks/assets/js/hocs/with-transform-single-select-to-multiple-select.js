/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import { isNil } from 'lodash';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * HOC that transforms a single select to a multiple select.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withTransformSingleSelectToMultipleSelect = createHigherOrderComponent(
	( OriginalComponent ) => {
		class WrappedComponent extends Component {
			render() {
				const { selected } = this.props;
<<<<<<< HEAD
				const isNil = selected === null || selected === undefined;
				return (
					<OriginalComponent
						{ ...this.props }
						selected={ isNil ? [] : [ selected ] }
=======

				return (
					<OriginalComponent
						{ ...this.props }
						selected={ isNil( selected ) ? [] : [ selected ] }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					/>
				);
			}
		}
		WrappedComponent.propTypes = {
			selected: PropTypes.oneOfType( [
				PropTypes.number,
				PropTypes.string,
			] ),
		};
		WrappedComponent.defaultProps = {
			selected: null,
		};
		return WrappedComponent;
	},
	'withTransformSingleSelectToMultipleSelect'
);

export default withTransformSingleSelectToMultipleSelect;
