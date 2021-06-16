<?php

// autoload_real.php @generated by Composer

<<<<<<< HEAD
class ComposerAutoloaderInitdb3e311999f9a1f89b6722fb14f5494a
=======
class ComposerAutoloaderInit326f62ba504e00df93e38ea9af268b63
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

<<<<<<< HEAD
        spl_autoload_register(array('ComposerAutoloaderInitdb3e311999f9a1f89b6722fb14f5494a', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInitdb3e311999f9a1f89b6722fb14f5494a', 'loadClassLoader'));
=======
        spl_autoload_register(array('ComposerAutoloaderInit326f62ba504e00df93e38ea9af268b63', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInit326f62ba504e00df93e38ea9af268b63', 'loadClassLoader'));
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

        $useStaticLoader = PHP_VERSION_ID >= 50600 && !defined('HHVM_VERSION') && (!function_exists('zend_loader_file_encoded') || !zend_loader_file_encoded());
        if ($useStaticLoader) {
            require_once __DIR__ . '/autoload_static.php';

<<<<<<< HEAD
            call_user_func(\Composer\Autoload\ComposerStaticInitdb3e311999f9a1f89b6722fb14f5494a::getInitializer($loader));
=======
            call_user_func(\Composer\Autoload\ComposerStaticInit326f62ba504e00df93e38ea9af268b63::getInitializer($loader));
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
        } else {
            $map = require __DIR__ . '/autoload_namespaces.php';
            foreach ($map as $namespace => $path) {
                $loader->set($namespace, $path);
            }

            $map = require __DIR__ . '/autoload_psr4.php';
            foreach ($map as $namespace => $path) {
                $loader->setPsr4($namespace, $path);
            }

            $classMap = require __DIR__ . '/autoload_classmap.php';
            if ($classMap) {
                $loader->addClassMap($classMap);
            }
        }

        $loader->register(true);

        return $loader;
    }
}
