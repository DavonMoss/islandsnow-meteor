import React from 'react';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';

export default class IslandSnow extends React.Component {

  render() {
    return (
      <div>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
      </div>
    );
  }
}
