/**
 * External dependencies
 */
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import { HAS_DARK_EDITOR_STYLE_SUPPORT } from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

const blockAttributes = {
	isPreview: {
		type: 'boolean',
		default: false,
		save: false,
	},
	showCompanyField: {
		type: 'boolean',
		default: false,
	},
	requireCompanyField: {
		type: 'boolean',
		default: false,
	},
	allowCreateAccount: {
		type: 'boolean',
		default: false,
	},
	showApartmentField: {
		type: 'boolean',
		default: true,
	},
	showPhoneField: {
		type: 'boolean',
		default: true,
	},
	requirePhoneField: {
		type: 'boolean',
		default: false,
	},
	showOrderNotes: {
		type: 'boolean',
		default: true,
	},
	showPolicyLinks: {
		type: 'boolean',
		default: true,
	},
	showReturnToCart: {
		type: 'boolean',
		default: true,
	},
	cartPageId: {
		type: 'number',
		default: 0,
	},
	hasDarkControls: {
		type: 'boolean',
<<<<<<< HEAD
		default: getSetting( 'hasDarkEditorStyleSupport', false ),
=======
		default: HAS_DARK_EDITOR_STYLE_SUPPORT,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	},
};

export default blockAttributes;
