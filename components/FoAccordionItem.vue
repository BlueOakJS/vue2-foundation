<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<li class="accordion-item" data-accordion-item>
		<a href="#" class="accordion-title"><slot name="title"></slot></a>
		<div class="accordion-content" data-tab-content>
			<slot name="content"></slot>
		</div>
	</li>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'fo-accordion-item',
	props: [ 'value' ],

	beforeCreate: function() {
    	if (this.$parent.$options._componentTag != 'fo-accordion')
      		Vue.util.warn('fo-accordion-item requires it\'s parent component to be fo-accordion-item', this);
	},

	watch: {
		value: function() {
			this.setState();
		}
	},

  	methods: {
		setState: function() {
			if (this.value && this.value != this.getAccordionState()) {
				var accordionContentNode = $(this.$el.children[1]);
				if (this.value == 'down')
					this.$parent.accordion.down(accordionContentNode);
				else
					this.$parent.accordion.up(accordionContentNode);
			}
		},

		getAccordionState: function() {
			return this.$el.classList.contains('is-active') ? 'down' : 'up';
		}
	}
}
</script>
