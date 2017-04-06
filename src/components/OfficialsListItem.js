import React from 'react';
import { View, Text, Image } from 'react-native';

import { Card, CardSection } from './common';

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

  const {
    imageContainerStyle,
    infoContainerStyle,
    imageStyle,
    infoHeaderStyle,
    infoCategoryNameStyle
  } = style;

  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image source={photo} style={imageStyle} />
        </View>
        <View style={infoContainerStyle}>
          <Text style={infoHeaderStyle}>{`${firstName} ${lastName}`}</Text>
          <Text>
            <Text style={infoCategoryNameStyle}>Party: </Text>
            {party}
          </Text>
          <Text>
            <Text style={infoCategoryNameStyle}>Chamber: </Text>
            {chamber}
          </Text>
          { renderDistrict(district) }
        </View>
      </CardSection>
    </Card>
  );
};

const style = {
  imageContainerStyle: {
    paddingRight: 10
  },
  infoContainerStyle: {
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  infoHeaderStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#26517F',
    fontFamily: 'Enriqueta'
  },
  infoCategoryNameStyle: {
    fontWeight: 'bold',
  }
};

function renderDistrict(district) {
  if (district) {
    return (
      <Text>
        <Text style={style.infoCategoryNameStyle}>District: </Text>
        {district}
      </Text>
    );
  }
}

// pxl - temp method for require local images when developing offline.
function requireLocalImage(photoFileName) {
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
