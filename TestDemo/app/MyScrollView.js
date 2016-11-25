/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,
  TextInput,ScrollView,Image,ListView,Navigator,TouchableOpacity } from 'react-native';
import Button from './component/Button'; 

export default class MyScrollView extends Component {

  onPressTitle = () => {
    alert('presed');
  };
  

   render() {
    return (
      <View  style={{flex:1}}> 
        
        {/*
        // <TouchableOpacity style={styles.button}   
          onPress={this.myALert}  
          >
            <Text style={styles.text}> 确定</Text>
        </TouchableOpacity>  
         <Button onPress={this.fetchData} text="提交"/>    
        
         <Button onPress={()=>{alert('hello')}} text="确定"/>
         <ListView
          // initialListSize='5'
          style={styles.list}
          dataSource={this.state.dataSource} 
          renderRow={(rowData) => <Text style={styles.listText}>{rowData}</Text>}
        />  

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Image 
            source={require('./img/favicon.png')}
          />
        </View>
        */} 

        <ScrollView contentContainerStyle={styles.contentContainer}  
          style={{backgroundColor:'antiquewhite'}}
        > 
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={this.onPressTitle}>
                {'this.state.titleText' + '\n\n'}
              </Text>
              <Text numberOfLines={5}>
                {'this.state.bodyText this.state.bodyTextthis.state.bodyTextthis.state.bodyTextthis.state.bodyTextthis.state.bodyTextthis.state.bodyTextthis.state.bodyTextthis.state.bodyText'
                }
              </Text>
            </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, magin:3}}
          />
           
      </ScrollView>
 
      </View>

    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   listText : {
     fontSize:20
   },
   contentContainer: {
      paddingVertical: 20
    },
  list : {
    marginLeft:20,
    marginRight:20,
    backgroundColor:'lavender',
  },

  button: {
    height:40,
    width:100,
    borderRadius:20,
    backgroundColor:'green',
    justifyContent: 'center',
    overflow:'hidden',
  },
  text: {
    textAlign:'center',
    color: 'white',
  },
  bigblue : {
    color: 'blue',
    fontWeight: 'bold',
    fontSize:30,
  },
  red: {
    color: 'red',
  }
});
  