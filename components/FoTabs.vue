<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<ul :class="[ 'tabs', vertical ? 'vertical' : '']" data-tabs>
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'fo-tabs',
	props: [ 'value', 'options', 'vertical' ],

	mounted: function() {
		$(this.$el).on('change.zf.tabs', this.handleTabChanged);

		this.tabs = new Foundation.Tabs($(this.$el), this.options);

		// set default active tab
		if (!this.getActiveTab() && this.value)
			this.tabs.selectTab(this.value);
	},

	beforeDestroy: function() {
		$(this.$el).off('change.zf.tabs');
		this.tabs.destroy();
	},

	watch: {
		value: function(newTab) {
			this.tabs.selectTab(newTab);
		}
	},

  	methods: {
		handleTabChanged: function(event) {
			var activeTab = this.getActiveTab();
			if (this.value !== activeTab)
				this.$emit('input', activeTab);
		},

		getActiveTab: function() {
			var activePanel = this.$el.querySelector('.tabs-title.is-active');
			return activePanel && activePanel.firstChild.hash;
		}
	}
};
</script>
