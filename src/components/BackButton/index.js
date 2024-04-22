import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Wrapper } from './BackButton.styles';

const BackButton = ({ destination = '/' }) => {
  return (
    <Wrapper>
    <div className='back-button'>
      <Link to={destination} className='back-link'>
        <BsArrowLeft className='back-icon' />
      </Link>
    </div>
    </Wrapper>
  );
};

export default BackButton;
