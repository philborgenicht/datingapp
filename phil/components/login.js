import React, {Component} from 'react'
import Quiz from './quiz.js'
import Profile from './profile.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Login extends Component{
  constructor(){
    super();
    this.state={
      showProfile:true
    }

  }

VisitProfile=()=>{
  this.setState({showProfile:true})
}

userLogin=()=>{
  VisitProfile()
}

  render(){
    if(!this.state.showProfile){
    return(
      <View>
      <Textinput style={{backgroungColor:'orange', color:'blue'}} placeholder="username"/>
      <Textinput style={{backgroungColor:'orange', color:'blue'}} placeholder="password"/>
      <Button
      title="login"
      onPress={this.userLogin}/>
      </View>
    )
  }
  else if (this.state.showProfile){
    return(
      <View>
        <Text style={{color:'blue'}}>
        welcome to your Profile
        </Text>
        <Profile />
      </View>
    )
  }
}
}

AppRegistry.registerComponent('Login', ()=>Login);
