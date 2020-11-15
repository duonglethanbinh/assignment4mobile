import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gotFonts: false,
    };
  }
  async componentDidMount() {
    console.log("about to load the fonts");
    await Font.loadAsync({
      open: require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
      anton: require("./assets/fonts/Anton/Anton-Regular.ttf"),
    });
    this.setState({ gotFonts: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 36 }}>Default Font</Text>
        {this.state.gotFonts && (
          <Text style={{ fontFamily: "anton", fontSize: 36 }}>
            This one is Anton
          </Text>
        )}
        {this.state.gotFonts && (
          <Text style={{ fontFamily: "open", fontSize: 36 }}>
            This one is Open Sans
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
