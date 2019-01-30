import React, {Component} from 'react'
import Profile from './components/profile.js'
import Quiz from './components/quiz.js'
import Signup from './components/signup.js'
import Header from './components/header.js'

import {AppRegistry, Image, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class MyApp extends Component{
  constructor(){
    super();
    this.state={
      showSignup: false,
    }
  }

signup=()=>{
  this.setState({showSignup:true})
}

goBack=()=>{
  this.setState({showSignup:false})
}

render(){
    if (this.state.showSignup){
    return(
      <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>

        <View style={{backgroundColor:'green'}}>
          <Signup/>
        </View>



      </View>
    )}
  if (!this.state.showSignup){
    return(
      <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>

      <View style={{height:200, width:300}}>
        <Header/>
      </View>


        <View style={{height:400, width:300}}>
            <Text style={{color:'white'}}>
                Here at FTG, we are committed to helping you build a lasting relationship that you can keep for the rest of your life.
                we are not like the other guys, where you may find a casual fling for a few days, weeks, or months, but Mr. or Mrs. right, not just right now.
                If you wish to signup for a free account today, please click the "signup" button, answer some basic questions about yourself and get started at your leisure.
                After creating your account, you can either select your top 3 love values from the list, or if you need some help narrowing it down, go ahead and take our
                optional quiz and we will see which three we believe are most aligned with you. Feel free to edit our suggestions if you disagree, you can also change these at
                any time under your account settings.
                Thanks for stopping by!
            </Text>
        </View>
        <View style={{height:100, width:300}}>
          <Button

          onPress={()=>this.signup()}
          title="signup"/>


        </View>



      </View>
    )
}
}
}
AppRegistry.registerComponent('phil', ()=>MyApp);
