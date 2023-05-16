<template>
	<overlay-fade>
		<div class="bg-white p-2 rounded">
			<div class="py-4 px-2 mb-4 border-b border-gray-300">
				<slot />
			</div>
			<div class="flex">
				<button-action block outlined type="warning" @click="$emit('click', false)">Cancel</button-action>
				<button-action block type="success" @click="$emit('click', true)">OK</button-action>
			</div>
		</div>
	</overlay-fade>
</template>
<script>
import Vue from 'vue'
import OverlayFade from './transitions/OverlayFade.vue'

export default Vue.component('ConfirmOverlay', {
	components: {
		'overlay-fade': OverlayFade,
	},
})
</script>