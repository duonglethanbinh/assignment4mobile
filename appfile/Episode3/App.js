import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  pressed = (ev) => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.firstTxt}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontSize: 20 }}>Whatever text we want.</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("./assets/yarn_400x400.jpg")}
      />
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: "https://picsum.photos/300/100" }}
      />
      <Button title="click me" color="cornflowerblue" onPress={this.pressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  firstTxt: {
    fontSize: 36,
  },
});
