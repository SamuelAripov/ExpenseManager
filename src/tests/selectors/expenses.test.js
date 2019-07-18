import selectExpenses from '../../selectors/expenses'

const expenses = [{
    id: '1',
    description: 'monitor',
    amount: 123.64,
    note: '',
    createdAt: 0
},
{
    id: '2',
    description: 'Gaming monitor',
    amount: 1235.64,
    note: '',
    createdAt: 1000
},
{
    id: '3',
    description: 'Gaming Laptop',
    amount: 789.35,
    note: '',
    createdAt: 2000
}]

test('should filter by text value', () => {
    const filters = {
        text: 'Gaming',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
    const res = selectExpenses(expenses, filters)
    expect(res).toEqual([expenses[1], expenses[2]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: 1000,
        endDate: null
    }
    const res = selectExpenses(expenses, filters)
    expect(res).toEqual([expenses[1], expenses[2]])
})

test('should filter by end Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: 1000
    }
    const res = selectExpenses(expenses, filters)
    expect(res).toEqual([expenses[0], expenses[1]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
    const res = selectExpenses(expenses, filters)
    expect(res).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: null,
        endDate: null
    }
    const res = selectExpenses(expenses, filters)
    expect(res).toEqual([expenses[1],expenses[2],expenses[0]])
})