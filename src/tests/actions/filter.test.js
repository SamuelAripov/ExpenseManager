import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('should change text value to "Rent"', () => {
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})

test('should use default text value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should change sortBy value to "date"', () => {
    const action = sortByDate('date')
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 'date'
    })
})

test('should set sortBy value to "amount"', () => {
    const action = sortByAmount('amount')
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 'amount'
    })
})

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0).valueOf())
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0).valueOf()
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(1).valueOf())
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1).valueOf()
    })
})