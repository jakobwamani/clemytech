<?php
namespace Composer\Installers;

class OctoberInstaller extends BaseInstaller
{
    protected $locations = array(
        'module'    => 'modules/{$name}/',
        'plugin'    => 'plugins/{$vendor}/{$name}/',
<<<<<<< HEAD
        'theme'     => 'themes/{$vendor}-{$name}/'
=======
        'theme'     => 'themes/{$name}/'
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
    );

    /**
     * Format package name.
     *
     * For package type october-plugin, cut off a trailing '-plugin' if present.
     *
     * For package type october-theme, cut off a trailing '-theme' if present.
     *
     */
    public function inflectPackageVars($vars)
    {
        if ($vars['type'] === 'october-plugin') {
            return $this->inflectPluginVars($vars);
        }

        if ($vars['type'] === 'october-theme') {
            return $this->inflectThemeVars($vars);
        }

        return $vars;
    }

    protected function inflectPluginVars($vars)
    {
        $vars['name'] = preg_replace('/^oc-|-plugin$/', '', $vars['name']);
        $vars['vendor'] = preg_replace('/[^a-z0-9_]/i', '', $vars['vendor']);

        return $vars;
    }

    protected function inflectThemeVars($vars)
    {
        $vars['name'] = preg_replace('/^oc-|-theme$/', '', $vars['name']);
<<<<<<< HEAD
        $vars['vendor'] = preg_replace('/[^a-z0-9_]/i', '', $vars['vendor']);
=======
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3

        return $vars;
    }
}
