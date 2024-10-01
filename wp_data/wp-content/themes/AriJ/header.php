<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    

    <!-- Theme CSS -->
    <?php wp_head(); ?>



</head>

<?php 
        function my_custom_theme_styles() {
            ?>
            <style type="text/css">
                body {
                    background-color: <?php echo get_theme_mod('background_color', '#ffffff'); ?>;
                    color: <?php echo get_theme_mod('font_color', '#000000'); ?>;
                }
            </style>
            <?php
        }
        add_action('wp_head', 'my_custom_theme_styles');        
    ?>

<body class="text-[#60AE76] bg-[#FCF4E2]">
    <header class="p-4">
        <nav class="flex flex-row flex-wrap justify-center items-center m-0 mx-auto text-center md:text-left">
            <?php 
                // Display site logo
                if( function_exists('the_custom_logo')) {
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo = wp_get_attachment_image_src($custom_logo_id);
                }
            ?>
            <img id="logo" alt="logo" src="<?php echo $logo[0] ?>" class="flex-initial filter -hue-rotate-90">

            <a href="/" class="w-80 flex-initial text-3xl">
                <?php 
                    // Display site title
                    echo get_bloginfo('name');
                ?>
            </a>

            <div id="mainMenu" class="w-full flex-1">
                <?php 
                    // Display main menu content
                    wp_nav_menu(
                        array(
                            'menu' => 'primary',
                            'container' => '',
                            'theme_location' => 'primary',
                            'items_wrap' => '<ul id="mainMenuListItem" class="flex flex-wrap flex-row justify-around">%3$s</ul>'
                        )
                    );
                ?>
            </div>
        </nav>
    </header>
