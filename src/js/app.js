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


// vrride/src/images/bg-vr.jpg
// vrride/src/images/bg-vr.jpg
// <Sky src={ `url(${this.skyImg})`}/>
// https://www.flickr.com/groups/equirectangular/

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
    this.assetPath = 'https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/';
    this.rocketObj = "https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/models/rocket.obj";
    this.rocketMtl = "https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/models/rocket.obj.mtl";

    this.spindle = <a-cylinder color="grey" height="3" radius="0.03" rotation="90 90 0"></a-cylinder>;
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="ground" src="url(https://previews.123rf.com/images/thesupe87/thesupe871011/thesupe87101100033/8204616-Steel-diamond-plate-pattern-You-can-tile-this-seamlessly-as-a-pattern-to-fit-whatever-size-you-need--Stock-Photo.jpg)" />
          <a-mixin id="updown" attribute="rotation" dur="2000" direction="alternate" ease="linear" to="0 0 20" from="0 0 -20" repeat="indefinite" />
          <a-mixin id="rocket-right" scale="0.01 0.01 0.01" rotation="-21.20 180 89.95" position="1.4 -.35 0.5" />
          <a-mixin id="rocket-left" scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5" />
          <a-mixin id="rspindle" scale="0.01 0.01 0.01" rotation="-21.20 0 89.95" position="-1.4 -.35 -0.5" />
        </a-assets>

        <a-plane color="#ffe100" height="20000" width="20000" rotation="-90 0 0"></a-plane>

        <a-obj-model id="lorax" src="https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/models/Lorax_Home.obj" mtl="https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/models/Lorax_Home.obj.mtl" scale="0.02 0.02 0.02" rotation="-90 0 0 " position="0 0 .5"/>


        <Entity position="0 1.5 0">
          <a-animation attribute="rotation" dur="100000" ease="ease-in-out" to="0 2800 0"repeat="indefinite" />

          <Entity>
            <Entity>
            <a-animation mixin="updown" />
            <Camera position="1.58 .35 -0.2" rotation="0 45 0" fov="180"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-right"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-left"/>
            { this.spindle }
            </Entity>
          </Entity>

          <Entity rotation="0 270 0">
            <Entity>
            <a-animation mixin="updown" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-right"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-left"/>
            { this.spindle }
            </Entity>
          </Entity>

          <Entity rotation="0 45 0">
            <Entity>
            <a-animation mixin="updown" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-right"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-left"/>
            { this.spindle }
            </Entity>
          </Entity>

          <Entity rotation="0 135 0">
            <Entity>
            <a-animation mixin="updown" />
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-right"/>
            <a-obj-model src={this.rocketObj} mtl={this.rocketMtl} mixin="rocket-left"/>
            { this.spindle }
            </Entity>
          </Entity>

        </Entity>




        <Sky src="url(https://raw.githubusercontent.com/ianMcHuge/vrride/master/src/images/bg-vr.jpg)"/>



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
