import React from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.filters ? this.props.filters.text : '',
            sortBy: this.props.filters ? this.props.filters.sortBy : 'date',
            startDate: this.props.filters ? this.props.filters.startDate : new Date().valueOf(),
            endDate: this.props.filters ? this.props.filters.endDate : new Date().valueOf()
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            placeholder='Search Expenses'
                            className='input-group__text'
                            type='text'
                            value={this.props.filters.text}
                            onChange={(e) => { this.props.setTextFilter(e.target.value) }}>
                        </input>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="input-group__sortBy"
                            onChange={(e) => {
                                e.target.value === 'date' ? this.props.sortByDate('Date') : this.props.sortByAmount('AmountRising')
                            }}>
                            <option
                                className="input-group__sortBy"
                                value="date"
                            >Date
                            </option>
                            <option
                                className="input-group__sortBy"
                                value="amount"
                            >Amount
                            </option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DatePicker
                            className="input-group__datePicker"
                            selected={this.props.filters.startDate}
                            onChange={(e) => this.props.setStartDate(e.valueOf())}
                            dateFormat="MMMM d, yyyy"
                            onChangeRaw={(e) => e.preventDefault()}
                        />
                        <span style={{fontSize:"20px"}}> → </span>
                        <DatePicker
                            className="input-group__datePicker"
                            selected={this.props.filters.endDate}
                            onChange={(e) => this.props.setEndDate(e.valueOf())}
                            dateFormat="MMMM d, yyyy"
                            onChangeRaw={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
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