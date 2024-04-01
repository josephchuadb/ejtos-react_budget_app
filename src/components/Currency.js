import React, { useState } from 'react';

const Currency = () => {
    const [setCurrency] = useState('');
    return (
        <div className='currency-dropdown'>
            <div className="input-group mb-3" style={{ marginLeft: '2.8rem' }}>
                <select className="select-dropdown" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="£" name="Pound">Currency (£ Pound)</option>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;
