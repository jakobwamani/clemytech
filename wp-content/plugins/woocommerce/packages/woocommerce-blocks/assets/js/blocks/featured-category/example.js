/**
 * External dependencies
 */
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { DEFAULT_HEIGHT } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
import { previewCategories } from '@woocommerce/resource-previews';

export const example = {
	attributes: {
		contentAlign: 'center',
		dimRatio: 50,
		editMode: false,
<<<<<<< HEAD
		height: getSetting( 'default_height', 500 ),
=======
		height: DEFAULT_HEIGHT,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		mediaSrc: '',
		showDesc: true,
		categoryId: 'preview',
		previewCategory: previewCategories[ 0 ],
	},
};
