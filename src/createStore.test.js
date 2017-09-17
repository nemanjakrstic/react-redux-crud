import createStore from './createStore'

const connect = () => () => {}
let store

beforeEach(() => {
    store = createStore(connect, ['users', 'clients'])
})

test('creates store', () => {
    expect(typeof store).toBe('object')
})
