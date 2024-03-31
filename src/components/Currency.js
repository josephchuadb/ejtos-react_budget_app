import React, { useState } from 'react';

const Currency = () => {
    const [setCurrency] = useState('');
    return (
        <div className='alert alert-secondary'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <select className="select-dropdown" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="Currency ($ Pound)" name="Pound">Currency ($ Pound)</option>
                    <option value="Dollar" name="Dollar">Currency ($ Dollar)</option>
                    <option defaultValue value="Currency ($ Pound)" name="Pound">£ Pound</option>
                    <option value="Test Euro" name="Test Euro">€ Euro</option>
                    <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;
