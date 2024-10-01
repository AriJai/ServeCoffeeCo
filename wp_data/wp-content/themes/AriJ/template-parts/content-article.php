<div >
    <header>
        <div>
            <span><?php the_date(); ?></span>
            <?php
                // Display all tags
                // params: before-tags, between-tags, after-tags
                the_tags('<span id="tag">', '</span><span id="tag">', '</span>');
            ?>
        </div>
    </header>

    <?php
        // Display site content (post section)
        // Meta data: date, tags
        the_content();
    ?>

    <?php
        // Display the comments section
        comments_template();
    ?>
</div>