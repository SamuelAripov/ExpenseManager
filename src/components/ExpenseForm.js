import React from 'react'
import DatePicker from 'react-datepicker'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? props.expense.createdAt : new Date().valueOf(),
            calendarFocused: false
        }
    }

    onDescripitionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onTextFormChange = (e) => {
        const textValue = e.target.value
        this.setState(() => ({ note: textValue }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount,
            createdAt: this.state.createdAt,
            note: this.state.note
        })
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.onSubmit}
                >
                    <div className="input-group">
                        <input
                            className='input-group__text'
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescripitionChange}
                            maxlength="30"
                            required
                        />
                        <input
                            className='input-group__text'
                            type="number"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            required
                        />
                        <DatePicker
                            id='datePickers'
                            className="input-group__datePicker"
                            selected={this.state.createdAt}
                            onChange={this.onDateChange}
                            dateFormat="MMMM d, yyyy"
                            onChangeRaw={(e) => e.preventDefault()}
                        />
                    </div>
                    <textarea
                        className="input-group__textarea"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onTextFormChange}
                        maxlength="250"
                    >
                    </textarea>
                    <br></br>
                    <button className='button__submit'>Submit</button>
                </form>
            </div>
        )
    }
}