import React, {Component} from 'react'
import Quiz from './quiz.js'
import MyApp from '../index.ios.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Demographic extends Component{
  constructor(){
    super();
    this.state={
      showQuiz:false,
      goHome: false
    }

  }

  showQuiz=()=>{
    this.setState({showQuiz:true})
  }

  goHome=()=>{
    this.setState({goHome:true})
  }

  render(){
    if(this.state.goHome){
      return(
        <View>
        <MyApp />
        </View>
      )
    }
    if(!this.state.showQuiz){
    return(
      <View>
      <View style={{backgroundColor:'pink', height:500, width:300}}>
      <TextInput placeholder="first name"/>
      <TextInput placeholder="last name"/>
      <TextInput placeholder="email"/>
      <TextInput placeholder="phone number"/>
      <TextInput placeholder="gender"/>
      <TextInput placeholder="username"/>
      <TextInput placeholder="password"/>
      </View>
      <Button
        title="proceed to quiz"
        onPress={this.showQuiz}
        />
        <Button title="return to homepage"
                onPress={this.goHome}/>
      </View>
    )
  }
  if(this.state.showQuiz){
    return(
      <View>
      <Quiz />
      <Button title="return to homepage"
              onPress={this.goHome}/>
      </View>
    )
  }

  }
}


AppRegistry.registerComponent('Demographic', ()=>Demographic);
