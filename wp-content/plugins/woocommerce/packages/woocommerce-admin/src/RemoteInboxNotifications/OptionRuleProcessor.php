<?php
/**
 * Rule processor that performs a comparison operation against an option value.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that performs a comparison operation against an option value.
 */
class OptionRuleProcessor implements RuleProcessorInterface {
	/**
	 * Performs a comparison operation against the option value.
	 *
	 * @param object $rule         The specific rule being processed by this rule processor.
	 * @param object $stored_state Stored state.
	 *
	 * @return bool The result of the operation.
	 */
	public function process( $rule, $stored_state ) {
<<<<<<< HEAD
		$is_contains   = $rule->operation && strpos( $rule->operation, 'contains' ) !== false;
		$default_value = $is_contains ? array() : false;
		$default       = isset( $rule->default ) ? $rule->default : $default_value;
		$option_value  = get_option( $rule->option_name, $default );

		if ( $is_contains && ! is_array( $option_value ) ) {
			$logger = wc_get_logger();
			$logger->warning(
				sprintf(
					'ComparisonOperation "%s" option value "%s" is not an array, defaulting to empty array.',
					$rule->operation,
					$rule->option_name
				),
				array(
					'option_value' => $option_value,
					'rule'         => $rule,
				)
			);
			$option_value = array();
		}
=======
		$default      = isset( $rule->default ) ? $rule->default : false;
		$option_value = get_option( $rule->option_name, $default );
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

		return ComparisonOperation::compare(
			$option_value,
			$rule->value,
			$rule->operation
		);
	}

	/**
	 * Validates the rule.
	 *
	 * @param object $rule The rule to validate.
	 *
	 * @return bool Pass/fail.
	 */
	public function validate( $rule ) {
		if ( ! isset( $rule->option_name ) ) {
			return false;
		}

		if ( ! isset( $rule->value ) ) {
			return false;
		}

		if ( ! isset( $rule->operation ) ) {
			return false;
		}

		return true;
	}
}
