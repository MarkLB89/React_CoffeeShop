import React from 'react';
import './css/Cart.css';
export const Cart = ({ cartItems, removeFromCart }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
        }, 0).toFixed(2);
    };

    return (
        <section className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Cart</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => removeFromCart(index)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total:</strong></td>
                        <td><strong>${calculateTotal()}</strong></td>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
};
