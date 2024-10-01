<?php 
    /**
     * Template Name: Contact
     */
?>

<?php get_header(); ?>


<main class="max-w-4xl my-24 mx-auto px-5 md:px-0">
    <h2 class="text-3xl mt-10 mb-8 mx-auto text-center">Contact Us</h2>
    <p class = "text-center text-xl">Got a question for us, or do you have anything you want to share?<br>Send us a message and we will get back to you at the nearest convenience! Thank you for stopping by!</p>
    <br>
    <form action="<?php echo esc_url( $_SERVER['REQUEST_URI'] ); ?>" method="post" class="m-0 mx-auto flex flex-col items-center">
        <input type="hidden" name="form_type" value="contact">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required class="border-2 border-solid border-black w-1/2">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required class="border-2 border-solid border-black w-1/2">
        <br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required class="border-2 border-solid border-black w-1/2 resize"></textarea>
        <br>
        <input type="submit" name="submit" value="Submit" class="border-2 border-solid border-black-500 w-1/4 m-0 mx-auto cursor-pointer">
    </form>
    
    </main>


<?php get_footer(); ?>