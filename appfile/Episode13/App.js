import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Spinner } from "native-base";

//yarn add native-base
//npm i --save native-base

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null,
    };
  }
  baseURL = "https://jsonplaceholder.typicode.com";

  getData = (ev) => {
    this.setState({ loaded: false, error: null });
    let url = this.baseURL + "/comments";
    let h = new Headers();
    h.append("Authorization", "Bearer sjdkfhakdkakhkajsdhks");
    h.append("X-Client", "Steve and Friends");

    let req = new Request(url, {
      headers: h,
      method: "GET",
    });

    fetch(req)
      .then((response) => response.json())
      .then(this.showData)
      .catch(this.badStuff);
  };
  showData = (data) => {
    setTimeout(() => {
      this.setState({ loaded: true, data });
      console.log(data);
    }, 3000);
  };
  badStuff = (err) => {
    this.setState({ loaded: true, error: err.message });
  };
  componentDidMount() {
    //this.getData();
    //geolocation -> fetch
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.txt}>Gimme some data!</Text>

          {!this.state.loaded ? (
            <Spinner color="cornflowerblue" />
          ) : (
            <Button title="Get Data" onPress={this.getData} />
          )}
          {this.state.error && (
            <Text style={styles.err}>{this.state.error}</Text>
          )}
          {this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((comment) => (
              <Text key={comment.id} style={styles.txt}>
                {comment.email}
              </Text>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "stretch",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eee",
  },
  txt: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
  },
  err: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
