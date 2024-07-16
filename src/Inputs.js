import React from 'react';
import './css/Card.css';
import './css/App.css';

export const Input1 = ({ name, setName, nameError }) => {
    return (
        <div className="card">
            
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className={nameError ? 'error' : ''}
            />
            {nameError && <p className="error-text">{nameError}</p>}
        </div>
    );
}

export const Input2 = ({ address, setAddress, addressError }) => {
    return (
        <div className="card">
          
            <input 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Address (City, State, Zip)" 
                value={address}
                onChange={(e) => setAddress(e.target.value)} 
                className={addressError ? 'error' : ''}
            />
            {addressError && <p className="error-text">{addressError}</p>}
        </div>
    );
}

export const Input3 = ({ phone, setPhone, phoneError }) => {
    return (
        <div className="card">
            <input 
                type="text" 
                id="phone" 
                name="phone" 
                placeholder="Phone (123) 123-1234" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className={phoneError ? 'error' : ''}
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
        </div>
    );
}

export const SubmitButton = () => {
    return (

            <button type="submit">Submit</button>

    );
}
