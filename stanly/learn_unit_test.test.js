


describe('test suite', () => {

    beforeAll(() => {
        console.log('BLAH')
    })

    // setup
    beforeEach(() => {
        console.log('A')
    })

    // teardown
    afterEach(() => {
        console.log('C')
    })

    test('test strawberry', () => {
        console.log('test case strawberry')
        expect(true).toEqual(true) // assert
    })
    test('test banana', () => {
        console.log('test case banana')
        expect(true).toEqual(true) // assert
    })

    // nested test suite
    describe('hey', () => {
        beforeEach(() => {
            console.log('inner before Each')
        })

        test('yo', () => {
            console.log('inner test case')
            expect(true).toEqual(true)
        })
    })

})

// jest testing framework
// jasmine unit testing framework
// junit unit testing framework @Before @After
// pyunit
// xunit