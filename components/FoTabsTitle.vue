<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<li class="tabs-title">
		<a :href="href">
			<slot></slot>
		</a>
	</li>
</template>

<script>
// BUGBUG Will is-active get passed through?
export default {
	name: 'fo-tabs-title',
	props: [ 'href' ]
}
</script>
