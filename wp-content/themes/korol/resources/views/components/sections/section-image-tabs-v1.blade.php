<section
    class="section-image-tabs  section text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

    <div class="container">
        <div class="row justify-content-center">

            <div class="col-xl-10 col-xxl-11">
                <div class="tabs-image padding-bottom-intro" data-aos="fade-up" data-aos-duration="750">
                    <?php echo get_sub_field('image')?>

                    <div class="padding-top-element">
                        <p>Please click on the labels in the diagram for more information.</p>
                    </div>
                </div>
            </div>


        </div>

        <div class="row justify-content-center">

            <div class="col-xl-10 col-xxl-11">

                <?php $count = 0;?>

                <div id="panel-holder" class="panel-holder">

                    <?php

// Check rows exists.
if (have_rows('tabs')):
    // Loop through rows.
    while (have_rows('tabs')):
        the_row();?>

                    <div id="tab-panel-<?php        echo $count;?>" class="tab-panel">
                        <div class="medium">
                            <h3><?php        echo get_sub_field('title')?></h3>
                            <?php        echo get_sub_field('text')?>
                        </div>
                    </div>


                    <?php        $count++;?>

                    <?php            // End loop.
        endwhile;

    // No value.
else:
    // Do something...
endif; ?>
                </div>
            </div>

        </div>

    </div>

</section>