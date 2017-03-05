<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<ul class="accordion" data-accordion>
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'fo-accordion',
	props: [ 'options' ],

	mounted: function() {
		$(this.$el).on('down.zf.accordion', this.handleAccordionChanged);
		$(this.$el).on('up.zf.accordion', this.handleAccordionChanged);

		this.accordion = new Foundation.Accordion($(this.$el), this.options);

		// Set initial state of each accordion
		this.$children.forEach(function(child) {
			child.setState();
		});
	},

	beforeDestroy: function() {
		$(this.$el).off('down.zf.accordion');
		$(this.$el).off('up.zf.accordion');
		this.accordion.destroy();
	},

  	methods: {
		handleAccordionChanged: function(event, target) {
			var accordionItemNode = target.parent()[0];
			var accordionItemComponent = accordionItemNode.__vue__;

			var currentState = accordionItemNode.classList.contains('is-active');

			accordionItemComponent.$emit(event.type);
			accordionItemComponent.$emit('input', currentState);
		}
	}
};
</script>

