import React from 'react';
import './css/Card.css';
import './css/App.css';

export const Output1 = ({ name, address, phone }) => {
    return (
        <div className="card">
            <table>
                <tbody>
                    <tr>
                        <th colspan="3">Delivery Details</th>
                    </tr>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number:</strong></td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
