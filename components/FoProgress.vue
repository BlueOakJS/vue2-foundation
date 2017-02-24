<template>
<!--
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
-->

	<div class="progress" role="progressbar"
		 :aria-valuenow="ariaValuenow"
		 :aria-valuemin="ariaValuemin"
		 :aria-valuetext="ariaValuetext"
		 :aria-valuemax="ariaValuemax">
	  <div class="progress-meter" :style="{width: value / (max-min) * 100 + '%'}">
		<p class="progress-meter-text"><slot></slot></p>
	  </div>
	</div>
</template>

<script>
export default {
	name: 'fo-progress',

	props: {
		value: {
			type: [String, Number],
			required: true
		},
		min: {
			type: [String, Number],
			default: 0
		},
		max: {
			type: [String, Number],
			default: 100
		},
		ariaValuenow: {
			type: String,
			default: function() {
				return String(this.value);
			}
		},
		ariaValuemin: {
			type: String,
			default: function() {
				return String(this.min);
			}
		},
		ariaValuemax: {
			type: String,
			default: function() {
				return String(this.max);
			}
		},
		ariaValuetext: {
			type: String
		}
	}
};
</script>
