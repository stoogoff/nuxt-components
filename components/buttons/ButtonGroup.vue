<template>
	<div class="btn-group flex">
		<slot />
	</div>
</template>
<script>
import Vue from 'vue'

export default Vue.component('ButtonGroup', {})

</script>
<style scoped>

.btn-group .btn {
	@apply rounded-none mr-0;
}
.btn-group .btn:first-child {
	@apply rounded-l-md;
}
.btn-group .btn:last-child {
	@apply rounded-r-md;
}

</style>
