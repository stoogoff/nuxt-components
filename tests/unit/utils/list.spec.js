
import {
	sortByProperty,
	sortByProperties,
	findByProperty,
	indexOfByProperty,
	unique,
} from '~/utils/list'

describe('utils/list', () => {
	describe('sortByProperty', () => {
		const unsorted = [
			{ 'string': 'aa', number: 1 },
			{ 'string': 'ab', number: 4 },
			{ 'string': 'AA', number: 2 },
			{ 'string': 'Aa', number: 0 },
		]

		it('sorts correctly by string property', () => {
			const sorted = unsorted.sort(sortByProperty('string'))

			expect(sorted[0].string).toEqual('AA')
			expect(sorted[1].string).toEqual('Aa')
			expect(sorted[2].string).toEqual('aa')
			expect(sorted[3].string).toEqual('ab')
		})

		it('sorts correctly by numeric property', () => {
			const sorted = unsorted.sort(sortByProperty('number'))

			expect(sorted[0].number).toEqual(0)
			expect(sorted[1].number).toEqual(1)
			expect(sorted[2].number).toEqual(2)
			expect(sorted[3].number).toEqual(4)
		})
	})

	describe('sortByProperties', () => {
		const unsorted = [
			{ 'string': 'ac', number: 1 },
			{ 'string': 'ad', number: 0 },
			{ 'string': 'ab', number: 2 },
			{ 'string': 'aa', number: 3 },
			{ 'string': 'ac', number: 5 },
			{ 'string': 'ab', number: 4 },
			{ 'string': 'aa', number: 1 },
		]

		it('sorts correctly by multiple properties: string then number', () => {
			const sorted = unsorted.sort(sortByProperties('string', 'number'))

			expect(sorted[0].string).toEqual('aa')
			expect(sorted[0].number).toEqual(1)
			expect(sorted[1].string).toEqual('aa')
			expect(sorted[1].number).toEqual(3)

			expect(sorted[2].string).toEqual('ab')
			expect(sorted[2].number).toEqual(2)
			expect(sorted[3].string).toEqual('ab')
			expect(sorted[3].number).toEqual(4)
		})

		it('sorts correctly by multiple properties: number then string', () => {
			const sorted = unsorted.sort(sortByProperties('number', 'string'))

			expect(sorted[0].string).toEqual('ad')
			expect(sorted[0].number).toEqual(0)
			expect(sorted[1].string).toEqual('aa')
			expect(sorted[1].number).toEqual(1)

			expect(sorted[2].string).toEqual('ac')
			expect(sorted[2].number).toEqual(1)
			expect(sorted[3].string).toEqual('ab')
			expect(sorted[3].number).toEqual(2)
		})
	})

	describe('findByProperty', () => {
		const data = [
			{ 'string': 'ac', number: 1 },
			{ 'string': 'ad', number: 0 },
			{ 'string': 'ab', number: 2 },
			{ 'string': 'aa', number: 3 },
			{ 'string': 'ac', number: 5 },
			{ 'string': 'ab', number: 4 },
			{ 'string': 'aa', number: 1 },
		]

		it('returns the first object with a matching property', () => {
			const result = data.find(findByProperty('string', 'ab'))

			expect(result).not.toEqual(undefined)
			expect(result.string).toEqual('ab')
			expect(result.number).toEqual(2)
		})

		it('returns undefined if a property doesn\'t match', () => {
			const result = data.find(findByProperty('string', 'zz'))

			expect(result).toEqual(undefined)
		})

		it('returns an array of objects when filtered', () => {
			const result = data.filter(findByProperty('string', 'aa'))

			expect(result).toHaveLength(2)
			expect(result).toContainEqual(data[3])
			expect(result).toContainEqual(data[6])
		})
	})

	describe('indexOfByProperty', () => {
		const data = [
			{ 'string': 'ac' },
			{ 'string': 'ad' },
			{ 'string': 'ab' },
			{ 'string': 'aa' },
			{ 'string': 'ac' },
			{ 'string': 'ab' },
			{ 'string': 'aa' },
		]

		it('returns the first index', () => {
			const result = indexOfByProperty(data, 'string', 'aa')

			expect(result).toEqual(3)
		})

		it('returns -1 if not found', () => {
			const result = indexOfByProperty(data, 'string', 'ZZ')

			expect(result).toEqual(-1)
		})
	})

	describe('unique', () => {
		it('unique', () => {
			const data = ['aa', 'aa', 'ab']
			const result = unique(data)

			expect(result).toHaveLength(2)
			expect(result[0]).toEqual('aa')
			expect(result[1]).toEqual('ab')
		})
	})
})
