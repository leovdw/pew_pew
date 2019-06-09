<?php
require 'builder/vendor/autoload.php';        // Make sure to point this correctly

use WebPConvert\WebPConvert;

$source = $_GET['source'];            // Absolute file path to source file. Comes from the .htaccess
$destination = $source . '.webp';     // Store the converted images besides the original images (other options are available!)

$options = [

    // UNCOMMENT NEXT LINE, WHEN YOU ARE UP AND RUNNING!
    // 'show-report' => true             // Show a conversion report instead of serving the converted image.

    // More options available!
];
WebPConvert::convertAndServe($source, $destination, $options);
