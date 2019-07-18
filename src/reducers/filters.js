//Filter Reducer 
import moment from 'moment'
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
}

export default (filter = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...filter,
                text: action.text
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...filter,
                sortBy: 'date'
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...filter,
                sortBy: 'amount'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...filter,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...filter,
                endDate: action.endDate
            }
        }
        default:
            return filter
    }
}