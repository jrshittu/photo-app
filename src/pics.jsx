import React from 'react';

const PicsComponent = ({ photo }) => {

    return (
        <div className='pics'>
          <div>
            <img src={photo.urls.small} alt={photo.meta_description} />
          </div>
          <div>
            <span>{photo.tags.title}</span>
          </div>
        </div>
    )
}

export default PicsComponent;
