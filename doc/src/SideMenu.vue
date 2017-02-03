<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

	<ul class="vertical menu">
		<li v-for="component in componentList">
			<router-link :to="{ name: component.name }" data-close="side-menu">{{component.displayName}}</router-link>
		</li>
	</ul>
</template>

<script>
import componentList from './componentList';

export default {
	name: 'side-menu',
	data: function() {
		return {
			componentList
		}
	}
}
</script>
