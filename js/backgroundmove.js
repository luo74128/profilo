// JavaScript Document
/********************
* @author Leo.liu
********************/

(function($){
		 
	$.fn.moveBackground = function(settings){    
           //設定初始值 
			settings = jQuery.extend({
				 lFollowX : 0,
               lFollowY : 0,
			     x : 0,
			     y : 0,
                friction : 1/30
            }, settings);
            return this.each(function() {			   		
				$.fn.moveing($(this),settings);//執行內部Function	
            });
        };
		//內部Function
	$.fn.moveing = function($this,settings){
		settings.x += (settings.lFollowX - settings.x) * settings.friction;
		settings.y += (settings.lFollowY - settings.y) * settings.friction;
		translate = 'translate(' + settings.x + 'px, ' + settings.y+ 'px) scale(1.1)';

		$this.css({ //$('.bg').csss({});
		  '-webit-transform': translate,
		  '-moz-transform': translate,
		  'transform': translate
		});
		
		$(window).on('mousemove click', function(e) {
					var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
					var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
					settings.lFollowX = (20 * lMouseX) / 100; 
					settings.lFollowY = (10 * lMouseY) / 100; 
					window.requestAnimationFrame($.fn.moveing($this,settings)); //連續更新動畫
					
		});
		
		
	};
	 
})(jQuery);
