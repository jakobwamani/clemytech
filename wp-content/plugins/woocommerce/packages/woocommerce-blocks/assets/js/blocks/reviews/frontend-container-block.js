/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';
import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { getSortArgs } from './utils';
import FrontendBlock from './frontend-block';

/**
 * Container of the block rendered in the frontend.
 */
class FrontendContainerBlock extends Component {
	constructor() {
		super( ...arguments );
		const { attributes } = this.props;

		this.state = {
			orderby: attributes.orderby,
			reviewsToDisplay: parseInt( attributes.reviewsOnPageLoad, 10 ),
		};

		this.onAppendReviews = this.onAppendReviews.bind( this );
		this.onChangeOrderby = this.onChangeOrderby.bind( this );
	}

	onAppendReviews() {
		const { attributes } = this.props;
		const { reviewsToDisplay } = this.state;

		this.setState( {
			reviewsToDisplay:
				reviewsToDisplay + parseInt( attributes.reviewsOnLoadMore, 10 ),
		} );
	}

	onChangeOrderby( event ) {
		const { attributes } = this.props;

		this.setState( {
			orderby: event.target.value,
			reviewsToDisplay: parseInt( attributes.reviewsOnPageLoad, 10 ),
		} );
	}

	onReviewsAppended( { newReviews } ) {
		speak(
			sprintf(
<<<<<<< HEAD
				/* translators: %d is the count of reviews loaded. */
=======
				// Translators: %d is the count of reviews loaded.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				_n(
					'%d review loaded.',
					'%d reviews loaded.',
					newReviews.length,
					'woocommerce'
				),
				newReviews.length
			)
		);
	}

	onReviewsReplaced() {
		speak( __( 'Reviews list updated.', 'woocommerce' ) );
	}

	onReviewsLoadError() {
		speak(
			__(
				'There was an error loading the reviews.',
				'woocommerce'
			)
		);
	}

	render() {
		const { attributes } = this.props;
		const { categoryIds, productId } = attributes;
		const { reviewsToDisplay } = this.state;
		const { order, orderby } = getSortArgs( this.state.orderby );

		return (
			<FrontendBlock
				attributes={ attributes }
				categoryIds={ categoryIds }
				onAppendReviews={ this.onAppendReviews }
				onChangeOrderby={ this.onChangeOrderby }
				onReviewsAppended={ this.onReviewsAppended }
				onReviewsLoadError={ this.onReviewsLoadError }
				onReviewsReplaced={ this.onReviewsReplaced }
				order={ order }
				orderby={ orderby }
				productId={ productId }
				reviewsToDisplay={ reviewsToDisplay }
			/>
		);
	}
}

FrontendContainerBlock.propTypes = {
	/**
	 * The attributes for this block.
	 */
	attributes: PropTypes.object.isRequired,
};

export default FrontendContainerBlock;
