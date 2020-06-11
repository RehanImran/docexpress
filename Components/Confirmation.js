import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Confirmation extends Component {
    render(){
         return (
            <View style={styles.container}>
                <Text style={styles.title}>Record has been entered. </Text>
                <Text style={styles.title}> Select HOME to go back </Text>
                <Text style={styles.title}>to home screen </Text>
                <View style={styles.buttonContainer}>
                <Button  title={'HOME'} onPress={()=> this.props.navigation.navigate('Home')}
                    />
                </View>
                <Text style={styles.title}>to return to home screen</Text>

                
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor:'#5a66c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold',
    
  },
  buttonContainer:{
    padding:20
  },
  
});
