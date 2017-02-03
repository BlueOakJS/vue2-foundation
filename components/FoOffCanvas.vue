<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div class="off-canvas-wrapper">
		<div class="off-canvas" :class="[sideClass, revealClass]" id="side-menu" data-off-canvas>
			<slot name="menu"></slot>
		</div>
		<div class="off-canvas-content" data-off-canvas-content>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fo-off-canvas',

	props: [ 'side', 'revealBreakpoint', 'options', 'value' ],

	beforeMount: function() {
		this.sideClass = this.side || 'position-left';
		this.revealClass = this.revealBreakpoint || '';

		['reveal', 'open', 'toggle', 'close'].forEach(function(methodName) {
			this[methodName] = function() {
				return this.offCanvasPlugin[methodName].apply(this.offCanvasPlugin, arguments);
			};
		}.bind(this));
	},

	mounted: function() {
		this.offCanvasPlugin = new Foundation.OffCanvas($('#side-menu'), this.options);
		$('#side-menu').on('opened.zf.offcanvas', this.handleOpened);
		$('#side-menu').on('closed.zf.offcanvas', this.handleClosed);

		this.setOffCanvasState();
	},

	beforeDestroy: function() {
		$('#side-menu').off('opened.zf.offcanvas');
		$('#side-menu').off('closed.zf.offcanvas');
		this.offCanvasPlugin.destroy();
	},

	watch: {
		value: function() {
			this.setOffCanvasState();
		}
	},

	methods: {
		reInit: function() {
			this.offCanvasPlugin._init();
		},

		handleOpened: function() {
			this.$emit('opened');
			this.$emit('input', 'open');
		},

		handleClosed: function() {
			this.$emit('closed');
			this.$emit('input', 'closed');
		},

		setOffCanvasState: function() {
			if (this.value == 'open')
				this.offCanvasPlugin.open();
			else if (this.value == 'closed')
				this.offCanvasPlugin.close();
		}
	}
}
</script>
