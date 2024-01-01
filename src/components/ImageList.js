import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({ images, onImageClick }) => {
  const renderedImages = images.map((image) => {
    return (
      <ImageShow 
        key={image.id} 
        image={image} 
        onImageClick={onImageClick}
      />
    );
  });

  return (
    <div className='
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-4 
    mt-5 
    mb-5
    rounded-lg
    p-5
    '>
      {renderedImages}
    </div>
  );
};

export default ImageList;
