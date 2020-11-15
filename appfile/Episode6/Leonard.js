import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default function Leonard(props) {
  let sty = { ...styles[props.styleObj] };
  sty.color = props.color;
  return <Text style={sty}>I am Leonard</Text>;
}

const styles = StyleSheet.create({
  big: {
    fontSize: 60,
  },
  small: {
    fontSize: 12,
  },
});
