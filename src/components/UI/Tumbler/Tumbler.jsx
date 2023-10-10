import { React, useState } from 'react';
import './tumbler.css';

function Tumbler() {

  return (
    <label>
      <input
        className='invisible-tumbler'
        type="checkbox"
      />
      <span className="visible-tumbler"></span>
    </label>

  );
}

export default Tumbler;
