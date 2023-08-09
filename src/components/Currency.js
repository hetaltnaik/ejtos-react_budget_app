import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import './Currency.css';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);

    const setCurrency = (value) => dispatch({
        type: "CHG_CURRENCY",
        payload: value
    });

    return <div className='alert alert-secondary'>
                <label htmlFor="currency">Currency: (
                <select id="currency" onChange={(event) => setCurrency(event.target.value)} value={currency}>
                    <option value="$" name="Dollor">$ Dollor</option>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
                )</label>
           </div>;
}

export default Currency;