<?php
namespace Composer\Installers;

<<<<<<< HEAD
use Composer\Package\PackageInterface;

class MauticInstaller extends BaseInstaller
{
    protected $locations = array(
        'plugin'           => 'plugins/{$name}/',
        'theme'            => 'themes/{$name}/',
        'core'             => 'app/',
    );

    private function getDirectoryName()
    {
        $extra = $this->package->getExtra();
        if (!empty($extra['install-directory-name'])) {
            return $extra['install-directory-name'];
        }

        return $this->toCamelCase($this->package->getPrettyName());
    }

    /**
     * @param string $packageName
     *
     * @return string
     */
    private function toCamelCase($packageName)
    {
        return str_replace(' ', '', ucwords(str_replace('-', ' ', basename($packageName))));
    }

=======
class MauticInstaller extends BaseInstaller
{
    protected $locations = array(
        'plugin' => 'plugins/{$name}/',
        'theme' => 'themes/{$name}/',
    );

>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    /**
     * Format package name of mautic-plugins to CamelCase
     */
    public function inflectPackageVars($vars)
    {
<<<<<<< HEAD

        if ($vars['type'] == 'mautic-plugin' || $vars['type'] == 'mautic-theme') {
            $directoryName = $this->getDirectoryName();
            $vars['name'] = $directoryName;
=======
        if ($vars['type'] == 'mautic-plugin') {
            $vars['name'] = preg_replace_callback('/(-[a-z])/', function ($matches) {
                return strtoupper($matches[0][1]);
            }, ucfirst($vars['name']));
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
        }

        return $vars;
    }

}
