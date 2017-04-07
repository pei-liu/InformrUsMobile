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
    chamber,
    officeAddress,
    officePhone,
    districtOfficeAddress,
    districtOfficePhone,
    capitolOfficeAddress,
    capitolOfficePhone,
    url
  } = props.official;

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
          <Image source={{ uri: photoUrl }} style={imageStyle} />
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
    textDecorationLine: 'underline'
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
