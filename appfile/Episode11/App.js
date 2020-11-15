import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props); //initial state
    this.state = {
      myval: "abc123",
    };
    console.log("constructor");
  }
  //getDerivedStateFromProps(props, state)
  componentDidMount() {
    console.log("did mount");
    //on initial load
    //geolocation
    //fetch API
    //this.setState() - be cautious about setState here
  }
  changeSomething = (ev) => {
    console.log("changesomething"); //update state here
    this.setState({
      val: Date.now(),
    });
  };
  shouldComponentUpdate(props, state) {
    console.log("should update");
    return true;
  }
  componentDidUpdate() {
    console.log("did update");
    //on future loads
    //  watch out loops
    //this.setState() - be cautious about setState here
  }
  componentWillUnMount() {
    //component is leaving the screen
  }
  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>React Component LifeCycle Methods</Text>
        <Button title="Change Something" onPress={this.changeSomething} />
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
