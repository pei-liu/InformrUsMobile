import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Card } from './common';

export default (props) => {
  const {
    id,
    firstName,
    lastName,
    party,
    district,
    photoUrl,
    photoFileName, // pxl- REMOVE STUB
    chamber,
    officeAddress,
    officePhone,
    districtOfficeAddress,
    districtOfficePhone,
    capitolOfficeAddress,
    capitolOfficePhone,
    url
  } = props.official;

  // When developing with access to internet just use 'photoUrl'
  const photo = requireLocalImage(photoFileName);

  return (
    <Card>
      <Text>yolo</Text>
      <Image source={photo} style={{ width: 100, height: 100 }} />
    </Card>
  );
};

// pxl - temp method for require local images when developing offline.
const requireLocalImage = (photoFileName) => {
  // react-native doesn't allow dynamically generating paths for passing into 'require'
  switch (photoFileName) {
  case 'emarkey.png':
    return require('../assets/images/emarkey.png');
  case 'ewarren.jpeg':
    return require('../assets/images/ewarren.jpeg');
  case 'kclark.png':
    return require('../assets/images/kclark.png');
  case 'mdecker.png':
    return require('../assets/images/mdecker.png');
  case 'pjehlen.jpg':
    return require('../assets/images/pjehlen.jpg');
  }
};
