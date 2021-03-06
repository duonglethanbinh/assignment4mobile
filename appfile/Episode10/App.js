import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default class App extends React.Component {
  render() {
    const data = {
      characters: [
        { id: 123, name: "Sheldon", profession: "Theoretical Physicist" },
        { id: 234, name: "Leonard", profession: "Experimental Physicist" },
        { id: 345, name: "Howard", profession: "Mechanical Engineer" },
        { id: 456, name: "Raj", profession: "Astro-Physicist" },
        { id: 567, name: "Amy", profession: "Neurobiologist" },
        { id: 678, name: "Bernadette", profession: "Microbiologist" },
      ],
    };
    const list = [
      { key: "Sheldon", prof: "Theoretical Physicist" },
      { key: "Leonard", prof: "Experimental Physicist" },
      { key: "Howard", prof: "Mechanical Engineer" },
      { key: "Raj", prof: "Astro-Physicist" },
      { key: "Amy", prof: "Neurobiologist" },
      { key: "Bernadette", prof: "Microbiologist" },
      { key: "Penny", prof: "Actress" },
      { key: "Dr. Gabelhauser", prof: "Dean" },
      { key: "Stuart", prof: "comic store owner" },
      { key: "Barry", prof: "Engineer" },
      { key: "Leslie", prof: "Physicist" },
      { key: "Priya", prof: "Lawyer" },
      { key: "Lucy", prof: "unknown" },
    ];
    return (
      <View style={styles.container}>
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <View style={{ borderBottomColor: "#999", padding: 10 }}>
                <Text
                  style={{ fontSize: 60, fontWeight: "bold", color: "#333" }}
                >
                  {item.key}
                </Text>
                <Text style={{ fontSize: 36, color: "#999" }}>{item.prof}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={{ fontSize: 48, color: "red" }}>
            Sorry. No Characters Available.
          </Text>
        )}
      </View>
    );
  }
}

const Character = (props) => {
  return (
    <View style={{ borderBottomColor: "#999", padding: 10 }}>
      <Text style={{ fontSize: 60, fontWeight: "bold", color: "#333" }}>
        {props.nm}
      </Text>
      <Text style={{ fontSize: 36, color: "#999" }}>{props.prof}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
  },
  listitem: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    borderBottomWidth: 2,
    borderBottomColor: "#999",
  },
});
