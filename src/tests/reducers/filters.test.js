import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month').valueOf(),
        endDate: moment().endOf('month').valueOf()
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: null,
        endDate: null,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter to "rent"', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' })
    expect(state.text).toEqual('rent')
})

test('should set startDate to 0', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: 0 })
    expect(state.startDate).toBe(0)
})

test('should set endDate to 1', () => {
    const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate: 1})
    expect(state.endDate).toBe(1)
})