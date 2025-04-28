<section
    class="section-image-tabs  section text-dark p-b-mobile-section p-b-mobile-section p-t-desktop-section p-b-desktop-section">

    <div class="container">
        <div class="row justify-content-center">

            <div class="col-xl-12 col-xxl-10">

                <div class="row justify-content-center">


                    <?php $count = 0;?>

                    <?php

// Check rows exists.
if (have_rows('tabs')):
    // Loop through rows.
    while (have_rows('tabs')):
        the_row();?>

                    <div class="col-3">

                        <div id="tab-<?php        echo $count;?>" class="tab">
                            <div class="medium sans text-center padding-bottom-intro">
                                <h3 class="h4"><?php        echo get_sub_field('title')?></h3>
                            </div>

                            <div id="icon-<?php        echo $count;?>" class="icon">

                                <?php
        $image = get_sub_field('image');
        if (!empty($image)): ?>
                                <img src="<?php            echo esc_url($image['url']); ?>"
                                    alt="<?php            echo esc_attr($image['alt']); ?>" />
                                <?php        endif; ?>

                            </div>

                            <div class="tab-hotspot"></div>

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

        <div class="row justify-content-center">

            <div class="col-xxl-10 padding-top-element">

                <?php $count = 0;?>

                <div id="panel-holder" class="panel-holder padding-bottom-section">

                    <?php

// Check rows exists.
if (have_rows('tabs')):
    // Loop through rows.
    while (have_rows('tabs')):
        the_row();?>

                    <div id="tab-panel-<?php        echo $count;?>" class="tab-panel">
                        <div class="inner medium">
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