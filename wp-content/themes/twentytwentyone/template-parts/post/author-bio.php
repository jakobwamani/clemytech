<?php
/**
 * The template for displaying author info below posts.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<?php if ( (bool) get_the_author_meta( 'description' ) && post_type_supports( get_post_type(), 'author' ) ) : ?>
	<div class="author-bio <?php echo get_option( 'show_avatars' ) ? 'show-avatars' : ''; ?>">
		<?php echo get_avatar( get_the_author_meta( 'ID' ), '85' ); ?>
		<div class="author-bio-content">
<<<<<<< HEAD
			<h2 class="author-title">
			<?php
			printf(
				/* translators: %s: Author name. */
				esc_html__( 'By %s', 'twentytwentyone' ),
				get_the_author()
			);
			?>
			</h2>
			<p class="author-description"> <?php the_author_meta( 'description' ); ?></p><!-- .author-description -->
			<?php
			printf(
				'<a class="author-link" href="%1$s" rel="author">%2$s</a>',
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
				sprintf(
					/* translators: %s: Author name. */
					esc_html__( 'View all of %s\'s posts.', 'twentytwentyone' ),
					get_the_author()
				)
=======
			<h2 class="author-title"><?php printf( /* translators: 1: Author name. */ esc_html__( 'By %s', 'twentytwentyone' ), get_the_author() ); ?></h2>
			<p class="author-description"> <?php the_author_meta( 'description' ); ?></p><!-- .author-description -->
			<?php
			printf(
				/* translators: 1: Link to authors posts. 2: Author name. */
				'<a class="author-link" href="%1$s" rel="author">' . esc_html__( 'View all of %2$s\'s posts.', 'twentytwentyone' ) . '</a>',
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
				get_the_author()
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
			);
			?>
		</div><!-- .author-bio-content -->
	</div><!-- .author-bio -->
<?php endif; ?>
