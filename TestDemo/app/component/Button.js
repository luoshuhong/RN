import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';


export default class Button extends Component {
    onPress = () => {
        const {onPress} = this.props;
    };
    render() {
        const {text} = this.props;
        return (
             <TouchableOpacity 
                 style={styles.button} 
                 onPress={this.onPress}
                >
                <Text style={styles.buttonText}> {text}</Text>
            </TouchableOpacity>
        );
    }  
}

 const styles = StyleSheet.create({
     button: {
        marginTop:50,
        height:40,
        width: 200,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'green',
     },
     buttonText: {
         fontSize:16,
         color:'white'
     },     
 });