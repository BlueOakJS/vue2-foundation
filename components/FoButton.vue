<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->
	<button v-if="!to" class="button" type="button"><slot></slot></button>

	<router-link v-else :to="to" class="button"><slot></slot></router-link>
</template>

<script>
export default {
	name: 'fo-button',

	props: [ 'to' ]
};
</script>
