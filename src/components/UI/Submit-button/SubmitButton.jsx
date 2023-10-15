import { React, useState } from 'react';
import './submit-button.css';

function SubmitButton({children}) {

  return (
    <button className='submit-button'>
      {children}
    </button>
  );
}

export default SubmitButton;
