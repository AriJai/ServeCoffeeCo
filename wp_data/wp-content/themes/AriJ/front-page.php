<?php get_header() ?>


    <section>
        
        <?php
            // If posts are available
            if( have_posts() ) {
                // While loop for post display
                while( have_posts() ) {
                    // WordPress post section
                    the_post();
                    // WordPress content section
                    the_content();
                }
            }
        ?>

    </section>
    
    
<?php get_footer() ?>