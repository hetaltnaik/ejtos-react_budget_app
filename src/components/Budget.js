import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (value) => {
        if (value > 20000) {
            alert("The budget value cannot exceed " + currency + "20000");
        } else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                    type="number"
                    step="10"
                    max="20000"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}/>
            </span>
        </div>
    );
};
export default Budget;
