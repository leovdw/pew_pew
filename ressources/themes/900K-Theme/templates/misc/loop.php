<?php

if ( have_posts() ){
	while ( have_posts() ) {
		the_post();
		?>
			<li class="post--content">
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<h2><?php the_title(); ?></h2>
					<div class="content">
						YES
						<?php the_content(); ?>
					</div>
				</article>
			</li>
		<?php
	}
}
$out = ob_get_clean();
?>
<section class="post">
	<ul class="no-bullet">
		<?= $out; ?>
	</ul>
</section>
