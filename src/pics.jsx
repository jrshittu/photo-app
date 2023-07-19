import React from 'react';

const PicsComponent = ({ pixs1 }) => {

    return (
        <div className='pics'>
          <div>
            <img src={pixs1.urls.small} alt={pixs1.meta_description} />
          </div>
          <div>
            <span>{pixs1.tags[0].title}</span>
          </div>
        </div>
    )
}

export default PicsComponent;
