/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// Importing images array from ImageData.js file
import { images } from './ImageData';
// Importing CSS files for styling
import './css/Card.css';
import './css/App.css';
// Images component definition, receives rotation and selectedImage as props
export const Images = ({ rotation, selectedImage }) => {
    return (
        // Container div for images, applying rotation transformation to the entire container
        <div className="image-container" style={{ transform: `rotate(${rotation}deg)` }}>
            {/* Mapping over images array to create individual image elements */}
            {images.map((image, index) => (
                <div
                    key={image.id}  // Unique key for each child element
                    className="image-wrapper"
                    // Applying rotation and translation transformations to position images in a circular layout
                    style={{ transform: `rotate(${(360 / images.length) * index}deg) translate(150px) rotate(-${(360 / images.length) * index + rotation}deg)` }}
                >
                    <img
                        id={`image-${image.id}`}  // Setting a unique id for each image
                        src={image.src}  // Source URL of the image
                        alt={`Gallery image ${image.id}`}  // Alt text for accessibility
                        // Conditionally applying class based on whether the image is selected
                        className={image.id === selectedImage ? 'highlight' : 'small'}
                    />
                </div>
            ))}
        </div>
    );
};
