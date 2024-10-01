<?php 
    /**
     * Template Name: Newsletter
     */
?>

<?php get_header(); ?>


<main class="max-w-4xl my-40 mx-auto px-5 md:px-0">
    <h2 class="text-3xl mt-10 mb-8 mx-auto text-center">Join Our Newsletter!</h2>
    <p class = "text-center text-xl">Send us your email to recieve blog updates, discounts, and info on any upcoming events coming to <b>Serve</b>!</p>
    <br>
    <form action="<?php echo esc_url( $_SERVER['REQUEST_URI'] ); ?>" method="post" class="m-0 mx-auto flex flex-col items-center">
        <input type="hidden" name="form_type" value="newsletter">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required class="border-2 border-solid border-black w-1/2">
        <br>
        <input type="submit" name="submit" value="Submit" class="border-2 border-solid border-black-500 w-1/4 m-0 mx-auto cursor-pointer">
    </form>
    
</main>

<?php get_footer(); ?>