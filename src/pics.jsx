import React from 'react';

const PicsComponent = ({ pix1 }) => {

    return (
        <div className='pics'>
          <div>
            <img src={pix1.urls.small} alt={pix1.meta_description} />
          </div>
          <div>
            <span>{pix1.tags.title}</span>
          </div>
        </div>
    )
}

export default PicsComponent;
