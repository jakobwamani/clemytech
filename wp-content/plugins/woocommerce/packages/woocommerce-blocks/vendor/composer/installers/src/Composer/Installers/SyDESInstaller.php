<?php
namespace Composer\Installers;

class SyDESInstaller extends BaseInstaller
{
    protected $locations = array(
        'module' => 'app/modules/{$name}/',
        'theme'  => 'themes/{$name}/',
    );

    /**
     * Format module name.
     *
     * Strip `sydes-` prefix and a trailing '-theme' or '-module' from package name if present.
     *
<<<<<<< HEAD
     * {@inerhitDoc}
=======
     * @param array @vars
     *
     * @return array
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
     */
    public function inflectPackageVars($vars)
    {
        if ($vars['type'] == 'sydes-module') {
            return $this->inflectModuleVars($vars);
        }

        if ($vars['type'] === 'sydes-theme') {
            return $this->inflectThemeVars($vars);
        }

        return $vars;
    }

    public function inflectModuleVars($vars)
    {
        $vars['name'] = preg_replace('/(^sydes-|-module$)/i', '', $vars['name']);
        $vars['name'] = str_replace(array('-', '_'), ' ', $vars['name']);
        $vars['name'] = str_replace(' ', '', ucwords($vars['name']));

        return $vars;
    }

    protected function inflectThemeVars($vars)
    {
        $vars['name'] = preg_replace('/(^sydes-|-theme$)/', '', $vars['name']);
        $vars['name'] = strtolower($vars['name']);

        return $vars;
    }
}
