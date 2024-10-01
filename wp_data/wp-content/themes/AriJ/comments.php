<div>
    <div>
        <h2>
            <?php
                // Display comments header or number of comments
                if( ! have_comments()) {
                    echo "Leave a comment!";
                } else {
                    echo get_comments_number() . " Comments";
                }
            ?>
        </h2>

        <div>
            <?php 
                wp_list_comments(
                    array(
                        'avatar-size' => 120,
                        'style' => 'div'
                    )
                );
            ?>
        </div>
    </div>
    <hr aria-hidden="true">
    <?php 
        if( comments_open() ) {
            comment_form(
                array(
                    'class_form' => '',
                    'title_reply_before' => '<h2 id="replyTitle">',
                    'title_reply_after' => '</h2>'
                )
            );
        }
    ?>
</div>