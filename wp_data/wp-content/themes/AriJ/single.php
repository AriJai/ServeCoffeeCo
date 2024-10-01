<?php get_header() ?>


    <section>
        
        <?php
            // If posts are available
            if( have_posts() ) {
                // While loop for post display
                while( have_posts() ) {
                    // WordPress post section
                    the_post();
                    // Gets post from ./template-parts folder
                    get_template_part( 'template-parts/content', 'article' );
                }
            }
        ?>

    </section>
    
    
<?php get_footer() ?>