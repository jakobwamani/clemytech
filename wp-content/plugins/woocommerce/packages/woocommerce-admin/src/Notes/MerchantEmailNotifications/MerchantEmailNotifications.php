<?php
/**
 * Handles merchant email notifications
 */

namespace Automattic\WooCommerce\Admin\Notes\MerchantEmailNotifications;

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Merchant email notifications.
 * This gets all non-sent notes type `email` and sends them.
 */
class MerchantEmailNotifications {
	/**
	 * Initialize the merchant email notifications.
	 */
	public static function init() {
		add_action( 'admin_init', array( __CLASS__, 'trigger_notification_action' ) );
	}

	/**
	 * Trigger the note action.
	 */
	public static function trigger_notification_action() {
		/* phpcs:disable WordPress.Security.NonceVerification */
		if (
			! isset( $_GET['external_redirect'] ) ||
			1 !== intval( $_GET['external_redirect'] ) ||
<<<<<<< HEAD
			! isset( $_GET['user'] ) ||
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			! isset( $_GET['note'] ) ||
			! isset( $_GET['action'] )
		) {
			return;
		}
		$note_id   = intval( $_GET['note'] );
		$action_id = intval( $_GET['action'] );
<<<<<<< HEAD
		$user_id   = intval( $_GET['user'] );
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		/* phpcs:enable */

		$note = Notes::get_note( $note_id );

		if ( ! $note ) {
			return;
		}

		$triggered_action = Notes::get_action_by_id( $note, $action_id );

		if ( ! $triggered_action ) {
			return;
		}

		Notes::trigger_note_action( $note, $triggered_action );
<<<<<<< HEAD
=======

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$url = $triggered_action->query;

		// We will use "wp_safe_redirect" when it's an internal redirect.
		if ( strpos( $url, 'http' ) === false ) {
			wp_safe_redirect( $url );
		} else {
			header( 'Location: ' . $url );
		}
		exit();
	}

	/**
	 * Send all the notifications type `email`.
	 */
	public static function run() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$notes      = $data_store->get_notes(
			array(
				'type'   => array( Note::E_WC_ADMIN_NOTE_EMAIL ),
				'status' => array( 'unactioned' ),
			)
		);

		foreach ( $notes as $note ) {
			$note = Notes::get_note( $note->note_id );
			if ( $note ) {
				self::send_merchant_notification( $note );
				$note->set_status( 'sent' );
				$note->save();
<<<<<<< HEAD
=======
				wc_admin_record_tracks_event( 'wcadmin_email_note_sent', array( 'note_name' => $note->get_name() ) );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			}
		}
	}

	/**
	 * Send the notification to the merchant.
	 *
	 * @param object $note The note to send.
	 */
	public static function send_merchant_notification( $note ) {
		\WC_Emails::instance();
<<<<<<< HEAD
		$users = self::get_notification_recipients( $note );
		$email = new NotificationEmail( $note );
		foreach ( $users as $user ) {
			if ( is_email( $user->user_email ) ) {
				$name = self::get_merchant_preferred_name( $user );
				$email->trigger( $user->user_email, $user->ID, $name );
=======
		$users_emails = self::get_notification_email_addresses( $note );
		$email        = new NotificationEmail( $note );
		foreach ( $users_emails as $user_email ) {
			if ( is_email( $user_email ) ) {
				$email->trigger( $user_email );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			}
		}
	}

	/**
<<<<<<< HEAD
	 * Get the preferred name for user. First choice is
	 * the user's first name, and then display_name.
	 *
	 * @param WP_User $user Recipient to send the note to.
	 * @return string User's name.
	 */
	public static function get_merchant_preferred_name( $user ) {
		$first_name = get_user_meta( $user->ID, 'first_name', true );
		if ( $first_name ) {
			return $first_name;
		}
		if ( $user->display_name ) {
			return $user->display_name;
		}
		return '';
	}

	/**
	 * Get users by role to notify.
	 *
	 * @param object $note The note to send.
	 * @return array Users to notify
	 */
	public static function get_notification_recipients( $note ) {
=======
	 * Get email addresses by role to notify.
	 *
	 * @param object $note The note to send.
	 * @return array Emails to notify
	 */
	public static function get_notification_email_addresses( $note ) {
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
		$content_data = $note->get_content_data();
		$role         = 'administrator';
		if ( isset( $content_data->role ) ) {
			$role = $content_data->role;
		}
<<<<<<< HEAD
		$args = array( 'role' => $role );
		return get_users( $args );
=======
		$args  = array( 'role' => $role );
		$users = get_users( $args );
		return array_column( $users, 'user_email' );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
