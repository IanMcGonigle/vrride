import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import 'aframe-layout-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Model from './components/Model';



// https://www.flickr.com/groups/equirectangular/

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};

    this.skyImg = require('../images/bg-vr.jpg');

    this.rocketObj = require('../models/rocket.obj');
    this.rocketMtl = require('../models/rocket.obj.mtl');

    this.loraxtObj = require('../models/Lorax_Home.obj');
    this.loraxMtl = require('../models/Lorax_Home.obj.mtl');

    console.log('lorax ', this.lorax);
  }

  render () {
    return (
      <Scene>
        <a-assets>

          <a-animation attribute="rotation"dur="2000" ease="linear" to="30 360 0" loop="true" repeat="indefinite" />
        </a-assets>

        <a-plane color="#ffe100" height="20000" width="20000" rotation="-90 0 0"></a-plane>

        <a-obj-model id="lorax" src={this.loraxtObj} mtl={this.loraxMtl} scale="0.03 0.02 0.03" rotation="-90 0 0 " position="0 0 .5"/>


        <Entity position="0 1.5 0">
          <a-animation attribute="rotation" dur="10000" ease="ease-in-out" to="0 1800 0"repeat="indefinite" />

          <Entity>
            <Entity>
            <a-animation attribute="rotation" dur="1000" direction="alternate" ease="linear" to="0 0 35" from="0 0 -35" repeat="indefinite" />
            <Camera position="1.58 .3 " rotation="0 90 0"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 180 89.95" position="1.4 -.35 0.5"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5"/>
            <a-cylinder color="grey" height="3" radius="0.03" rotation="90 90 0"></a-cylinder>
            </Entity>
          </Entity>

          <Entity rotation="0 270 0">
            <Entity>
            <a-animation attribute="rotation" dur="1000" direction="alternate" ease="linear" to="0 0 35" from="0 0 -35" repeat="indefinite" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 180 89.95" position="1.4 -.35 0.5"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5"/>
            <a-cylinder color="grey" height="3" radius="0.03" rotation="90 90 0"></a-cylinder>
            </Entity>
          </Entity>

          <Entity rotation="0 45 0">
            <Entity>
            <a-animation attribute="rotation" dur="1000" direction="alternate" ease="linear" to="0 0 35" from="0 0 -35" repeat="indefinite" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 180 89.95" position="1.4 -.35 0.5"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5"/>
            <a-cylinder color="grey" height="3" radius="0.03" rotation="90 90 0"></a-cylinder>
            </Entity>
          </Entity>

          <Entity rotation="0 135 0">
            <Entity>
            <a-animation attribute="rotation" dur="1000" direction="alternate" ease="linear" to="0 0 35" from="0 0 -35" repeat="indefinite" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 180 89.95" position="1.4 -.35 0.5"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5"/>
            <a-cylinder color="grey" height="3" radius="0.03" rotation="90 90 0"></a-cylinder>
            </Entity>
          </Entity>

        </Entity>



        <Sky src={ `url(${this.skyImg})`}/>



        <Text
          text='DREW LOVES WEBPACK'
          color='#DADADA'
          position='-.75 2 -8'/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
