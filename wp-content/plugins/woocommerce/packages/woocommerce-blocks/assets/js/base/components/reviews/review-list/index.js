/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import {
	REVIEW_RATINGS_ENABLED,
	SHOW_AVATARS,
} from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import ReviewListItem from '../review-list-item';
import './style.scss';

const ReviewList = ( { attributes, reviews } ) => {
<<<<<<< HEAD
	const showAvatars = getSetting( 'showAvatars', true );
	const reviewRatingsEnabled = getSetting( 'reviewRatingsEnabled', true );
	const showReviewImage =
		( showAvatars || attributes.imageType === 'product' ) &&
		attributes.showReviewImage;
	const showReviewRating =
		reviewRatingsEnabled && attributes.showReviewRating;
=======
	const showReviewImage =
		( SHOW_AVATARS || attributes.imageType === 'product' ) &&
		attributes.showReviewImage;
	const showReviewRating =
		REVIEW_RATINGS_ENABLED && attributes.showReviewRating;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	const attrs = {
		...attributes,
		showReviewImage,
		showReviewRating,
	};

	return (
		<ul className="wc-block-review-list wc-block-components-review-list">
			{ reviews.length === 0 ? (
				<ReviewListItem attributes={ attrs } />
			) : (
				reviews.map( ( review, i ) => (
					<ReviewListItem
						key={ review.id || i }
						attributes={ attrs }
						review={ review }
					/>
				) )
			) }
		</ul>
	);
};

ReviewList.propTypes = {
	attributes: PropTypes.object.isRequired,
	reviews: PropTypes.array.isRequired,
};

export default ReviewList;
