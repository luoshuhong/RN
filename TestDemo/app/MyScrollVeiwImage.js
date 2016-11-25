import React, { Component } from 'react';
import { Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
 } from 'react-native';


// 图片
var IMAGES = [
 require('../img/favicon.png'),
 require('../img/favicon.png'),
 require('../img/favicon.png'),
 require('../img/favicon.png'),
 require('../img/favicon.png'),
 require('../img/favicon.png')
];

// 名字
var NAMES = [
  'Girls\' Generation',
  'Jessica Jung',
  'Kim Hyo Yeon',
  'Seo Hyun',
  'Soo Young',
  'Sunny'
];

//卡片信息
class Card extends Component {
    constructor(props) {
        super(props);
        const {key,img,num} = {props};
    }

     showToast= (num) => {
        ToastAndroid.show(NAMES[num].toString(), ToastAndroid.SHORT);
    };

    render() {
        return (
        <TouchableOpacity
            style={styles.button}
            onPress={()=>this.showToast(this.props.num)}
        >
            <View style={styles.blank}/>
            <Image
            style={styles.image}
            resizeMode={'stretch'}
            source={this.props.img}/>
            <View style={styles.blank}/>
        </TouchableOpacity>
        );
    }
}

// 批量创建卡片函数
var createCardRow = (img, i) => <Card key={i} img={img} num={i}/>;

export default class RnListView extends Component {
   render() {
       return(
          <ScrollView
            style={styles.container}>
            {IMAGES.map(createCardRow)}
          </ScrollView>
       );
   }
}

//样式
const styles = StyleSheet.create({
    container: {
    flex: 1,
  },

  button: {
    //justifyContent: 'space-between',
    //alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  image: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FF1492',
  },

  blank: {
    width: 10,
  }
});