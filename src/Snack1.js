import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h1>Snack 1</h1>
      <p>This is an awesome snack!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack1;
