/*************************************/
// Blog Archive Hide and Show control
/*************************************/
( function( $ ){
OPNControlTrigger.addHook( 'royal-shop-toggle-control', function( argument, api ){
OPNCustomizerToggles ['royal_shop_blog_post_content'] = [
		    {
				controls: [    
				'royal_shop_blog_expt_length',
				'royal_shop_blog_read_more_txt',
				],
				callback: function(layout){
					if(layout=='full'|| layout=='nocontent'){
					return false;
					}
					return true;
				}
			},	
		];	
	});
})( jQuery );