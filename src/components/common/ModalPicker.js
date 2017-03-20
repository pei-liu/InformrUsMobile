import React from 'react';
import { View, Text } from 'react-native';
import ModalPickerOriginal from 'react-native-modal-picker';

const ModalPicker = ({ value, pickerOptions, label, onValueChange, placeholder }) => {
  const { labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <ModalPickerOriginal
        style={{ flex: 2 }}
        data={pickerOptions}
        initValue={value}
        onChange={(option) => { onValueChange(option); }}
      >
        { renderToggle(value, placeholder) }
      </ModalPickerOriginal>
    </View>
  );
};

// For some reason, using <TextInput> isn't working with the <ModalPickerOriginal>.
// As a workaround, emulate the input field with <Text>
const renderToggle = (value, placeholder) => {
  const inputStyle = {
    color: '#000',
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
  };
  const text = value || placeholder;
  if (!value) { inputStyle.color = '#C8C8C8'; }

  return (
    <Text style={inputStyle}>
      { text }
    </Text>
  );
};

let styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { ModalPicker };
