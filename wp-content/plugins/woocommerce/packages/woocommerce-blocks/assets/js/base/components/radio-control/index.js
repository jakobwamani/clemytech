/**
 * External dependencies
 */
import classnames from 'classnames';
import { withInstanceId } from '@woocommerce/base-hocs/with-instance-id';

/**
 * Internal dependencies
 */
import RadioControlOption from './option';
import './style.scss';

const RadioControl = ( {
	className,
	instanceId,
	id,
	selected,
	onChange,
	options = [],
} ) => {
	const radioControlId = id || instanceId;

	return (
		options.length && (
			<div
				className={ classnames(
					'wc-block-components-radio-control',
					className
				) }
			>
				{ options.map( ( option ) => (
					<RadioControlOption
<<<<<<< HEAD
						key={ `${ radioControlId }-${ option.value }` }
=======
						key={ option.value }
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
						name={ `radio-control-${ radioControlId }` }
						checked={ option.value === selected }
						option={ option }
						onChange={ ( value ) => {
							onChange( value );
							if ( typeof option.onChange === 'function' ) {
								option.onChange( value );
							}
						} }
					/>
				) ) }
			</div>
		)
	);
};

export default withInstanceId( RadioControl );
export { RadioControlOption };
export { default as RadioControlOptionLayout } from './option-layout';
