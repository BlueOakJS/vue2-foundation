<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div class="top-bar">
		<div class="top-bar-title">
			<slot name="title"></slot>
		</div>
		<div>
			<div class="top-bar-left">
				<slot name="left"></slot>
			</div>
			<div class="top-bar-right">
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fo-top-bar'
};
</script>
