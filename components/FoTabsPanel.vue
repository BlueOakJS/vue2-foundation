<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div class="tabs-panel" :id="id">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'fo-tabs-panel',
		props: [ 'id' ]
	};
</script>


