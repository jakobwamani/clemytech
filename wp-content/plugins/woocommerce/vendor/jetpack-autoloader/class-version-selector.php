<?php
/**
 * This file was automatically generated by automattic/jetpack-autoloader.
 *
 * @package automattic/jetpack-autoloader
 */

<<<<<<< HEAD
namespace Automattic\Jetpack\Autoloader\jp9320e9b596172c2a07ab2358ea2a8e89;
=======
namespace Automattic\Jetpack\Autoloader\jp1c37d41437aca3a88a6b698473c4d5c4;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

 // phpcs:ignore

/**
 * Used to select package versions.
 */
class Version_Selector {

	/**
	 * Checks whether the selected package version should be updated. Composer development
	 * package versions ('9999999-dev' or versions that start with 'dev-') are favored
	 * when the JETPACK_AUTOLOAD_DEV constant is set to true.
	 *
	 * @param String $selected_version The currently selected package version.
	 * @param String $compare_version The package version that is being evaluated to
	 *                                determine if the version needs to be updated.
	 *
	 * @return bool Returns true if the selected package version should be updated,
	 *                 else false.
	 */
	public function is_version_update_required( $selected_version, $compare_version ) {
		$use_dev_versions = defined( 'JETPACK_AUTOLOAD_DEV' ) && JETPACK_AUTOLOAD_DEV;

		if ( is_null( $selected_version ) ) {
			return true;
		}

		if ( $use_dev_versions && $this->is_dev_version( $selected_version ) ) {
			return false;
		}

		if ( $this->is_dev_version( $compare_version ) ) {
			if ( $use_dev_versions ) {
				return true;
			} else {
				return false;
			}
		}

		if ( version_compare( $selected_version, $compare_version, '<' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Checks whether the given package version is a development version.
	 *
	 * @param String $version The package version.
	 *
	 * @return bool True if the version is a dev version, else false.
	 */
	public function is_dev_version( $version ) {
		if ( 'dev-' === substr( $version, 0, 4 ) || '9999999-dev' === $version ) {
			return true;
		}

		return false;
	}
}