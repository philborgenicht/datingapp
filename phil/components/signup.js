import React, {Component} from 'react'
import Demographic from './demographics.js'
import MyApp from '../index.ios.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class Signup extends Component{
  constructor(){
    super();
    this.state={
      showQuestionnaire: false,
      showQuiz: false,
      returnHome: false

    }
  }
  register=()=>{
    this.setState({showQuestionnaire:true})
  }
  enterInfo=()=>{
    this.setState({showQuiz:true})
  }
  goBack=()=>{
    this.setState({returnHome:true})
  }


  render(){

    if(this.state.returnHome ){
      return(
        <View>
        <MyApp/>
        </View>
      )
    }

  if(!this.state.showQuestionnaire && !this.state.showQuiz ){
    return(
      <View style={{flexDirection: 'column', backgroundColor:'green', alignItems:'center', justifyContent: 'center'}}>
      <Text style={{color: 'purple'}}>
      welcome to the signup section
      please enter your information and then either proceed to our optional quiz to determine your top three love values.
      if you are already familiar with your love languages, feel free to skip the quiz and select them on your own.
      if you take the quiz, and are dissatisfied with the results, feel free to choose your own love values, as well...these can always be updated in your account settings in the future too.
      </Text>
      <Button
      onPress={()=>this.register()}
      title="proceed to registration"/>
      <Button
      title="return to homepage"
      onPress={this.goBack}/>

      </View>
    )
  }
  if(this.state.showQuestionnaire && !this.state.showQuiz){
  return(
    <View style={{flexDirection: 'column', backgroundColor:'yellow', alignItems:'center', justifyContent: 'center'}}>

    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:200, width:400}}>
    <Text>please tell us a little bit about yourself</Text>
    </View>

    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:100, width:400}}>
    <Text>Demographic/Personal Info</Text>
    </View>
    <View>
    <Button
    title="proceed to personal info"
    onPress={this.enterInfo}/>
    <Button
    title="return to homepage"
    onPress={this.goBack}/>

    </View>

    </View>
  )
}
if(this.state.showQuestionnaire && !this.state.showQuiz && this.state.returnHome){
  return(
    <View>
    <MyApp />
    </View>
  )
}
  if(this.state.showQuestionnaire && this.state.showQuiz){
    return(
      <View>
      <Demographic/>
      </View>
    )
  }

  }
}


AppRegistry.registerComponent('Signup', ()=>Signup);

const styles=StyleSheet.create({
  question:{
    backgroundColor:'white',
    color: 'white'
  }
})
