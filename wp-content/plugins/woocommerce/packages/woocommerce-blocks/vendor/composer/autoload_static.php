<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

<<<<<<< HEAD
class ComposerStaticInitbc1b1af2c309d7ebec60f743d6cb8207
=======
class ComposerStaticInit699c0b76668dfdbe54fd2bd2eefa6a26
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'Automattic\\WooCommerce\\Blocks\\' => 30,
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Automattic\\WooCommerce\\Blocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
<<<<<<< HEAD
            $loader->prefixLengthsPsr4 = ComposerStaticInitbc1b1af2c309d7ebec60f743d6cb8207::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbc1b1af2c309d7ebec60f743d6cb8207::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbc1b1af2c309d7ebec60f743d6cb8207::$classMap;
=======
            $loader->prefixLengthsPsr4 = ComposerStaticInit699c0b76668dfdbe54fd2bd2eefa6a26::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit699c0b76668dfdbe54fd2bd2eefa6a26::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit699c0b76668dfdbe54fd2bd2eefa6a26::$classMap;
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

        }, null, ClassLoader::class);
    }
}
