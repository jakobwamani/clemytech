/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { createInterpolateElement } from 'wordpress-element';
import {
	Notice,
	ToggleControl,
<<<<<<< HEAD
	ToolbarGroup,
=======
	Toolbar,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
<<<<<<< HEAD
import { getAdminLink, getSetting } from '@woocommerce/settings';
=======
import { getAdminLink } from '@woocommerce/settings';
import {
	REVIEW_RATINGS_ENABLED,
	SHOW_AVATARS,
} from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import ToggleButtonControl from '@woocommerce/editor-components/toggle-button-control';

export const getBlockControls = ( editMode, setAttributes ) => (
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
					onClick: () => setAttributes( { editMode: ! editMode } ),
					isActive: editMode,
				},
			] }
		/>
	</BlockControls>
);

export const getSharedReviewContentControls = ( attributes, setAttributes ) => {
<<<<<<< HEAD
	const showAvatars = getSetting( 'showAvatars', true );
	const reviewRatingsEnabled = getSetting( 'reviewRatingsEnabled', true );
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	return (
		<>
			<ToggleControl
				label={ __( 'Product rating', 'woocommerce' ) }
				checked={ attributes.showReviewRating }
				onChange={ () =>
					setAttributes( {
						showReviewRating: ! attributes.showReviewRating,
					} )
				}
			/>
<<<<<<< HEAD
			{ attributes.showReviewRating && ! reviewRatingsEnabled && (
=======
			{ attributes.showReviewRating && ! REVIEW_RATINGS_ENABLED && (
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
				<Notice
					className="wc-block-base-control-notice"
					isDismissible={ false }
				>
					{ createInterpolateElement(
						__(
							'Product rating is disabled in your <a>store settings</a>.',
							'woocommerce'
						),
						{
							a: (
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								<a
									href={ getAdminLink(
										'admin.php?page=wc-settings&tab=products'
									) }
									target="_blank"
									rel="noopener noreferrer"
								/>
							),
						}
					) }
				</Notice>
			) }
			<ToggleControl
				label={ __( 'Reviewer name', 'woocommerce' ) }
				checked={ attributes.showReviewerName }
				onChange={ () =>
					setAttributes( {
						showReviewerName: ! attributes.showReviewerName,
					} )
				}
			/>
			<ToggleControl
				label={ __( 'Image', 'woocommerce' ) }
				checked={ attributes.showReviewImage }
				onChange={ () =>
					setAttributes( {
						showReviewImage: ! attributes.showReviewImage,
					} )
				}
			/>
			<ToggleControl
				label={ __( 'Review date', 'woocommerce' ) }
				checked={ attributes.showReviewDate }
				onChange={ () =>
					setAttributes( {
						showReviewDate: ! attributes.showReviewDate,
					} )
				}
			/>
			<ToggleControl
				label={ __( 'Review content', 'woocommerce' ) }
				checked={ attributes.showReviewContent }
				onChange={ () =>
					setAttributes( {
						showReviewContent: ! attributes.showReviewContent,
					} )
				}
			/>
			{ attributes.showReviewImage && (
				<>
					<ToggleButtonControl
						label={ __(
							'Review image',
							'woocommerce'
						) }
						value={ attributes.imageType }
						options={ [
							{
								label: __(
									'Reviewer photo',
									'woocommerce'
								),
								value: 'reviewer',
							},
							{
								label: __(
									'Product',
									'woocommerce'
								),
								value: 'product',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( { imageType: value } )
						}
					/>
<<<<<<< HEAD
					{ attributes.imageType === 'reviewer' && ! showAvatars && (
=======
					{ attributes.imageType === 'reviewer' && ! SHOW_AVATARS && (
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						<Notice
							className="wc-block-base-control-notice"
							isDismissible={ false }
						>
							{ createInterpolateElement(
								__(
									'Reviewer photo is disabled in your <a>site settings</a>.',
									'woocommerce'
								),
								{
									a: (
										// eslint-disable-next-line jsx-a11y/anchor-has-content
										<a
											href={ getAdminLink(
												'options-discussion.php'
											) }
											target="_blank"
											rel="noopener noreferrer"
										/>
									),
								}
							) }
						</Notice>
					) }
				</>
			) }
		</>
	);
};

export const getSharedReviewListControls = ( attributes, setAttributes ) => {
	const minPerPage = 1;
	const maxPerPage = 20;

	return (
		<>
			<ToggleControl
				label={ __( 'Order by', 'woocommerce' ) }
				checked={ attributes.showOrderby }
				onChange={ () =>
					setAttributes( { showOrderby: ! attributes.showOrderby } )
				}
			/>
			<SelectControl
				label={ __(
					'Order Product Reviews by',
					'woocommerce'
				) }
				value={ attributes.orderby }
				options={ [
					{ label: 'Most recent', value: 'most-recent' },
					{ label: 'Highest Rating', value: 'highest-rating' },
					{ label: 'Lowest Rating', value: 'lowest-rating' },
				] }
				onChange={ ( orderby ) => setAttributes( { orderby } ) }
			/>
			<RangeControl
				label={ __(
					'Starting Number of Reviews',
					'woocommerce'
				) }
				value={ attributes.reviewsOnPageLoad }
				onChange={ ( reviewsOnPageLoad ) =>
					setAttributes( { reviewsOnPageLoad } )
				}
				max={ maxPerPage }
				min={ minPerPage }
			/>
			<ToggleControl
				label={ __( 'Load more', 'woocommerce' ) }
				checked={ attributes.showLoadMore }
				onChange={ () =>
					setAttributes( { showLoadMore: ! attributes.showLoadMore } )
				}
			/>
			{ attributes.showLoadMore && (
				<RangeControl
					label={ __(
						'Load More Reviews',
						'woocommerce'
					) }
					value={ attributes.reviewsOnLoadMore }
					onChange={ ( reviewsOnLoadMore ) =>
						setAttributes( { reviewsOnLoadMore } )
					}
					max={ maxPerPage }
					min={ minPerPage }
				/>
			) }
		</>
	);
};