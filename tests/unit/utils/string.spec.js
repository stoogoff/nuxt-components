
import {
	id
} from '~/utils/string'

describe('utils/string', () => {
	describe('id', () => {
		it('replaces multiple spaces with a single hyphen', () => {
			expect(id('hello   world')).toEqual('hello-world')
		})

		it('removes leading and trailing whitespace', () => {
			expect(id('  hello world  ')).toEqual('hello-world')
		})

		it('converts uppercase characters to lowercase', () => {
			expect(id('HELLO world')).toEqual('hello-world')
		})

		it('removes non-alphanumeric characters', () => {
			expect(id('!@£$hel$%^&*lo wo)([]{};|,.rld')).toEqual('hello-world')
		})

		it('converts diacritics to unaccented characters', () => {
			expect(id('àáâäèéêëēėęîïíīįìôöòóûüùúū')).toEqual('aaaaeeeeeeeiiiiiioooouuuuu')
		})
	})
})