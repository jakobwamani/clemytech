/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { debounce } from 'lodash';
import { createHigherOrderComponent } from '@wordpress/compose';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { blocksConfig } from '@woocommerce/block-settings';
=======
import { IS_LARGE_CATALOG } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { getProducts } from '@woocommerce/editor-components/utils';

/**
 * Internal dependencies
 */
import { formatError } from '../base/utils/errors.js';

/**
 * A higher order component that enhances the provided component with products
 * from a search query.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withSearchedProducts = createHigherOrderComponent(
	( OriginalComponent ) => {
		/**
		 * A Component wrapping the passed in component.
		 *
		 * @class WrappedComponent
		 * @augments {Component}
		 */
		class WrappedComponent extends Component {
			constructor() {
				super( ...arguments );
				this.state = {
					list: [],
					loading: true,
				};
				this.setError = this.setError.bind( this );
				this.debouncedOnSearch = debounce(
					this.onSearch.bind( this ),
					400
				);
			}

			componentDidMount() {
				const { selected } = this.props;
				getProducts( { selected } )
					.then( ( list ) => {
						this.setState( { list, loading: false } );
					} )
					.catch( this.setError );
			}

			componentWillUnmount() {
				this.debouncedOnSearch.cancel();
			}

			onSearch( search ) {
				const { selected } = this.props;

				getProducts( { selected, search } )
					.then( ( list ) => {
						this.setState( { list, loading: false } );
					} )
					.catch( this.setError );
			}

			async setError( e ) {
				const error = await formatError( e );

				this.setState( { list: [], loading: false, error } );
			}

			render() {
				const { error, list, loading } = this.state;

				return (
					<OriginalComponent
						{ ...this.props }
						error={ error }
						products={ list }
						isLoading={ loading }
						onSearch={
<<<<<<< HEAD
							blocksConfig.productCount > 100
=======
							IS_LARGE_CATALOG
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
								? ( search ) => {
										this.setState( { loading: true } );
										this.debouncedOnSearch( search );
								  }
								: null
						}
					/>
				);
			}
		}
		WrappedComponent.propTypes = {
			selected: PropTypes.array,
		};
		WrappedComponent.defaultProps = {
			selected: [],
		};
		return WrappedComponent;
	},
	'withSearchedProducts'
);

export default withSearchedProducts;
