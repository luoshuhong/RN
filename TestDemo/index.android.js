/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
import { AppRegistry } from 'react-native'; 
import React, {Component} from 'react';

//import MyScrollView from './app/MyScrollView'; //
//import MyScrollVeiwImage from './app/MyScrollVeiwImage'; //图片列表 ScrollVew


//xx start 
{/**
import MyListView from './app/MyListView'; // 汽车列表 （类似通讯录）
import Car from './app/Car.json'; //

class ListViewTest extends Component {
    render() {
        return (
            <MyListView data={Car.data}/>
        );
    }
}
 */}
//xx end
 
//import BleedingEdgeApplication from './app/MyNavigationExperimental'; //
import MyScrollableTableView from './app/MyScrollableTabView';

AppRegistry.registerComponent('TestDemo', () => MyScrollableTableView); 


