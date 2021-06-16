<?php
/**
 * This file was automatically generated by automattic/jetpack-autoloader.
 *
 * @package automattic/jetpack-autoloader
 */

<<<<<<< HEAD
namespace Automattic\Jetpack\Autoloader\jpdb3e311999f9a1f89b6722fb14f5494a;

 // phpcs:ignore

use Automattic\Jetpack\Autoloader\AutoloadGenerator;

=======
namespace Automattic\Jetpack\Autoloader\jp108fd4c3a9f02449d3b5926cf1eca128;

 // phpcs:ignore

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
/**
 * This class selects the package version for the autoloader.
 */
class Autoloader_Handler {

<<<<<<< HEAD
	/**
	 * The PHP_Autoloader instance.
	 *
	 * @var PHP_Autoloader
	 */
	private $php_autoloader;

	/**
	 * The Hook_Manager instance.
	 *
	 * @var Hook_Manager
	 */
	private $hook_manager;

	/**
	 * The Manifest_Reader instance.
	 *
	 * @var Manifest_Reader
	 */
	private $manifest_reader;

	/**
	 * The Version_Selector instance.
=======
	// The name of the autoloader function registered by v1.* autoloaders.
	const V1_AUTOLOADER_NAME = 'Automattic\Jetpack\Autoloader\autoloader';

	/*
	 * The autoloader function for v2.* autoloaders is named __NAMESPACE__ . \autoloader.
	 * The namespace is defined in AutoloadGenerator as
	 * 'Automattic\Jetpack\Autoloader\jp' plus a unique suffix.
	 */
	const V2_AUTOLOADER_BASE = 'Automattic\Jetpack\Autoloader\jp';

	/**
	 * The current plugin path.
	 *
	 * @var string
	 */
	private $current_plugin_path;

	/**
	 * The paths for all of the active plugins.
	 *
	 * @var array
	 */
	private $active_plugin_paths;

	/**
	 * The Autoloader_Locator object.
	 *
	 * @var Autoloader_Locator
	 */
	private $autoloader_locator;

	/**
	 * The Version_Selector object.
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	 *
	 * @var Version_Selector
	 */
	private $version_selector;

	/**
	 * The constructor.
	 *
<<<<<<< HEAD
	 * @param PHP_Autoloader   $php_autoloader The PHP_Autoloader instance.
	 * @param Hook_Manager     $hook_manager The Hook_Manager instance.
	 * @param Manifest_Reader  $manifest_reader The Manifest_Reader instance.
	 * @param Version_Selector $version_selector The Version_Selector instance.
	 */
	public function __construct( $php_autoloader, $hook_manager, $manifest_reader, $version_selector ) {
		$this->php_autoloader   = $php_autoloader;
		$this->hook_manager     = $hook_manager;
		$this->manifest_reader  = $manifest_reader;
		$this->version_selector = $version_selector;
	}

