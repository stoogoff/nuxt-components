<template>
	<form-field :label="label" :message="message" :error="error" v-slot="field">
		<textarea
			:id="field.id"
			:value="value"
			type="text"
			:class="`font-sans text-sm relative rounded border-2 shadow outline-none w-full px-3 py-3 ${inputClass}`"
			:disabled="disabled"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
		/>
	</form-field>
</template>
<script>
import Vue from 'vue'
import FormField from './FormField.vue'

export default Vue.component('TextArea', {
	props: {
		value: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			default: '',
		},
		error: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: '',
		},
	},

	components: {
		'form-field': FormField,
	},

	computed: {
		inputClass() {
			let classList = ['input']

			if(this.disabled) {
				classList.push('disabled')
			}

			if(this.error) {
				classList.push('warning')
			}

			return classList.join(' ')
		},
	},
})

</script>
