<template>
	<div
		class="checkbox flex cursor-pointer"
		:class="{
			'disabled': disabled,
		}"
		@click="toggle"
	>
		<icon-view :icon="icon" />
		<span class="ml-2 checkbox-label">{{ label }}</span>
	</div>
</template>
<script>
import Vue from 'vue'
import IconView from '../IconView.vue'

export default Vue.component('CheckBox', {
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	components: {
		'icon-view': IconView,
	},

	computed: {
		icon() {
			return this.value ? 'checkbox-checked' : 'checkbox-unchecked'
		}
	},

	methods: {
		toggle() {
			if(this.disabled) return

			this.$emit('input', !this.value)
		},
	},
})
</script>