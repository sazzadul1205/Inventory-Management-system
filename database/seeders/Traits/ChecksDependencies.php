<?php
// database/seeders/Traits/ChecksDependencies.php

namespace Database\Seeders\Traits;

trait ChecksDependencies
{
  /**
   * Check if required models exist
   */
  protected function checkDependencies(array $dependencies): bool
  {
    $allGood = true;
    $missing = [];

    foreach ($dependencies as $model => $message) {
      if ($model::count() == 0) {
        $missing[] = $message;
        $allGood = false;
      }
    }

    if (!$allGood) {
      $this->command->error('❌ Cannot seed ' . class_basename($this) . ':');
      foreach ($missing as $msg) {
        $this->command->error("   - {$msg}");
      }
      $this->command->warn('👉 Run the master seeder first: php artisan db:seed');
      return false;
    }

    return true;
  }
}
