<?php
/**
 * WCAdmin active for provider.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

<<<<<<< HEAD
use Automattic\WooCommerce\Admin\WCAdminHelper;

=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
defined( 'ABSPATH' ) || exit;

/**
 * WCAdminActiveForProvider class
 */
class WCAdminActiveForProvider {
	/**
	 * Get the number of seconds that the store has been active.
	 *
	 * @return number Number of seconds.
	 */
	public function get_wcadmin_active_for_in_seconds() {
<<<<<<< HEAD
		return WCAdminHelper::get_wcadmin_active_for_in_seconds();
=======
		$install_timestamp = get_option( 'woocommerce_admin_install_timestamp' );

		return time() - $install_timestamp;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
