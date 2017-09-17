import createReducer from './createReducer'

let reducer

beforeEach(() => {
    reducer = createReducer('users')
})

test('it should return empty object as default state', () => {
    const nextState = reducer()

    expect(nextState).toEqual({})
})

test('it should create new user', () => {
    const state = {1: {id: 1, name: 'Nemanja'}}
    const user = {id: 2, name: 'Jovana'}

    const nextState = reducer(state, {type: 'users.create', payload: user})

    expect(nextState[1]).toBe(state[1])
    expect(nextState[2]).toBe(user)
    expect(nextState).not.toBe(state)
})

test('it should update existing user', () => {
    const state = {1: {id: 1, name: 'Nemanja'}, 2: {id: 2, name: 'Jox'}}
    const user = {id: 2, name: 'Jovana'}

    const nextState = reducer(state, {type: 'users.update', payload: user})

    expect(nextState[1]).toBe(state[1])
    expect(nextState[2]).toBe(user)
    expect(nextState[2]).not.toBe(state[2])
    expect(nextState).not.toBe(state)
})

test('it should delete existing user', () => {
    const state = {1: {id: 1, name: 'Nemanja'}, 2: {id: 2, name: 'Jovana'}}
    const user = {id: 2}

    const nextState = reducer(state, {type: 'users.delete', payload: user})

    expect(nextState[1]).toBe(state[1])
    expect(nextState[2]).toBeUndefined()
    expect(nextState).not.toBe(state)
})
