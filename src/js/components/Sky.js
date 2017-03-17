import {Entity} from 'aframe-react';
import React from 'react';

export default (props) => {

  console.log('props ', props);

  return (
  <Entity
    geometry={{primitive: 'sphere', radius: 2000}}
    material={{shader: 'flat', src: props.src}}
    scale="1 1 -2"/>
  );
}
