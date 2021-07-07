import React from 'react'
import { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {Input,Icon,Button} from 'react-native-elements'



class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.handleSignIn=this.handleSignIn.bind(this)
        this.state={
            email:'',
            password:''
        }
       
        
    }
    

handleSignIn(){
    if(this.state.email != '' && this.state.password != ''){

         fetch("https://abanap.herokuapp.com/login",
            {
                method: 'POST',
                mode:'cors',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response=>{
                return response
                
            })
            .then(data=>console.log(data))
            .catch(err=>{
                console.log(err)
            })
        }else{
            alert('Email Or Password should not be empty')
        }

    }

    render(){
        return (
        <View style={styles.center}>
            <View>
            <Input
                onChangeText={value=>this.setState({email:value})}
                placeholder='Email'
                color='white'
                leftIcon={{ type: 'font-awesome', name: 'envelope',color:'white' }}
            />

            <Input
                onChangeText={value=>this.setState({password:value})}
                placeholder='Password'
                secureTextEntry={true}
                color='white'
                leftIcon={
                <Icon
                name='lock'
                type='font-awesome'
                size={24}
                color='white'
                />
                }
            />

            <Button onPress={()=>this.handleSignIn()} title='Submit' color='white' raised backgroundColor='white'/>
            </View>
            </View>
            )
    }
}

const styles=StyleSheet.create({
welcome:{
    height:30
    
},
  center:{
      flex:1,
      backgroundColor:'#01142F',
      justifyContent:'center',
      textAlign:'center'
      
  }  
})

export default LoginComponent