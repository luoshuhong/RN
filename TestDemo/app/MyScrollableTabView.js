import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    PixelRatio
} from 'react-native'; 

import ScrollableTabView, {
	DefaultTabBar,
	ScrollableTabBar
} from 'react-native-scrollable-tab-view';
 

export default class MyScrollableTableView extends Component {
 

   render() {
    return (
       <ScrollableTabView
        onChangeTab={(obj) => {
          alert('index:' + obj.i);
        }}
        tabBarBackgroundColor={'green'} //背景色
        tabBarPosition={'overlayBottom'} 
        initialPage={1}                         //初始显示第几个tab 0开始
        renderTabBar={() => <ScrollableTabBar/>} //ScrollableTabBar DefaultTabBar
        >

        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab3'> 
            <Image
                source={require('../img/favicon.png')} 
                style={styles.rowImageStyle} 
                resizeMode={'contain'} //
            />
        </Text>
        
      </ScrollableTabView>

    )
  }
}

// 设置样式
const styles = StyleSheet.create({ 
    outerViewStyle: {
        //占满窗口
        flex: 1
    },
     rowImageStyle: {
        width: 70,
        height: 70,
    }

});

