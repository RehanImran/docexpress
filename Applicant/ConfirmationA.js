import React,{Component} from 'react';
import { StyleSheet, Text, View,Button, CheckBox } from 'react-native';
export default class ConfirmationA extends Component {

  
    render(){
         return (
            <View style={styles.container}>
                <Text style={styles.title}>RRegisteration Confirmed. </Text>
                <Text style={styles.title}> Select Login to go back to  </Text>
                <Text style={styles.title}>Login Screen </Text>
                <View style={styles.buttonContainer}>
                <Button  title={'Login'} 
                onPress={()=> this.props.navigation.navigate("Applicant Login")}
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
