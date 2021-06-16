/**
 * Internal dependencies
 */
import { assertConfigHasProperties, assertValidElement } from './assertions';
<<<<<<< HEAD
import { canMakePaymentWithFeaturesCheck } from './payment-method-config-helper';
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

export default class ExpressPaymentMethodConfig {
	constructor( config ) {
		// validate config
		ExpressPaymentMethodConfig.assertValidConfig( config );
		this.name = config.name;
		this.content = config.content;
		this.edit = config.edit;
<<<<<<< HEAD
		this.paymentMethodId = config.paymentMethodId || this.name;
		this.supports = {
			features: config?.supports?.features || [ 'products' ],
		};
		this.canMakePayment = canMakePaymentWithFeaturesCheck(
			config.canMakePayment,
			this.supports.features
		);
=======
		this.canMakePayment = config.canMakePayment;
		this.paymentMethodId = config.paymentMethodId || this.name;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}

	static assertValidConfig = ( config ) => {
		assertConfigHasProperties( config, [ 'name', 'content', 'edit' ] );
		if ( typeof config.name !== 'string' ) {
			throw new TypeError(
				'The name property for the express payment method must be a string'
			);
		}
		if (
			typeof config.paymentMethodId !== 'string' &&
			typeof config.paymentMethodId !== 'undefined'
		) {
			throw new Error(
				'The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).'
			);
		}
<<<<<<< HEAD
		if (
			typeof config.supports?.features !== 'undefined' &&
			! Array.isArray( config.supports?.features )
		) {
			throw new Error(
				'The features property for the payment method must be an array or undefined.'
			);
		}
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		assertValidElement( config.content, 'content' );
		assertValidElement( config.edit, 'edit' );
		if ( typeof config.canMakePayment !== 'function' ) {
			throw new TypeError(
				'The canMakePayment property for the express payment method must be a function.'
			);
		}
	};
}
