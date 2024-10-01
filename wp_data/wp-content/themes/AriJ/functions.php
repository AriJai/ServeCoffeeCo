<?php 

// Adds dynamic theme support
function ariJ_theme_support() {
    // Title tag
    add_theme_support('title-tag');
    // Logo
    add_theme_support('custom-logo');
    // Posts
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'ariJ_theme_support');




function ariJ_customize_register($wp_customize) {
    // Add section for colors
    $wp_customize->add_section('my_custom_colors', array(
        'title' => __('Colors', 'ServeCoffeeCo'),
        'priority' => 30,
    ));

    // Background color setting
    $wp_customize->add_setting('background_color', array(
        'default' => '#ffffff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'background_color_control', array(
        'label' => __('Background Color', 'ServeCoffeeCo'),
        'section' => 'my_custom_colors',
        'settings' => 'background_color',
    )));

    // Font color setting
    $wp_customize->add_setting('font_color', array(
        'default' => '#000000',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'font_color_control', array(
        'label' => __('Font Color', 'ServeCoffeeCo'),
        'section' => 'my_custom_colors',
        'settings' => 'font_color',
    )));
}
add_action('customize_register', 'ariJ_customize_register');





// Menu
function ariJ_menus() {
    $locations = array(
        'primary' => 'Desktop primary menu section',
        'footer' => 'Desktop footer menu section'
    );
    register_nav_menus($locations);
}
add_action('init','ariJ_menus');

function ariJ_enqueue_styles() {
    // Adds dynamic Version number to theme
    $version = wp_get_theme()->get( 'Version' );
    wp_enqueue_style('tailwind-css', get_template_directory_uri() . '/src/styles.css', array(), $version, 'all');
}
add_action('wp_enqueue_scripts', 'ariJ_enqueue_styles');

function ariJ_handle_form_submission_contact() {
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form_type'] === 'contact') {
        global $wpdb;

        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $message = sanitize_textarea_field($_POST['message']);

        $table_name = 'serve_contact';

        $data = array(
            'name' => $name,
            'email' => $email,
            'message' => $message,
        );

        $wpdb->insert($table_name, $data);

        wp_redirect('http://localhost:8080/');
        exit;
    };
};
add_action('init', 'ariJ_handle_form_submission_contact');

function ariJ_handle_form_submission_newsletter() {
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form_type'] === 'newsletter') {
        global $wpdb;

        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);

        $table_name = 'serve_newsletter';

        $data = array(
            'email' => $email,
        );

        $wpdb->insert($table_name, $data);
    };
};
add_action('init', 'ariJ_handle_form_submission_newsletter');
