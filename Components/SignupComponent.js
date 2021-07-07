import React from 'react'
import { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {Input,Icon,Button} from 'react-native-elements'



class SignComponent extends Component{
    constructor(props){
        super(props)
        this.handleSignIn=this.handleSignIn.bind(this)
        this.state={
            email:'',
            password:'',
            firstname:'',
            lastname:'',
        }
       
        
    }
    

handleSignIn(){
    if(this.state.email != '' && this.state.password != ''){

         fetch("https://abanap.herokuapp.com/sign-up",
            {
                method: 'POST',
                mode:'no-cors',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response=>{
                console.log(response)
                
            })
            .then(data=>console.log(data))
            .catch(err=>{
                alert(err)
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
                onChangeText={value=>this.setState({firstname:value})}
                placeholder='Firstname'
                color='white'
            />
            <Input
                onChangeText={value=>this.setState({lastname:value})}
                placeholder='Lastname'
                color='white'
                
            />
            <Input
                onChangeText={value=>this.setState({email:value})}
                placeholder='Email'
                color='white'
            />

            <Input
                onChangeText={value=>this.setState({password:value})}
                placeholder='Password'
                secureTextEntry={true}
                color='white'
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

export default SignComponent