import mapFrom from './mapFrom'

test('creates empty object from empty array', () => {
    expect(mapFrom([])).toEqual({})
})

test('maps the values of array into object keys', () => {
    expect(mapFrom(['foo', 'bar'], (i) => i + '1')).toEqual({foo: 'foo1', 'bar': 'bar1'})
})
