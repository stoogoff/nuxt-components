<template>
	<div
		class="nav-item block w-full px-4 py-3 md:py-0 flex items-center text-xs uppercase font-bold cursor-pointer"
		:class="{ 'disabled': disabled }"
		@click="click"
	>
		<span v-if="icon" class="md:text-white text-gray-500" :class="{ 'disabled': disabled }"><icon-view :icon="icon" /></span>
		<span class="block ml-2"><slot /></span>
	</div>
</template>
<script>
import Vue from 'vue'
import IconView from '../IconView.vue'

export default Vue.component('NavItem', {
	props: {
		icon: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},

	components: {
		'icon-view': IconView,
	},

	methods: {
		click() {
			if(!this.disabled) {
				this.$emit('click')
			}
		},
	}
})
</script>
<style scoped>
.disabled {
	@apply text-gray-800 md:hover:text-gray-800 cursor-default;
}
</style>