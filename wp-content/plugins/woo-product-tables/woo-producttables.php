<?php
/**
 * Plugin Name: WooCommerce Product Table by WooBeWoo
 * Plugin URI: https://woobewoo.com/plugins/table-woocommerce-plugin/
 * Description: Post your product easy in tables
 * Version: 1.4.3
 * Author: WooBeWoo
 * Author URI: https://woobewoo.com
 * Text Domain: woo-product-tables
 * Domain Path: /languages
 * WC requires at least: 3.4.0
 * WC tested up to: 5.4.0
 **/
	/**
	 * Base config constants and functions
	 */
	require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'config.php');
	require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'functions.php');
	/**
	 * Connect all required core classes
	 */
	importClassWtbp('DbWtbp');
	importClassWtbp('InstallerWtbp');
	importClassWtbp('BaseObjectWtbp');
	importClassWtbp('ModuleWtbp');
	importClassWtbp('ModelWtbp');
	importClassWtbp('ViewWtbp');
	importClassWtbp('ControllerWtbp');
	importClassWtbp('HelperWtbp');
	importClassWtbp('DispatcherWtbp');
	importClassWtbp('FieldWtbp');
	importClassWtbp('TableWtbp');
	importClassWtbp('FrameWtbp');
	/**
	 * Deprecated classes
	 *
	 * @deprecated since version 1.0.1
	 */
	importClassWtbp('LangWtbp');
	importClassWtbp('ReqWtbp');
	importClassWtbp('UriWtbp');
	importClassWtbp('HtmlWtbp');
	importClassWtbp('ResponseWtbp');
	importClassWtbp('FieldAdapterWtbp');
	importClassWtbp('ValidatorWtbp');
	importClassWtbp('ErrorsWtbp');
	importClassWtbp('UtilsWtbp');
	importClassWtbp('ModInstallerWtbp');
	importClassWtbp('InstallerDbUpdaterWtbp');
	importClassWtbp('DateWtbp');
	/**
	 * Check plugin version - maybe we need to update database, and check global errors in request
	 */
	InstallerWtbp::update();
	ErrorsWtbp::init();
	/**
	 * Start application
	 */
	FrameWtbp::_()->parseRoute();
	FrameWtbp::_()->init();
	FrameWtbp::_()->exec();
