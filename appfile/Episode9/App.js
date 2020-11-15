import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
    
    render() {
        const data = {characters: [
            {id:123, name:'Sheldon', profession:'Theoretical Physicist'},
            {id:234, name:'Leonard', profession:'Experimental Physicist'},
            {id:345, name:'Howard', profession:'Mechanical Engineer'},
            {id:456, name:'Raj', profession:'Astro-Physicist'},
            {id:567, name:'Amy', profession:'Neurobiologist'},
            {id:678, name:'Bernadette', profession:'Microbiologist'},
        ]};
        return (
            <ScrollView style={styles.container}>
            { data.characters.length > 0 ? 
                data.characters.map( character => (
                    <Character key={character.id} 
                            nm={character.name} 
                            prof={character.profession} />
                )):
                <Text style={{fontSize: 48, color:'red'}}>
                    Sorry. No Characters Available.
                </Text>
            }
            </ScrollView>
        );
    }
}

const Character = (props) => {
    return (
        <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:60, fontWeight:'bold', color:'#333'}}>
                {props.nm}
            </Text>
            <Text style={{fontSize:36, color:'#999'}}>
                {props.prof}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingBottom: 20
  },
});