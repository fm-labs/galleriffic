/**
 * jQuery Opacity Rollover plugin
 *
 * Copyright (c) 2009 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {
	var defaults = {
		mouseOutOpacity:   0.67,
		mouseOverOpacity:  1.0,
		fadeSpeed:		   'fast',
		exemptionSelector: '.selected'
	};

	$.fn.opacityrollover = function(settings) {
		// Initialize the effect
		$.extend(this, defaults, settings);

		var config = this;

		function animateMe(opacity, element) {
			var $target = $(element);

			if (config.exemptionSelector)
				$target = $target.not(config.exemptionSelector);

			$target.animate({ opacity: opacity }, config.fadeSpeed);
		}

		this.css('opacity', this.mouseOutOpacity)
			.hover(
				function() {
					animateMe(config.mouseOverOpacity, this);
				},
				function() {
					animateMe(config.mouseOutOpacity, this);
				});

		return this;
	};
})(jQuery);
