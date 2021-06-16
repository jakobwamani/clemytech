/**
 * External dependencies
 */
<<<<<<< HEAD
import { Component, createRef } from 'react';
=======
import { Component, createRef, Fragment } from 'react';
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * HOC that provides a function to scroll to the top of the component.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withScrollToTop = ( OriginalComponent ) => {
	class WrappedComponent extends Component {
		constructor() {
			super();

			this.scrollPointRef = createRef();
		}

		scrollToTopIfNeeded = () => {
			const scrollPointRefYPosition = this.scrollPointRef.current.getBoundingClientRect()
				.bottom;
			const isScrollPointRefVisible =
				scrollPointRefYPosition >= 0 &&
				scrollPointRefYPosition <= window.innerHeight;
			if ( ! isScrollPointRefVisible ) {
				this.scrollPointRef.current.scrollIntoView();
			}
		};

		moveFocusToTop = ( focusableSelector ) => {
			const focusableElements = this.scrollPointRef.current.parentElement.querySelectorAll(
				focusableSelector
			);
			if ( focusableElements.length ) {
				focusableElements[ 0 ].focus();
			}
		};

		scrollToTop = ( args ) => {
			if ( ! window || ! Number.isFinite( window.innerHeight ) ) {
				return;
			}

			this.scrollToTopIfNeeded();
			if ( args && args.focusableSelector ) {
				this.moveFocusToTop( args.focusableSelector );
			}
		};

		render() {
			return (
<<<<<<< HEAD
				<>
=======
				<Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
					<div
						className="with-scroll-to-top__scroll-point"
						ref={ this.scrollPointRef }
						aria-hidden
					/>
					<OriginalComponent
						{ ...this.props }
						scrollToTop={ this.scrollToTop }
					/>
<<<<<<< HEAD
				</>
=======
				</Fragment>
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			);
		}
	}

	WrappedComponent.displayName = 'withScrollToTop';

	return WrappedComponent;
};

export default withScrollToTop;
