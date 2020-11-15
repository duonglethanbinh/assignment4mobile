import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    hidden={true}
                    barStyle={'light-content'}
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.ic1}>
                    <Text style={{fontWeight:'bold'}}>One</Text>
                </View>
                <View style={styles.icRow}>
                    <View style={styles.ic2}>
                        <Text style={{fontWeight:'bold'}}>Two</Text>
                    </View>
                    <View style={styles.ic3}>
                        <Text style={{fontWeight:'bold'}}>Three</Text>
                    </View>
                </View>
                <View style={styles.ic4}>
                    <Text style={{fontWeight:'bold'}}>Four</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        justifyContent: 'center',   //center, flex-start, flex-end, space-around, space-evenly, space-between
        alignItems: 'stretch'       //center, stretch, flex-start, flex-end
    },
    ic1: {
        backgroundColor: '#c3f',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
            ic2: {
                backgroundColor: '#3cf',
                padding: 20,
                flex: 3,
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
            ic3: {
                backgroundColor: '#f3c',
                padding: 20,
                flex: 1
            },
    ic4: {
        backgroundColor: '#fc3',
        padding: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    icRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#f3f'
    }
});