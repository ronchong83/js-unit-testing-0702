const { validBraces } = require('./valid_braces')

describe('validBraces', () => {
    it('unmatched braces', () => {
        expect(validBraces('[')).toEqual(false)
    })

    it('one pair of matching braces', () => {
        expect(validBraces('[]')).toEqual(true)
    })

    it('multiple pairs of matching braces', () => {
        expect(validBraces('{}()')).toEqual(true)
    })

    it('nested matching braces', () => {
        expect(validBraces('{{[]}}')).toEqual(true)
    })

    it('should return false when there are multiple pairs of braces with one or many unmatched', () => {
        const output = validBraces('{{[[')
        expect(output).toEqual(false)
    })

    it('should return true when there are no braces', () => {
        const output = validBraces('abc')
        expect(output).toEqual(true)
    })

    it('throw error when input is invalid', () => {
        expect(() => validBraces('')).toThrow('Please provide an input')
    })
})