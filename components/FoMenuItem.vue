<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<li :class="{'menu-text': !to}">
		<router-link v-if="to" :to="to"><slot></slot></router-link>
		<slot v-else></slot>
	</li>
</template>

<script>
export default {
	name: 'fo-menu-item',
	props: [ 'to' ]
}
</script>

