<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div class="title-bar">
		<div class="title-bar-left">
			<slot name="left"></slot>
			<span class="title-bar-title">
				<slot name="title"></slot>
			</span>
		</div>
		<div class="title-bar-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'title-bar'
};
</script>
