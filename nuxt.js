import { join } from 'path'

const components = [
	'components',
	'components/buttons',
	'components/files',
	'components/forms',
	'components/nav',
	'components/tabs',
	'components/transitions',
]

export default function() {
	this.nuxt.hook('components:dirs', dirs => {
		componens.forEach(comp => {
			dirs.push({
				path: join(__dirname, comp),
				prefix: 'we',
			})
		})
	})
}
