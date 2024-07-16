// src/App.js
import React, { useState } from 'react';
import './css/App.css';
import './css/Inputs.css';
import './css/ImageGallery.css';
import { Button1, Button2, Button3 } from './Buttons';
import { Images } from './Images';
import ImageControls from './ImageControls';
import { Input1, Input2, Input3, SubmitButton } from './Inputs';
import { Cart } from './Cart';
import { Output1 } from './Output1';
import { validateInputs } from './Validate';

export default function App() {
    const [cartItems, setCartItems] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showOutput, setShowOutput] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [selectedImage, setSelectedImage] = useState(1);

    const addToCart = (name, price) => {
        setCartItems([...cartItems, { name, price }]);
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission
        const valid = validateInputs(name, address, phone, setNameError, setAddressError, setPhoneError);

        if (valid) {
            setShowOutput(true);
        } else {
            setShowOutput(false);
        }
    };

    return (
        <>
            {/* Section for the gallery table*/}
            <section className="table-gallery">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {/* Container for the video background */}
                                <div className="video-background">
                                    <video autoPlay muted loop> {/* Autoplay, mute, and loop video */}
                                        <source src="/logo3_animation.mp4" type="video/mp4" /> {/* Video source */}
                                    </video>
                                </div>
                                {/* Images component to display images with rotation and selection */}
                                <Images rotation={rotation} selectedImage={selectedImage} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Section for the controls table */}
            <section className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="3"> {/* Cell spanning 3 columns */}
                                {/* Card container */}
                                <div className="card">
                                    {/* Menu header */}
                                    <div className="menu-header">
                                        <h4>Coming soon</h4> {/* Subheading */}
                                        <h2>Seasonal Flavors</h2> {/* Main heading */}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* ImageControls component to provide controls for image rotation and selection */}
                                <ImageControls
                                    rotation={rotation} // Current rotation value
                                    setRotation={setRotation} // Function to set rotation
                                    selectedImage={selectedImage} // Currently selected image
                                    setSelectedImage={setSelectedImage} // Function to set selected image
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>


            <form onSubmit={handleSubmit}>
                <section className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <img src="/Dlogo.png" alt="Coffee Logo 1" className="Dlogo" />
                            </tr>
                            <tr>
                                <td>
                                    <Input1 name={name} setName={setName} nameError={nameError} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input2 address={address} setAddress={setAddress} addressError={addressError} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input3 phone={phone} setPhone={setPhone} phoneError={phoneError} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <SubmitButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </form>

            {showOutput && <Output1 name={name} address={address} phone={phone} />}
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

            <section className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <div className="card">
                                    <div className="menu-header">
                                        <img src="/coffeeLogo1.png" alt="Coffee Logo 1" className="logo" />
                                        <img src="/Clogo.png" alt="Coffee Logo 1" className="Clogo" />
                                        <img src="/coffeeLogo2.png" alt="Coffee Logo 2" className="logo" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <Button1 addToCart={addToCart} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <Button2 addToCart={addToCart} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <Button3 addToCart={addToCart} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <h4>React Project_V4</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