	/**
	 * Checks to see whether or not an autoloader is currently in the process of initializing.
	 *
	 * @return bool
	 */
	public function is_initializing() {
		// If no version has been set it means that no autoloader has started initializing yet.
		global $jetpack_autoloader_latest_version;
		if ( ! isset( $jetpack_autoloader_latest_version ) ) {
			return false;
		}

		// When the version is set but the classmap is not it ALWAYS means that this is the
		// latest autoloader and is being included by an older one.
		global $jetpack_packages_classmap;
		if ( empty( $jetpack_packages_classmap ) ) {
			return true;
		}

		// Version 2.4.0 added a new global and altered the reset semantics. We need to check
		// the other global as well since it may also point at initialization.
		// Note: We don't need to check for the class first because every autoloader that
		// will set the latest version global requires this class in the classmap.
		$replacing_version = $jetpack_packages_classmap[ AutoloadGenerator::class ]['version'];
		if ( $this->version_selector->is_dev_version( $replacing_version ) || version_compare( $replacing_version, '2.4.0.0', '>=' ) ) {
			global $jetpack_autoloader_loader;
			if ( ! isset( $jetpack_autoloader_loader ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Activates an autoloader using the given plugins and activates it.
	 *
	 * @param string[] $plugins The plugins to initialize the autoloader for.
	 */
	public function activate_autoloader( $plugins ) {
		global $jetpack_packages_psr4;
		$jetpack_packages_psr4 = array();
		$this->manifest_reader->read_manifests( $plugins, 'vendor/composer/jetpack_autoload_psr4.php', $jetpack_packages_psr4 );

		global $jetpack_packages_classmap;
		$jetpack_packages_classmap = array();
		$this->manifest_reader->read_manifests( $plugins, 'vendor/composer/jetpack_autoload_classmap.php', $jetpack_packages_classmap );

		global $jetpack_packages_filemap;
		$jetpack_packages_filemap = array();
		$this->manifest_reader->read_manifests( $plugins, 'vendor/composer/jetpack_autoload_filemap.php', $jetpack_packages_filemap );

		$loader = new Version_Loader(
=======
	 * @param string             $current_plugin_path The current plugin path.
	 * @param array              $active_plugin_paths The active plugin paths.
	 * @param Autoloader_Locator $autoloader_locator The Autoloader_Locator object.
	 * @param Version_Selector   $version_selector The Version_Selector object.
	 */
	public function __construct( $current_plugin_path, $active_plugin_paths, $autoloader_locator, $version_selector ) {
		$this->current_plugin_path = $current_plugin_path;
		$this->active_plugin_paths = $active_plugin_paths;
		$this->autoloader_locator  = $autoloader_locator;
		$this->version_selector    = $version_selector;
	}

	/**
	 * Finds the latest installed autoloader.
	 *
	 * @return bool True if this autoloader is the latest, false otherwise.
	 */
	public function is_latest_autoloader() {
		global $jetpack_autoloader_latest_version;

		if ( isset( $jetpack_autoloader_latest_version ) ) {
			return $jetpack_autoloader_latest_version === $this->autoloader_locator->get_autoloader_version( $this->current_plugin_path );
		}

		$latest_plugin = $this->autoloader_locator->find_latest_autoloader( $this->active_plugin_paths, $jetpack_autoloader_latest_version );
		if ( ! isset( $latest_plugin ) ) {
			return true;
		}

		if ( $latest_plugin !== $this->current_plugin_path ) {
			require $this->autoloader_locator->get_autoloader_path( $latest_plugin );
			return false;
		}

		return true;
	}

	/**
	 * Checks whether the autoloader should be reset. The autoloader should be reset:
	 *
	 *  - When a plugin is activated via a method other than a request, for example using WP-CLI.
	 *  - When the active plugins list changes between autoloader checks, for example when filtered by a plugin.
	 *
	 * We perform this reset because the manifest files for the plugin will have been initially unknown when
	 * selecting versions for classes and files.
	 *
	 * If the current plugin is not already known, this method will add it to the
	 * $jetpack_autoloader_activating_plugins_paths global.
	 * The $jetpack_autoloader_cached_plugin_paths global will store a cache of the
	 * active plugin paths when last changed.
	 *
	 * @return boolean True if the autoloader must be reset, else false.
	 */
	public function should_autoloader_reset() {
		global $jetpack_autoloader_activating_plugins_paths;
		global $jetpack_autoloader_cached_plugin_paths;

		$plugin_unknown = ! in_array( $this->current_plugin_path, $this->active_plugin_paths, true );
		if ( $plugin_unknown ) {
			if ( ! isset( $jetpack_autoloader_activating_plugins_paths ) ) {
				$jetpack_autoloader_activating_plugins_paths = array();
			}

			// If the current plugin isn't known, add it to the activating plugins list.
			$jetpack_autoloader_activating_plugins_paths[] = $this->current_plugin_path;
			$this->active_plugin_paths[]                   = $this->current_plugin_path;
		}

		$cache_invalidated = $jetpack_autoloader_cached_plugin_paths !== $this->active_plugin_paths;
		if ( $cache_invalidated ) {
			$jetpack_autoloader_cached_plugin_paths = $this->active_plugin_paths;
		}

		return $plugin_unknown || $cache_invalidated;
	}

	/**
	 * Builds the Version_Autoloader class that is used for autoloading.
	 *
	 * @return Version_Loader
	 */
	public function build_autoloader() {
		$manifest_handler = new Manifest_Handler( $this->active_plugin_paths, $this->version_selector );

		global $jetpack_packages_psr4;
		$jetpack_packages_psr4 = array();
		$manifest_handler->register_plugin_manifests( 'vendor/composer/jetpack_autoload_psr4.php', $jetpack_packages_psr4 );

		global $jetpack_packages_classmap;
		$jetpack_packages_classmap = array();
		$manifest_handler->register_plugin_manifests( 'vendor/composer/jetpack_autoload_classmap.php', $jetpack_packages_classmap );

		global $jetpack_packages_filemap;
		$jetpack_packages_filemap = array();
		$manifest_handler->register_plugin_manifests( 'vendor/composer/jetpack_autoload_filemap.php', $jetpack_packages_filemap );

		// Store the generated autoloader data in the loader so we can use it.
		return new Version_Loader(
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			$this->version_selector,
			$jetpack_packages_classmap,
			$jetpack_packages_psr4,
			$jetpack_packages_filemap
		);
<<<<<<< HEAD

		$this->php_autoloader->register_autoloader( $loader );

		// Now that the autoloader is active we can load the filemap.
		$loader->load_filemap();
	}

	/**
	 * Resets the active autoloader and all related global state.
	 */
	public function reset_autoloader() {
		$this->php_autoloader->unregister_autoloader();
		$this->hook_manager->reset();

		// Clear all of the autoloader globals so that older autoloaders don't do anything strange.
		global $jetpack_autoloader_latest_version;
		$jetpack_autoloader_latest_version = null;

		global $jetpack_packages_classmap;
		$jetpack_packages_classmap = array(); // Must be array to avoid exceptions in old autoloaders!

		global $jetpack_packages_psr4;
		$jetpack_packages_psr4 = array(); // Must be array to avoid exceptions in old autoloaders!

		global $jetpack_packages_filemap;
		$jetpack_packages_filemap = array(); // Must be array to avoid exceptions in old autoloaders!
=======
	}

	/**
	 * Updates the spl autoloader chain:
	 *  - Registers this namespace's autoloader function.
	 *  - If a v1 autoloader function is registered, moves it to the end of the chain.
	 *  - Removes any other v2 autoloader functions that have already been registered. This
	 *    can occur when the autoloader is being reset by an activating plugin.
	 */
	public function update_autoloader_chain() {
		spl_autoload_register( __NAMESPACE__ . '\autoloader' );

		$autoload_chain = spl_autoload_functions();

		foreach ( $autoload_chain as $autoloader ) {
			if ( ! is_string( $autoloader ) ) {
				/*
				 * The Jetpack Autoloader functions are registered as strings, so
				 * just continue if $autoloader isn't a string.
				 */
				continue;
			}

			if ( self::V1_AUTOLOADER_NAME === $autoloader ) {
				// Move the v1.* autoloader function to the end of the spl autoloader chain.
				spl_autoload_unregister( $autoloader );
				spl_autoload_register( $autoloader );

			} elseif (
				self::V2_AUTOLOADER_BASE === substr( $autoloader, 0, strlen( self::V2_AUTOLOADER_BASE ) )
				&& __NAMESPACE__ !== substr( $autoloader, 0, strlen( __NAMESPACE__ ) )
			) {
				// Unregister any other v2.* autoloader functions if they're in the chain.
				spl_autoload_unregister( $autoloader );
			}
		}
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	}
}
