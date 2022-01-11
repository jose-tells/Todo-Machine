import React from 'react';
// Styles
import '../assets/styles/LoadingSkeleton.css'

const LoadingSkeleton = () => {
  return (
    <article className='container'>
      <div className='background'>
        <div className='left'>
          {/* <div className='mask'></div> */}
          <div className='mask thick'></div>
          <div className='check'></div>
          <div className='mask thick'></div>
        </div>
        <div className='center'>
          <div className='mask thick'></div>
          <div className='bar'></div>
          <div className='mask thick'></div>
        </div>
        {/* <div className='right'>
          <div className='check'></div>
          <div className='mask'></div>
        </div> */}
      </div>
    </article>
  );
};

export { LoadingSkeleton };