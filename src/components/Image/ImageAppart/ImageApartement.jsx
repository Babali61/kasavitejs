import React, { useState } from 'react';
import data from '../../../json/data.json'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'



function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { id } = useParams();
    const apartment = data.find(item => item.id === id);
    const images = apartment.pictures
    const previousImage = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    
    return (
        <div>
            <div className='divImageApartment'>
                {images.length > 1 && <i onClick={previousImage} className='fas fa-chevron-left'><FontAwesomeIcon icon={faChevronLeft} /></i>}
                <img className='imageApartment' src={images[currentIndex]} alt={apartment.title} />
                {images.length > 1 && <i onClick={nextImage} className='fas fa-chevron-right'><FontAwesomeIcon icon={faChevronRight} /></i>}
                <div className='imageIndex'>{currentIndex + 1}/{images.length}</div>
            </div>
        </div>
    );
}

export default ImageSlider;