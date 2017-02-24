<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div v-if="type == undefined && align == 'center'" :class="{'menu-centered': align == 'center'}">
		<ul v-if="!isSubmenu" class="menu" :class="{dropdown: type == 'dropdown', vertical: isVerticalMenu, 'align-right': align == 'right', 'align-center': align == 'center'}" v-bind="dataAttribute">
			<slot></slot>
		</ul>
		<li v-else>
			<router-link v-if="to" :to="to">{{title}}<slot name="title"></slot></router-link>
			<a v-else>{{title}}<slot name="title"></slot></a>
			<ul class="menu" :class="{nested: isSubmenu, vertical: isVerticalMenu}">
				<slot></slot>
			</ul>
		</li>
	</div>

	<ul v-else-if="!isSubmenu" class="menu" :class="{dropdown: type == 'dropdown', vertical: isVerticalMenu, 'align-right': align == 'right', 'align-center': align == 'center'}" v-bind="dataAttribute">
		<slot></slot>
	</ul>

	<li v-else>
		<router-link v-if="to" :to="to">{{title}}<slot name="title"></slot></router-link>
		<a v-else>{{title}}<slot name="title"></slot></a>
		<ul class="menu" :class="{nested: isSubmenu, vertical: isVerticalMenu}">
			<slot></slot>
		</ul>
	</li>
</template>

<script>

var dataAttribute = {
	dropdown: 'data-dropdown-menu',
	drilldown: 'data-drilldown',
	accordion: 'data-accordion-menu'
};

export default {
	name: 'fo-menu',
	props: [ 'options', 'type', 'to', 'title', 'value', 'align', 'vertical' ],

	data: function() {
		return {
			menuType: null
		};
	},

	created: function() {
		this.menuType = this.type || this.$parent.menuType;
	},

	mounted: function() {
		this.createMenu();
	},

	watch: {
		value: function() {
			this.setState();
		},

		options: {
			deep: true,
			handler: function() {
				this.destroyMenu();
				this.createMenu();
			}
		},

		type: function() {
			this.destroyMenu();
			this.createMenu();
		}
	},

	beforeDestroy: function() {
		this.destroyMenu();
	},

	methods: {
		setChildrenState: function() {
			this.setState();

			// Set initial state of each child menu
			this.$children.forEach(function(child) {
				if (child.$options._componentTag == this.$options._componentTag)
					child.setChildrenState();
			}.bind(this));
		},

		setState: function() {
			if (this.value && this.value != this.getMenuState()) {
				var menuContentNode = $(this.$el.children[1]);
				switch (this.menuType) {
					case 'accordion':
						if (this.value == 'show')
							this.foundationMenu.down(menuContentNode);
						else
							this.foundationMenu.up(menuContentNode);
						break;

					case 'drilldown':
						if (this.value == 'show')
							this.foundationMenu._show($(this.$el));
						else
							this.foundationMenu._hide($(this.$el.children[1]));
						break;

					case 'dropdown':
						if (this.value == 'show')
							this.foundationMenu._show($(this.$el.children[1]));
						else
							this.foundationMenu._hide($(this.$el));
						break;
				}
			}
		},

		getMenuState: function() {
			if (this.menuType == 'dropdown')
				return this.$el.classList.contains('is-active') ? 'show' : 'hide';
			else if (this.menuType == 'drilldown' || this.menuType == 'accordion')
				return this.$el.children[1].classList.contains('is-active') ? 'show' : 'hide';
		},

		handleDrilldownEvent: function(event, target) {
			if (target) {
				var menuNode;
				if (event.type == 'hide')
					menuNode = target.parent()[0];
				else
					menuNode = target[0];
				var menuComponent = menuNode.__vue__;

				// Normalize the event name to 'show'.
				if (event.type == 'open')
					event.type = 'show';

				menuComponent.$emit(event.type);
				menuComponent.$emit('input', event.type);
			} else {
				this.$emit(event.type);
			}
		},

		handleDropdownEvent: function(event, target) {
			var menuNode;
			if (event.type == 'show')
				menuNode = target.parent()[0];
			else
				menuNode = target[0];
			var menuComponent = menuNode.__vue__;

			menuComponent.$emit(event.type);
			menuComponent.$emit('input', event.type);
		},

		handleAccordionEvent: function(event, target) {
			var menuNode = target.parent()[0];
			var menuComponent = menuNode.__vue__;

			// Normalize the event names to 'show' and 'hide'.
			if (event.type == 'down')
				event.type = 'show';
			if (event.type == 'up')
				event.type = 'hide';

			menuComponent.$emit(event.type);
			menuComponent.$emit('input', event.type);
		},

		createMenu: function() {
			if (!this.isSubmenu && (this.type == 'dropdown' || this.type == 'drilldown' || this.type == 'accordion')) {
				$(this.$el).on('show.zf.dropdownmenu', this.handleDropdownEvent);
				$(this.$el).on('hide.zf.dropdownmenu', this.handleDropdownEvent);
				$(this.$el).on('scrollme.zf.drilldown', this.handleDrilldownEvent);
				$(this.$el).on('open.zf.drilldown', this.handleDrilldownEvent);
				$(this.$el).on('hide.zf.drilldown', this.handleDrilldownEvent);
				$(this.$el).on('down.zf.accordionMenu', this.handleAccordionEvent);
				$(this.$el).on('up.zf.accordionMenu', this.handleAccordionEvent);

				switch(this.type) {
				case 'dropdown':
					this.menu = new Foundation.DropdownMenu($(this.$el), this.options);
					break;
				case 'drilldown':
					this.menu = new Foundation.Drilldown($(this.$el), this.options);
					break;
				case 'accordion':
					this.menu = new Foundation.AccordionMenu($(this.$el), this.options);
					break;
				}

				// Set initial state of each child menu
				this.setChildrenState();
			} else {
				this.menu = null;
			}
		},

		destroyMenu: function() {
			if (!this.isSubmenu && (this.type == 'dropdown' || this.type == 'drilldown' || this.type == 'accordion')) {
				$(this.$el).off('show.zf.dropdownmenu');
				$(this.$el).off('hide.zf.dropdownmenu');
				$(this.$el).off('scrollme.zf.drilldown');
				$(this.$el).off('open.zf.drilldown');
				$(this.$el).off('hide.zf.drilldown');
				$(this.$el).off('down.zf.accordionMenu');
				$(this.$el).off('up.zf.accordionMenu');

				this.menu.destroy();
				this.menu = null;
			}
		}
	},

	computed: {
		classForMenu: function() {
			return this.type == 'dropdown' ? 'dropdown' : '';
		},

		dataAttribute: function() {
			var obj = {};
			if (this.type)
				obj[dataAttribute[this.type]] = true;
			return obj;
		},

		isSubmenu: function() {
    		return this.$parent.$options._componentTag == this.$options._componentTag;
		},

		foundationMenu: function() {
			return this.menu || this.$parent.foundationMenu;
		},

		isVerticalMenu: function() {
			return this.menuType == 'accordion' || this.vertical != undefined;
		}
	}
};
</script>

