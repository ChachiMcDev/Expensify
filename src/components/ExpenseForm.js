import React from "react";
import { useState } from 'react';
import dayjs from 'dayjs';
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

//test auto push

//const dateNow = dayjs().valueOf();



export default (props) => {

    const sendIt = useNavigate();

    const [formVals, setFormVals] = useState({
        description: '',
        amount: '',
        note: '',
        createdAt: dayjs().valueOf(),
        error: ''
    });

    // const [startDate, setStartDate] = useState(dateNow);

    const onDescriptionChange = (e) => { setFormVals({ ...formVals, description: e.target.value }) };
    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setFormVals({ ...formVals, amount });
        }
    };
    const onNoteChange = (e) => { setFormVals({ ...formVals, note: e.target.value }) };
    const onDateChange = (createdAt) => {
        if (createdAt) {
            setFormVals({ ...formVals, createdAt: dayjs(createdAt).valueOf() })
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!formVals.description || !formVals.amount) {
            //set error state 'Please provide description and amount.'
            setFormVals({ ...formVals, error: 'Please provide description and amount.' })
        } else {
            //clear error
            setFormVals({ ...formVals, error: '' });
            //submit values to hoc
            props.onSubmit({
                description: formVals.description,
                amount: parseFloat(formVals.amount, 10),
                note: formVals.note,
                createdAt: formVals.createdAt
            });
            sendIt("/");
        }
    }

    return (
        <div>
            {formVals.error && <p>{formVals.error}</p>}
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={formVals.description}
                    onChange={onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={formVals.amount}
                    onChange={onAmountChange}
                />
                <DatePicker
                    selected={formVals.createdAt}
                    onChange={onDateChange}

                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={formVals.note}
                    onChange={onNoteChange}
                />
                <button>Add Expense</button>
            </form>
        </div>
    )
};

