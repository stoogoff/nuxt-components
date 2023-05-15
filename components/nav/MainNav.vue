<template>
	<nav-bar v-bind="$attrs">
		<template #title>
			<nuxt-link to="/"><slot /></nuxt-link>
		</template>
		<template #buttons>
			<nav-button icon="ellipsis" @click="toggleNavbar()" />
		</template>
		<transition name="fade">
			<div
				v-if="navbarOpen"
				class="mobile-menu absolute top-14 left-4 right-4 md:hidden block rounded shadow-lg"
			>
				<menu-list :menu-items="menuItems" />
			</div>
		</transition>
		<div class="desktop-menu hidden md:flex flex-grow items-center bg-transparent shadow-none">
			<menu-list :menu-items="menuItems" />
		</div>
	</nav-bar>
</template>
<script>
import Vue from 'vue'

export default Vue.component('MainNav', {
	props: {
		menuItems: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			navbarOpen: false,
			suppressClose: false,
		}
	},

	mounted() {
		document.addEventListener('click', () => {
			Vue.nextTick(() => {
				if(!this.suppressClose) {
					this.navbarOpen = false
				}

				this.suppressClose = false
			})
		})
	},

	methods: {
		toggleNavbar() {
			this.navbarOpen = !this.navbarOpen

			if(this.navbarOpen !== false) {
				this.suppressClose = true
			}
		},
	},
})
</script>
<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>