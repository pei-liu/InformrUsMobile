import React from 'react';
import { View, Text, Image } from 'react-native';

import { Card, CardSection } from './common';

export default (props) => {
  const {
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
  } = style;

  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image source={photo} style={imageStyle} />
        </View>
        <View style={infoContainerStyle}>
          <Text style={infoHeaderStyle}>{`${firstName} ${lastName}`}</Text>
          { renderField('Party', party)}
          { renderField('Chamber', chamber) }
          { renderField('District', district) }
          { renderField('Office Address', officeAddress) }
          { renderField('Office Phone', officePhone) }
          { renderField('District Office Address', districtOfficeAddress)}
          { renderField('District Office Phone', districtOfficePhone)}
          { renderField('Capitol Office Address', capitolOfficeAddress) }
          { renderField('Capitol Office Phone', capitolOfficePhone) }
          { renderField('Website', url) }
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
    flex: 1
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  infoHeaderStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#26517F',
    fontFamily: 'Enriqueta',
    paddingBottom: 3,
    textDecorationLine:'underline'
  },
  infoCategoryNameStyle: {
    fontWeight: 'bold',
  }
};

function renderField(categoryName, categoryVal) {
  if (categoryVal) {
    return (
      <Text>
        <Text style={style.infoCategoryNameStyle}>{categoryName}: </Text>
        {categoryVal}
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
