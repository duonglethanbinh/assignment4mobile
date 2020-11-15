import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lng: null },
      error: null,
    };
  }
  componentDidMount() {
    let timmy = parseInt(Platform.Version);

    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: timmy * 1000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  }
  geoSuccess = (position) => {
    console.log(position.coords.latitude);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude },
    });
  };
  geoFailure = (err) => {
    this.setState({ error: err.message });
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.state.ready && (
          <Text style={styles.big}>Using Geolocation in React Native.</Text>
        )}
        {this.state.error && <Text style={styles.big}>{this.state.error}</Text>}
        {this.state.ready && (
          <Text style={styles.medium}>Got the location</Text>
        )}
        <Thing msg="RULES!" />

        <Text style={styles.medium}>{Platform.OS}</Text>
        <Text style={styles.medium}>{Platform.Version}</Text>
      </View>
    );
  }
}

const Thing = Platform.select({
  ios: (props) => <Text style={styles.big}>IOS {props.msg}</Text>,
  android: (props) => <Text style={styles.big}>ANDROID {props.msg}</Text>,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { backgroundColor: "gold", fontSize: 12 },
      android: { backgroundColor: "#bada55" },
    }),
  },
  big: {
    fontSize: 48,
  },
  medium: {
    fontSize: 36,
  },
});
