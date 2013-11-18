<?php
/**
 * Author Widget
 *
 * @package VamosFalar WordPress Theme
 * @since 1.0
 */
 
class wpex_author extends WP_Widget {
    /** constructor */
    function wpex_author() {
        parent::WP_Widget(false, $name = __('VamosFalar - Author','wpex') );
    }

    /** @see WP_Widget::widget */
    function widget($args, $instance) {		
        extract( $args );
        $title = apply_filters('widget_title', $instance['title']); ?>
              <?php echo $before_widget; ?>
                  <?php if ( $title )
                        echo $before_title . $title . $after_title; ?>
							<ul class="wpex-widget-author">
                            	
                               
							</ul>
              <?php echo $after_widget; ?>
        <?php
    }

    /** @see WP_Widget::update */
    function update($new_instance, $old_instance) {				
	$instance 				= $old_instance;
	$instance['title'] 		= strip_tags($new_instance['title']);
        return $instance;
    }

    /** @see WP_Widget::form */
    function form($instance) {	
	    $instance = wp_parse_args( (array) $instance, array(
			'title' 	=> '',
		));					
        $title 		= esc_attr($instance['title']);?>
         <p>
          <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'wpex'); ?></label> 
          <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title','wpex'); ?>" type="text" value="<?php echo $title; ?>" />
        </p>
        <?php
    }


} // class wpex_author
// register Author widget
add_action('widgets_init', create_function('', 'return register_widget("wpex_author");'));	
?>