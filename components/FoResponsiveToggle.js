/*
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
*/

export default {
	inserted: function(el, binding) {
		$(el).data('responsive-toggle', this.topBarId);
		$(this.toggler).data('toggle', this.topBarId);

		// hideFor, animate
		this.elem = new Foundation.ResponsiveToggle($(el), this.responsiveToggleOptions);
	}
};
