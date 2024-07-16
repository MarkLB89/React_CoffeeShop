import React, { useState } from 'react';
import './css/Card.css';
import './css/App.css';

export const Button1 = ({ addToCart }) => {
    const [Info, setInfo] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleClick1 = () => {
        setInfo({
            name: 'Crema Espresso',
            description: 'Espresso is a full-flavored, concentrated form of coffee that is served in shots. It is the base for many other coffee drinks like lattes, cappuccinos, macchiatos, mochas, and Americanos. Typically, it is made by forcing hot water through finely-ground coffee beans, resulting in a rich and aromatic brew with a layer of crema.',
            prices: {
                small: '$2.50',
                medium: '$3.00',
                large: '$3.50'
            }
        });
        setShowInfo(true);
    };

    const handleClose1 = () => {
        setShowInfo(false);
    };

    return (
        <div className="card">
            <button onClick={handleClick1}>Espresso</button>
            {showInfo && (
                <>
                    <div className="name_card">
                        <p className="fade-in"><strong>{Info.name}</strong></p>
                        <button className="close-btn" onClick={handleClose1}>−</button>
                    </div>
                    <p className="fade-in">{Info.description}</p>
                    <p className="fade-in"><strong>Prices:</strong></p>
                    <p className="fade-in">Small: {Info.prices.small} <button onClick={() => addToCart(Info.name, Info.prices.small)}>Add</button></p>
                    <p className="fade-in">Medium: {Info.prices.medium} <button onClick={() => addToCart(Info.name, Info.prices.medium)}>Add</button></p>
                    <p className="fade-in">Large: {Info.prices.large} <button onClick={() => addToCart(Info.name, Info.prices.large)}>Add</button></p>
                </>
            )}
        </div>
    );
};

export const Button2 = ({ addToCart }) => {
    const [Info, setInfo] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleClick2 = () => {
        setInfo({
            name: 'Mild Latte',
            description: 'A latte is a popular coffee drink made with espresso and steamed milk. The milk is lightly frothed to create a creamy texture, and the drink is often topped with a small amount of foam. Lattes can be flavored with syrups such as vanilla, caramel, or hazelnut. They are typically served in larger cups and are a favorite among those who enjoy a milder coffee taste.',
            prices: {
                small: '$3.00',
                medium: '$3.50',
                large: '$4.00'
            }
        });
        setShowInfo(true);
    };

    const handleClose2 = () => {
        setShowInfo(false);
    };

    return (
        <div className="card">
            <button onClick={handleClick2}>Latte </button>
            {showInfo && (
                <>
                    <div className="name_card">
                        <p className="fade-in"><strong>{Info.name}</strong></p>
                        <button className="close-btn" onClick={handleClose2}>−</button>
                    </div>
                    <p className="fade-in">{Info.description}</p>
                    <p className="fade-in"><strong>Prices:</strong></p>
                    <p className="fade-in">Small: {Info.prices.small} <button onClick={() => addToCart(Info.name, Info.prices.small)}>Add</button></p>
                    <p className="fade-in">Medium: {Info.prices.medium} <button onClick={() => addToCart(Info.name, Info.prices.medium)}>Add</button></p>
                    <p className="fade-in">Large: {Info.prices.large} <button onClick={() => addToCart(Info.name, Info.prices.large)}>Add</button></p>
                </>
            )}
        </div>
    );
};

export const Button3 = ({ addToCart }) => {
    const [Info, setInfo] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleClick3 = () => {
        setInfo({
            name: 'Classic Cappuccino',
            description: 'A cappuccino is a classic coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam. It is known for its rich flavor and thick, creamy texture. The foam on top can be dusted with cocoa powder, cinnamon, or nutmeg for added flavor. Cappuccinos are often enjoyed in smaller cups and are a staple in many coffee shops around the world.',
            prices: {
                small: '$2.75',
                medium: '$3.25',
                large: '$3.75'
            }
        });
        setShowInfo(true);
    };

    const handleClose3 = () => {
        setShowInfo(false);
    };

    return (
        <div className="card">
            <button onClick={handleClick3}>Cappuccino</button>
            {showInfo && (
                <>
                    <div className="name_card">
                        <p className="fade-in"><strong>{Info.name}</strong></p>
                        <button className="close-btn" onClick={handleClose3}>−</button>
                    </div>
                    <p className="fade-in">{Info.description}</p>
                    <p className="fade-in"><strong>Prices:</strong></p>
                    <p className="fade-in">Small: {Info.prices.small} <button onClick={() => addToCart(Info.name, Info.prices.small)}>Add</button></p>
                    <p className="fade-in">Medium: {Info.prices.medium} <button onClick={() => addToCart(Info.name, Info.prices.medium)}>Add</button></p>
                    <p className="fade-in">Large: {Info.prices.large} <button onClick={() => addToCart(Info.name, Info.prices.large)}>Add</button></p>
                </>
            )}
        </div>
    );
};
