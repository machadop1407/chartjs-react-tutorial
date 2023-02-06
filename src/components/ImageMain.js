import React from 'react';

import myImage from 'F:/logo.png';

function Images() {
  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img src={myImage} style ={{marginDown:"90px", width:"300px"}} alt="My Image" />
  );
}

export default Images;
