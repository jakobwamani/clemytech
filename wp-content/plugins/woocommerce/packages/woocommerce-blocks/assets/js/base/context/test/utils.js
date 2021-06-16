/**
 * Internal dependencies
 */
import { assertValidContextValue } from '../utils';

describe( 'assertValidContextValue', () => {
	const contextName = 'testContext';
	const validationMap = {
		cheeseburger: {
			required: false,
			type: 'string',
		},
		amountKetchup: {
			required: true,
			type: 'number',
		},
	};
	it.each`
<<<<<<< HEAD
		testValue
		${ {} }
		${ 10 }
		${ { amountKetchup: '10' } }
	`(
		'The value of $testValue is expected to trigger an Error',
		( { testValue } ) => {
=======
		testValue                                         | expectedMessage     | expectError
		${ {} }                                           | ${ 'expected' }     | ${ true }
		${ 10 }                                           | ${ 'expected' }     | ${ true }
		${ { amountKetchup: 20 } }                        | ${ 'not expected' } | ${ false }
		${ { amountKetchup: '10' } }                      | ${ 'expected' }     | ${ true }
		${ { cheeseburger: 'fries', amountKetchup: 20 } } | ${ 'not expected' } | ${ false }
	`(
		'The value of $testValue is $expectedMessage to trigger an Error',
		( { testValue, expectError } ) => {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			const invokeTest = () => {
				assertValidContextValue(
					contextName,
					validationMap,
					testValue
				);
			};
<<<<<<< HEAD
			expect( invokeTest ).toThrow();
		}
	);
	it.each`
		testValue
		${ { amountKetchup: 20 } }
		${ { cheeseburger: 'fries', amountKetchup: 20 } }
	`(
		'The value of $testValue is not expected to trigger an Error',
		( { testValue } ) => {
			const invokeTest = () => {
				assertValidContextValue(
					contextName,
					validationMap,
					testValue
				);
			};
			expect( invokeTest ).not.toThrow();
=======
			if ( expectError ) {
				expect( invokeTest ).toThrow();
			} else {
				expect( invokeTest ).not.toThrow();
			}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		}
	);
} );
