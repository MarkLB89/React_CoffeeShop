// src/ImageControls.js
import React from 'react';
// Importing images array from ImageData.js file
import { images } from './ImageData';
// Importing CSS files for styling
import './css/Card.css';
import './css/App.css';

// Defining an array of button names to display on the buttons
const buttonNames = [
    "Sunrise Delight",
    "Velvet Mocha",
    "Autumn Spice Latte",
    "Honey Almond Cappuccino",
    "Vanilla Dream Brew",
    "Cinnamon Swirl Espresso",
    "Maple Pecan Latte",
    "Hazelnut Bliss",
    "Caramel Whisper",
    "Cozy Cocoa Blend"
];

// ImageControls component definition, receives rotation, setRotation, selectedImage, and setSelectedImage as props
const ImageControls = ({ rotation, setRotation, selectedImage, setSelectedImage }) => {

    // Function to handle button click
    const handleButtonClick = (index) => {
        const newRotation = -index * (360 / images.length); // Calculate new rotation (negative to rotate clockwise)
        const currentRotation = rotation % 360; // Get the current rotation modulo 360
        const diff = newRotation - currentRotation; // Calculate the difference between new and current rotation
        // Calculate the shortest rotation path
        const shortestRotation = diff > 180 ? diff - 360 : diff < -180 ? diff + 360 : diff;

        // Update the rotation and selected image
        setRotation(rotation + shortestRotation);
        setSelectedImage(index + 1);
    };

    return (
        // Container div for buttons
        <div className="button-container">
            {/* Mapping over images array to create buttons */}
            {images.map((image, index) => (
                <button
                    key={image.id} // Unique key for each button
                    onClick={() => handleButtonClick(index)} // Handle button click
                    className={image.id === selectedImage ? 'highlight-button' : ''} // Conditionally apply class based on selected image
                >
                    {buttonNames[index]}  {/*Display button name*/}
                </button>
            ))}
        </div>
    );
};

// Exporting ImageControls component as default export
export default ImageControls;
