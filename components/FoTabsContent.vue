<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<div :class="[ 'tabs-content', vertical ? 'vertical' : '']" :data-tabs-content="id">
    	<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'fo-tabs-content',
	props: [ 'id', 'vertical' ]
};
</script>
