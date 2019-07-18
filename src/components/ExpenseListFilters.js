import React from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
export class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text: this.props.filters ? this.props.filters.text : '',
            sortBy: this.props.filters ? this.props.filters.sortBy : 'date',
            startDate: this.props.filters ? this.props.filters.startDate : new Date().valueOf(),
            endDate: this.props.filters ? this.props.filters.endDate : new Date().valueOf()
        }
    }
    render() {
        return (
            <div>
                <label>Search: <input type='text' value={this.props.filters.text} onChange={(e) => {this.props.setTextFilter(e.target.value)}}></input></label>
                <select onChange={(e) => {
                    e.target.value === 'date' ? this.props.sortByDate('Date') : this.props.sortByAmount('AmountRising')
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <span>Start Date</span>
                <DatePicker
                    selected={this.props.filters.startDate}
                    onChange={(e) => this.props.setStartDate(e.valueOf())}
                    dateFormat="MMMM d, yyyy"
                    onChangeRaw={(e) => e.preventDefault()}
                />
                <span>End Date</span>
                <DatePicker
                    selected={this.props.filters.endDate}
                    onChange={(e) => this.props.setEndDate(e.valueOf())}
                    dateFormat="MMMM d, yyyy"
                    onChangeRaw={(e) => e.preventDefault()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)