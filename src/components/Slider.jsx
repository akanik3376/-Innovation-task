import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = ({ img }) => {
    return (
        <div>
            <AwesomeSlider>
                {img.map((image, index) => (
                    <div key={index} >
                        <img src={image} className='w-full object-cover min-h-full' alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Slider;
