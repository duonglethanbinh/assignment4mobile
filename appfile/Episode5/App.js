import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            num: 0,
            max: 0,
            ready: false
        }
    }
    
    changeNum = (txt) => {
        let max = parseInt(txt);
        let ready = false;
        
        if( !isNaN(max) && max > 0){
            //do have a number
            ready = !ready;
            this.setState({max, ready});
        }else{
            this.setState({ready, max:0});
            //this.state.max = 34;  //NO DO THIS
        }
    }
    
    pickNum = (ev) => {
        let num = Math.floor(Math.random() * this.state.max) + 1;
        this.setState({num});
    }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.one}>
                <TextInput 
                    defaultValue={this.state.max.toString(10)}
                    keyboardType="number-pad"
                    maxLength={3}
                    onChangeText={this.changeNum}
                    style={styles.input}/>
            </View>
                
            <View style={styles.half}>
                    <Text style={styles.label}>{this.state.num}</Text>
            </View>
                    
            <View style={styles.half}>
                    {this.state.ready && (
                     <Button title="Pick Number"
                            color="cornflowerblue"
                            onPress={this.pickNum} />
                     )}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 20
    },
    input: {
        fontSize: 36, 
        color: 'white', 
        paddingTop: 5,
        paddingBottom: 0,
        paddingStart: 10
    },
    label: {
        fontSize: 72,
        color: 'white',
        fontWeight: 'bold'
    },
    one: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'stretch' ,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    half: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});