import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity collada-model={props.src} {...props}/>
  </Entity>
);
