<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div class="dropdown-pane" data-dropdown>
	<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'fo-dropdown',

	props: [ 'value', 'options' ],

	mounted: function() {
		$(this.$el).on('show.zf.dropdown', this.handleShow);
		$(this.$el).on('hide.zf.dropdown', this.handleHide);

		this.dropdown = new Foundation.Dropdown($(this.$el), this.options);

		this.setDropdownState();
	},

	beforeDestroy: function() {
		$(this.$el).off('show.zf.dropdown');
		$(this.$el).off('hide.zf.dropdown');

		this.dropdown.destroy();
	},

	watch: {
		value: function() {
			this.setDropdownState();
		}
	},

  	methods: {
		handleShow: function() {
			this.$emit('show');
			this.$emit('input', 'show');
		},

		handleHide: function() {
			this.$emit('hide');
			this.$emit('input', 'hide');
		},

		setDropdownState: function() {
			if (this.value == 'show')
				this.dropdown.open();
			else if (this.value == 'hide')
				this.dropdown.close();
		}
	}
};
</script>
