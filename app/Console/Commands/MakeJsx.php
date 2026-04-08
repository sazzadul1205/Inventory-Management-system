<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeJsx extends Command
{
    protected $signature = 'make:jsx {name}';
    protected $description = 'Create a new JSX component';

    public function handle()
    {
        $name = $this->argument('name');

        // Normalize slashes
        $name = str_replace('\\', '/', $name);

        // Determine correct base path
        if (str_starts_with($name, 'pages/')) {
            $path = resource_path('js/' . $name . '.jsx');
        } elseif (str_starts_with($name, 'components/')) {
            $path = resource_path('js/' . $name . '.jsx');
        } else {
            // Default → components
            $path = resource_path('js/components/' . $name . '.jsx');
        }

        // Prevent overwrite
        if (File::exists($path)) {
            $this->error("Component already exists!");
            return;
        }

        // Ensure directory exists
        File::ensureDirectoryExists(dirname($path));

        // Create file with stub
        File::put($path, $this->getStub($name));

        $this->info("JSX component created: {$path}");
    }

    protected function getStub($name)
    {
        $name = str_replace('\\', '/', $name);
        $componentName = basename($name);

        return <<<JSX
import React from 'react';

const {$componentName} = () => {
  return (
    <div>
      <h1>{$componentName} Component</h1>
    </div>
  );
};

export default {$componentName};
JSX;
    }
}
