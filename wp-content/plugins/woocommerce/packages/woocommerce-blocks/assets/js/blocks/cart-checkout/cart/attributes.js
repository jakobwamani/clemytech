/**
 * External dependencies
 */
<<<<<<< HEAD
import { getSetting } from '@woocommerce/settings';
=======
import {
	IS_SHIPPING_CALCULATOR_ENABLED,
	HAS_DARK_EDITOR_STYLE_SUPPORT,
} from '@woocommerce/block-settings';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

const blockAttributes = {
	isPreview: {
		type: 'boolean',
		default: false,
		save: false,
	},
	isShippingCalculatorEnabled: {
		type: 'boolean',
<<<<<<< HEAD
		default: getSetting( 'isShippingCalculatorEnabled', true ),
=======
		default: IS_SHIPPING_CALCULATOR_ENABLED,
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	},
	checkoutPageId: {
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
