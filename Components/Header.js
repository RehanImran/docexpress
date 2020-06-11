import React, {Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('../Images/DocExpress.png')}/>
                    <Text style={styles.title}>DocExpress</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
container:{
    alignItems:'center',
    justifyContent:'flex-start',
    paddingBottom:30,
},
logo:{
    width:100,
    height:100,
},
title:{
    alignItems:'center',
    color:'#ffffff',
    fontSize: 40,
    fontWeight:'bold',
},
});