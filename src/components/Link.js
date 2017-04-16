import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions} from 'react-native-router-flux';

const Link = ({to, data, text, style, children}) => {
  return(
      <Text
          style={style}
          onPress={
              () => {
                  Actions[to](data)
              }
          }
      >
          {text}
      </Text>
    )
};

export default Link;